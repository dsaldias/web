# @dsaldias/auth-web

Sistema RBAC (control de acceso basado en roles) para Vue 3 + Quasar 2, distribuido como librería instalable desde GitHub.

## Usar como librería en un proyecto Quasar

### 1. Crear el proyecto consumidor

```bash
yarn create quasar
yarn install
```

### 2. Instalar la librería

```bash
yarn add git+ssh://git@github.com/dsaldias/web.git
```

### 3. Inicializar

```bash
npx auth-web-init
```

Genera automáticamente:

| Archivo | Descripción |
| --- | --- |
| `src/App.vue` | Monta las suscripciones WebSocket de notificaciones |
| `src/boot/auth.ts` | Registra `AuthPlugin` con los endpoints del servidor |
| `src/router/routes.ts` | Rutas RBAC (usuarios, roles, unidades, tickets, etc.) |
| `src/router/rutas-app.ts` | Archivo vacío para las rutas propias de tu app |
| `.env` | Variables de entorno con URLs del servidor RBAC |

También parchea `quasar.config.ts` para agregar `'auth'` al array `boot`.

### 4. Levantar

```bash
quasar dev -m pwa
```

---

## Estructura para el proyecto consumidor

- **Rutas propias** → `src/router/rutas-app.ts`
- **Páginas propias** → `src/pages/app/`

## Actualizar la librería en el consumidor

Después de hacer cambios en este repo y pushear:

```bash
# En este repo — compilar y pushear
npm run build:lib
git add dist && git commit -m "build" && git push

# En el proyecto consumidor
yarn upgrade @dsaldias/auth-web
```

---

## Desarrollo de esta librería

```bash
quasar dev -m pwa   # Levantar en modo standalone
npm run build:lib   # Compilar dist/ para distribución
npm run lint        # ESLint
npm run format      # Prettier
```

Los endpoints GraphQL se configuran en `.env` (ver `.env-default` para la lista completa de variables).
