export function useTransition(): (boolean | typeof noop)[];
export function useDeferredValue(v: any): any;
declare function noopState(init: any): any[];
declare function noop(): void;
declare function noopRef(): {
    current: null;
};
declare function noopMemo(fn: any): any;
declare function noopContext(): null;
declare function noopCreateContext(def: any): {
    _currentValue: any;
    Provider: typeof noop;
    Consumer: typeof noop;
};
export { noopState as useState, noop as useEffect, noop as useLayoutEffect, noopRef as useRef, noopMemo as useMemo, noop as useCallback, noopContext as useContext, noopState as useReducer, noop as useSyncExternalStore, noop as useInsertionEffect, noop as useImperativeHandle, noop as useDebugValue, noopCreateContext as createContext, noopRef as createRef, undefined as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, undefined as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, undefined as __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE };
