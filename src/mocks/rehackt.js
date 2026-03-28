// Stub for rehackt in non-React (Vue) environments.
// Apollo Client uses rehackt only in @apollo/client/react/hooks which are
// never called when using @vue/apollo-composable.

function noop() {}
function noopRef() { return { current: null } }
function noopMemo(fn) { return fn() }
function noopContext() { return null }
function noopState(init) { return [typeof init === 'function' ? init() : init, noop] }
function noopCreateContext(def) { return { _currentValue: def, Provider: noop, Consumer: noop } }

module.exports.useState = noopState
module.exports.useEffect = noop
module.exports.useLayoutEffect = noop
module.exports.useRef = noopRef
module.exports.useMemo = noopMemo
module.exports.useCallback = noop
module.exports.useContext = noopContext
module.exports.useReducer = noopState
module.exports.useSyncExternalStore = noop
module.exports.useTransition = () => [false, noop]
module.exports.useDeferredValue = (v) => v
module.exports.useInsertionEffect = noop
module.exports.useImperativeHandle = noop
module.exports.useDebugValue = noop
module.exports.createContext = noopCreateContext
module.exports.createRef = noopRef
module.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = undefined
module.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = undefined
module.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = undefined
