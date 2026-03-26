<template>
  <div class="text-center q-my-none q-py-none" v-if="show_tuto">
    <q-btn square flat color="green" class="q-my-none tuto_btn" @click="iniciarTour">
      Iniciar el tour guiado
    </q-btn>
  </div>
</template>

<style>
.tuto_btn {
  background: linear-gradient(90deg,
      #ff980000,
      #aadde9dd,
      #ff980000,
      #aadde9dd,
      #ff980000);
  background-size: 200% 100%;
  animation: wave-smooth 3s ease-in-out infinite;
}

@keyframes wave-smooth {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}
</style>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import "src/css/tuto_driver.scss";

const show_tuto = ref(false)

const iniciarTour = async () => {
  const [{ driver }] = await Promise.all([
    import('driver.js'),
    import('driver.js/dist/driver.css'),
  ])

  const driverObj = driver({
    popoverClass: 'driverjs-theme',
    overlayColor: 'black',
    nextBtnText: 'Siguiente ->',
    prevBtnText: '<- Atras',
    doneBtnText: '✕',
    showProgress: true,
    animate: true,
    allowClose: true,
    showButtons: ['next', 'previous', 'close'],
    steps: [
      { element: '#tuto_menu_element', popover: { title: 'Bienvenido al tutorial - Menu lateral', description: 'Aqui se encuentran las opciones de su menu principal segun el rol que tengas en el sistema', side: "left", align: 'start' } },
      { element: '#tuto_video_tutorial', popover: { title: 'video tutorial del sistema', description: 'Haz click en esta opcion para visualizar el video tutorial para usar el sistema', side: "bottom", align: 'start' } },
      { element: '#tuto_icon_ws', popover: { title: 'Icono de estado', description: 'Este icono representa el estado de la conexion, en color verde la conexion con el servidor es estable, naranja en proceso de conexion, rojo no se pudo conectar con el servidor puede que el servidor tenga problemas o tu conexion no es buena.', side: "top", align: 'start' } },
      { element: '#tuto_rol_select', popover: { title: 'Seleccion del rol', description: 'Aqui puedes cambiar entre los diferentes roles que tengas en el sistema', side: "right", align: 'start' } },
      { element: '#tuto_mode_dark', popover: { title: 'Modo Oscuro y claro', description: 'Con esta opcion puedes cambiar el tema del sistema entre el modo oscuro y el modo claro', side: "right", align: 'start' } },
      { element: '#tuto_hora_session', popover: { title: 'Fin de la session', description: 'Tiempo final para volver a ingresar tu clave de acceso', side: "right", align: 'start' } },
      { element: '#tuto_btn_perfil', popover: { title: 'Nombre de usuario', description: 'Con este boton podras editar informacion de tu perfil y cerrar session', side: "right", align: 'start' } },
      { element: '#tuto_reporte1', popover: { title: 'Panel de reportes', description: 'Aqui podras visualizar alguna informacion relevante del sistema', side: "bottom", align: 'start' } },
      { element: '#tuto_reporte2', popover: { title: 'Panel de reportes 2', description: 'Estadisticas sobre la app', side: "left", align: 'start' } },
      { popover: { title: 'Fin de este tutorial', description: 'Espero hayas tenido mas claro las opciones del sistema' } }
    ],
    onDestroyStarted: () => {
      driverObj.destroy();
      /* if (!driverObj.hasNextStep() || confirm("Cerrar el tutorial")) {
        driverObj.destroy();
      } */
    },
  });

  driverObj.drive();
}

onMounted(() => {
  const show = process.env.SHOW_TOUR_TUTO
  show_tuto.value = show == '1'
})
</script>
