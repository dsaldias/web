<template>
  <q-dialog v-model="dialogOpen">
    <q-card class="chat-modal">
      <q-toolbar class="chat-toolbar">
        <q-btn v-if="selectedChat" flat round dense icon="arrow_back" @click="closeMessages" />
        <q-toolbar-title class="ellipsis">
          {{ selectedChat ? chatName(selectedChat) : userPickerOpen ? 'Nuevo chat' : 'Chat' }}
        </q-toolbar-title>
        <q-btn v-if="!selectedChat && !userPickerOpen" flat round dense icon="person_add" @click="openUserPicker" />
        <q-btn v-if="!selectedChat && !userPickerOpen" flat round dense icon="close" @click="closeDialog" />
      </q-toolbar>

      <q-card-section class="chat-body">
        <div v-if="!selectedChat && userPickerOpen" class="chat-picker">
          <div>
            <q-btn dense outline color="primary" icon="arrow_back" label="Chats" @click="closeUserPicker" />
          </div>
          <q-input
            v-model.trim="userSearch"
            dense
            outlined
            clearable
            debounce="250"
            placeholder="Buscar usuario"
            @keyup.enter="searchUsers"
          >
            <template #prepend>
              <q-icon name="search" />
            </template>
            <template #append>
              <q-btn dense flat color="primary" label="Buscar" :disable="usersLoading || userSearch.length < 2" @click="searchUsers" />
            </template>
          </q-input>

          <div v-if="usersLoading" class="chat-state chat-state--small">
            <q-spinner color="primary" size="28px" />
            <strong>Buscando usuarios</strong>
          </div>

          <div v-else-if="usersError" class="chat-state chat-state--small">
            <q-icon name="chat" size="30px" color="primary" />
            <strong>No se pudo buscar</strong>
            <span>{{ usersError }}</span>
          </div>

          <div v-else-if="!userResults.length" class="chat-state chat-state--small">
            <q-icon name="person_search" size="30px" color="primary" />
            <strong>Busca por nombre</strong>
            <span>Escribe al menos 2 caracteres.</span>
          </div>

          <q-list v-else class="chat-user-list" separator>
            <q-item
              v-for="user in userResults"
              :key="String(user.id)"
              clickable
              dense
              class="chat-user-item"
              @click="startChatWithUser(user)"
            >
              <q-item-section avatar>
                <q-avatar size="26px" color="primary" text-color="white">{{ userInitial(user) }}</q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ellipsis">{{ userName(user) }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div v-else-if="!selectedChat && loading" class="chat-state">
          <q-spinner color="primary" size="32px" />
          <strong>Cargando chats</strong>
        </div>

        <div v-else-if="!selectedChat && errorMessage" class="chat-state">
          <q-icon name="chat" size="34px" color="primary" />
          <strong>No se pudieron cargar los chats</strong>
          <span>{{ errorMessage }}</span>
          <q-btn dense outline color="primary" label="Reintentar" @click="loadChats" />
        </div>

        <div v-else-if="!selectedChat && !chats.length" class="chat-state">
          <q-icon name="chat" size="34px" color="primary" />
          <strong>Sin conversaciones</strong>
        </div>

        <q-list v-else-if="!selectedChat" class="chat-list" separator>
          <q-item
            v-for="chat in chats"
            :key="String(chat.id)"
            clickable
            dense
            class="chat-item"
            @click="openMessages(chat)"
          >
            <q-item-section avatar>
              <q-avatar size="28px" color="primary" text-color="white">
                <q-img v-if="chat.foto_url" :src="String(chat.foto_url)" />
                <span v-else>{{ chatInitial(chat) }}</span>
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="chat-name">{{ chatName(chat) }}</q-item-label>
              <q-item-label caption class="ellipsis">{{ chatPreview(chat) }}</q-item-label>
            </q-item-section>
            <q-item-section side class="chat-side">
              <q-badge v-if="chatUnreadCount(chat) > 0" color="red" rounded :label="chatUnreadLabel(chat)" />
              <small>{{ chatDate(chat) }}</small>
            </q-item-section>
          </q-item>
        </q-list>

        <div v-else class="chat-messages">
          <div ref="messageScrollRef" class="chat-message-scroll">
            <div v-if="messagesLoading" class="chat-state chat-state--small">
              <q-spinner color="primary" size="28px" />
              <strong>Cargando mensajes</strong>
            </div>

            <div v-else-if="messagesError" class="chat-state chat-state--small">
              <q-icon name="chat" size="30px" color="primary" />
              <strong>No se pudieron cargar los mensajes</strong>
              <span>{{ messagesError }}</span>
              <q-btn dense outline color="primary" label="Reintentar" @click="loadMessages" />
            </div>

            <div v-else-if="!messages.length" class="chat-state chat-state--small">
              <q-icon name="chat" size="30px" color="primary" />
              <strong>Sin mensajes</strong>
            </div>

            <div v-else class="chat-message-list">
              <div
                v-for="message in messages"
                :key="String(message.id)"
                class="chat-message"
                :class="{ 'chat-message--mine': isMine(message) }"
              >
                <span>{{ messageText(message) }}</span>
                <small>{{ messageTime(message) }}</small>
              </div>
              <span ref="messageBottomRef" class="chat-message-bottom" />
            </div>
          </div>

          <q-form class="chat-composer" @submit.prevent="sendMessage">
            <div v-if="composerBlockedReason" class="chat-warning">
              {{ composerBlockedReason }}
            </div>
            <div class="row no-wrap q-gutter-xs">
              <q-input
                v-model="draftMessage"
                dense
                outlined
                class="col"
                placeholder="Escribe un mensaje"
                :disable="Boolean(composerBlockedReason) || sendingMessage"
              />
              <q-btn
                round
                color="primary"
                icon="send"
                type="submit"
                :loading="sendingMessage"
                :disable="Boolean(composerBlockedReason) || !draftMessage.trim()"
              />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { computed, nextTick, ref, watch } from 'vue'
