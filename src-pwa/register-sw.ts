import { register } from 'register-service-worker'

register(import.meta.env.QUASAR_SERVICE_WORKER_FILE, {
  ready() {
    // Service worker is active.
  },

  registered() {
    // Service worker has been registered.
  },

  cached() {
    // Content has been cached for offline use.
  },

  updatefound() {
    // New content is downloading.
  },

  updated() {
    // New content is available; the application can now request a refresh.
  },

  offline() {
    // The application is running in offline mode.
  },

  error() {
    // Service worker registration failed.
  },
})