import ChatsService from 'src/stores/auth/services/chatsService'
import { useLoginStore } from 'src/stores/auth/user'
import { parseFecha } from 'src/stores/auth/utils'

const store = useLoginStore()
const chatsService = new ChatsService()
const isOpen = ref(false)
const chats = ref<any[]>([])
const loading = ref(false)
const errorMessage = ref('')
const selectedChat = ref<any>(null)
const messages = ref<any[]>([])
const messagesLoading = ref(false)
const messagesError = ref('')
const messageScrollRef = ref<HTMLElement | null>(null)
const messageBottomRef = ref<HTMLElement | null>(null)
const draftMessage = ref('')
const sendingMessage = ref(false)
const pendingMessagesReload = ref(false)
const userPickerOpen = ref(false)
const userSearch = ref('')
const userResults = ref<any[]>([])
const allUsers = ref<any[]>([])
const usersLoading = ref(false)
const usersError = ref('')

const dialogOpen = computed({
  get: () => isOpen.value,
  set: (value: boolean) => {
    if (value) {
      isOpen.value = true
      return
    }
    requestClose()
  },
})

const currentUserId = computed(() => {
  const dataUser = typeof store.dataUser == 'string' ? JSON.parse(store.dataUser) : store.dataUser
  return String(dataUser?.usuario?.id || '')
})

const participantIds = computed(() => {
  const memberIds = chatMemberIds(selectedChat.value)
  if (memberIds.length) return memberIds

  return Array.from(new Set(
    messages.value
      .map((message) => String(message.sender_id || ''))
      .filter(Boolean),
  ))
})

const destinatorId = computed(() => {
  if (participantIds.value.length !== 2) return ''
  return participantIds.value.find((id) => id !== currentUserId.value) || ''
})

const composerBlockedReason = computed(() => {
  if (!currentUserId.value) return 'No se pudo identificar el usuario actual.'
  if (participantIds.value.length > 2) return 'Este chat parece ser grupal y no permite enviar mensajes por ahora.'
  if (!destinatorId.value) return 'No se pudo identificar el destinatario de este chat.'
  return ''
})

watch(
  () => messages.value.length,
  () => {
    void scrollMessagesToBottom()
  },
)

watch(
  () => store.chat,
  (chat) => {
    void handleIncomingChatNotification(chat)
  },
)

async function open() {
  isOpen.value = true
  selectedChat.value = null
  userPickerOpen.value = false
  await loadChats()
}

function closeDialog() {
  isOpen.value = false
}

function requestClose() {
  if (selectedChat.value) {
    closeMessages()
    return
  }
  closeDialog()
}

async function loadChats() {
  if (!currentUserId.value) {
    chats.value = []
    errorMessage.value = 'No se pudo identificar el usuario actual.'
    return
  }

  loading.value = true
  errorMessage.value = ''
  try {
    const response: any = await chatsService.chats_by_user(currentUserId.value)
    chats.value = response?.chats_by_user || []
    store.setChatUnreadCount(chats.value.reduce((total, chat) => total + chatUnreadCount(chat), 0))
  } catch (error: any) {
    chats.value = []
    errorMessage.value = error?.message || 'Error inesperado.'
  } finally {
    loading.value = false
  }
}

function openMessages(chat: any) {
  userPickerOpen.value = false
  selectedChat.value = chat
  messages.value = []
  void loadMessages()
}

function closeMessages() {
  selectedChat.value = null
  messages.value = []
  messagesError.value = ''
  draftMessage.value = ''
  void loadChats()
}

function openUserPicker() {
  userPickerOpen.value = true
  userSearch.value = ''
  userResults.value = []
  usersError.value = ''
}

function closeUserPicker() {
  userPickerOpen.value = false
  userSearch.value = ''
  userResults.value = []
  usersError.value = ''
  void loadChats()
}

async function loadMessages() {
  if (!selectedChat.value?.id) return
  if (messagesLoading.value) {
    pendingMessagesReload.value = true
    return
  }

  messagesLoading.value = true
  messagesError.value = ''
  try {
    const response: any = await chatsService.chat_mensajes(String(selectedChat.value.id))
    messages.value = (response?.chat_mensajes || []).slice().reverse()
  } catch (error: any) {
    messages.value = []
    messagesError.value = error?.message || 'Error inesperado.'
  } finally {
    messagesLoading.value = false
    await scrollMessagesToBottom()
    if (pendingMessagesReload.value) {
      pendingMessagesReload.value = false
      await loadMessages()
    }
  }
}

async function searchUsers() {
  if (userSearch.value.length < 2) return

  usersLoading.value = true
  usersError.value = ''
  try {
    if (!allUsers.value.length) {
      const response: any = await chatsService.usuarios_chat({ rol: null })
      allUsers.value = response?.usuarios || []
    }
    userResults.value = filterUsers(allUsers.value, userSearch.value)
  } catch (error: any) {
    userResults.value = []
    usersError.value = error?.message || 'Error inesperado.'
  } finally {
    usersLoading.value = false
  }
}

function filterUsers(users: any[], text: string) {
  const search = normalizeSearch(text)
  return users
    .filter((user: any) => String(user.id || '') !== currentUserId.value)
    .filter((user: any) => normalizeSearch(userName(user)).includes(search))
    .slice(0, 50)
}

function normalizeSearch(value: string) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function startChatWithUser(user: any) {
  selectedChat.value = {
    id: '',
    nombre: userName(user),
    tipo: 'chat',
    miembros: [
      { usuario_id: currentUserId.value },
      { usuario_id: user.id },
    ],
  }
  userPickerOpen.value = false
  messages.value = []
  messagesError.value = ''
  draftMessage.value = ''
}

async function handleIncomingChatNotification(chat: any) {
  if (!chat || !isOpen.value) return

  const conversationId = notificationConversationId(chat)
  if (!conversationId) return

  if (selectedChat.value && String(selectedChat.value.id || '') === conversationId) {
    await loadMessages()
    return
  }

  if (!selectedChat.value) await loadChats()
}

function notificationConversationId(chat: any) {
  return String(chat.conversation_id || chat.conversacion_id || chat.id || '').trim()
}

async function sendMessage() {
  const text = draftMessage.value.trim()
  if (!text || composerBlockedReason.value || sendingMessage.value) return

  sendingMessage.value = true
  try {
    const response: any = await chatsService.chat_enviar_mensaje({
      sender_id: currentUserId.value,
      destinator_id: destinatorId.value,
      tipo: 'text',
      texto: text,
    })
    const created = response?.chat_enviar_mensaje
    if (created) {
      messages.value.push(created)
      if (selectedChat.value && !selectedChat.value.id) selectedChat.value.id = created.conversacion_id
    }
    draftMessage.value = ''
    await scrollMessagesToBottom()
  } catch (error: any) {
    messagesError.value = error?.message || 'No se pudo enviar el mensaje.'
  } finally {
    sendingMessage.value = false
  }
}

async function scrollMessagesToBottom() {
  await nextTick()
  await new Promise((resolve) => window.requestAnimationFrame(resolve))
  messageBottomRef.value?.scrollIntoView({ block: 'end' })
  const element = messageScrollRef.value
  if (element) element.scrollTop = element.scrollHeight
}

function chatName(chat: any) {
  return String(chat?.nombre || `Chat ${chat?.id || ''}`).trim()
}

function chatInitial(chat: any) {
  return chatName(chat).slice(0, 1).toUpperCase()
}

function chatPreview(chat: any) {
  return String(chat?.ultimo_mensaje || chat?.tipo || 'chat')
}

function chatDate(chat: any) {
  const value = chat?.fecha_update || chat?.fecha_registro
  if (!value) return ''
  return parseFecha(value)
}

function chatMemberIds(chat: any) {
  const members = Array.isArray(chat?.miembros) ? chat.miembros : []
  return Array.from(new Set(
    members
      .map((member: any) => String(member?.usuario_id || ''))
      .filter(Boolean),
  ))
}

function chatUnreadCount(chat: any) {
  const value = Number(chat?.no_leidos || 0)
  return Number.isFinite(value) ? value : 0
}

function chatUnreadLabel(chat: any) {
  const count = chatUnreadCount(chat)
  return count > 99 ? '99+' : String(count)
}

function userName(user: any) {
  return [user.nombres, user.apellido1, user.apellido2].filter(Boolean).join(' ') || `Usuario ${user.id || ''}`
}

function userInitial(user: any) {
  return userName(user).slice(0, 1).toUpperCase()
}

function isMine(message: any) {
  return String(message.sender_id || '') === currentUserId.value
}

function messageText(message: any) {
  return String(message.texto || '').trim() || `[${message.tipo || 'mensaje'}]`
}

function messageTime(message: any) {
  const value = message.created_at || message.edited_at
  if (!value) return ''
  return parseFecha(value)
}

defineExpose({ open })
</script>

<style scoped>
.chat-modal {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  width: min(460px, calc(100vw - 24px));
  height: min(540px, calc(100vh - 24px));
}

.chat-toolbar {
  min-height: 44px;
}

.chat-body {
  min-height: 0;
  padding: 8px;
  overflow: hidden;
}

.chat-list {
  height: 100%;
  overflow: auto;
}

.chat-picker {
  display: grid;
  align-content: start;
  gap: 8px;
  height: 100%;
  min-height: 0;
}

.chat-user-list {
  min-height: 0;
  overflow: auto;
}

.chat-user-item {
  min-height: 36px;
  padding: 4px 6px;
}

.chat-item {
  min-height: 38px;
  padding: 3px 6px;
}

.chat-name {
  font-size: 0.86rem;
  font-weight: 700;
  line-height: 1.1;
}

.chat-side {
  align-items: flex-end;
  gap: 2px;
  min-width: 62px;
}

.chat-side small {
  max-width: 62px;
  overflow: hidden;
  font-size: 0.62rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.7;
}

.chat-messages {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: 8px;
  height: 100%;
  min-height: 0;
}

.chat-message-scroll {
  min-height: 0;
  overflow: auto;
  padding-right: 2px;
}

.chat-message-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.chat-message {
  display: grid;
  gap: 2px;
  align-self: flex-start;
  max-width: 88%;
  padding: 6px 8px;
  background: rgba(127, 127, 127, 0.12);
  border-radius: 8px;
}

.chat-message--mine {
  align-self: flex-end;
  color: white;
  background: var(--q-primary);
}

.chat-message span {
  font-size: 0.86rem;
  line-height: 1.25;
  white-space: pre-wrap;
  word-break: break-word;
}

.chat-message small {
  font-size: 0.66rem;
  line-height: 1;
  text-align: right;
  opacity: 0.72;
}

.chat-message-bottom {
  display: block;
  height: 1px;
}

.chat-composer {
  padding-top: 6px;
  border-top: 1px solid rgba(127, 127, 127, 0.25);
}

.chat-warning {
  margin-bottom: 4px;
  color: #d32f2f;
  font-size: 0.74rem;
  line-height: 1.25;
}

.chat-state {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 6px;
  min-height: 260px;
  text-align: center;
}

.chat-state--small {
  min-height: 220px;
}
</style>
