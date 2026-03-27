import { default as Validaciones } from './validador';
declare const _default: import('vue').DefineComponent<{}, {
    store: import('pinia').Store<"userstore", {
        sessionkey: import('vue').Ref<string | null, string | null>;
        sessiontime: import('vue').Ref<number, number>;
        dataUser: import('vue').Ref<any, any>;
        rolUnidad: import('vue').Ref<any, any>;
        menus: import('vue').Ref<any, any>;
        tiempoSession: import('vue').Ref<string | null, string | null>;
        ws_noti_status: import('vue').Ref<string, string>;
        ws_total_conectados: import('vue').Ref<string, string>;
        ws_conectados: import('vue').Ref<string, string>;
        loading_menus: import('vue').Ref<boolean, boolean>;
        notify_data: {};
        thema_cuaderno: import('vue').Ref<boolean, boolean>;
        last_dark_state: import('vue').Ref<boolean, boolean>;
    }, {
        getSessionKey: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<string | null>;
        getSessionTime: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<number>;
        getDataUser: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<any>;
        getMenus: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<any>;
        getTiempoSession: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<string | null>;
        getWsNoti: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<string>;
        getWsTotalContectados: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<string>;
        getWsContectados: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<string>;
        getNotifyData: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<{}>;
        getThemaCuaderno: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<boolean>;
        getLastDarkstate: (state: {
            sessionkey: string | null;
            sessiontime: number;
            dataUser: any;
            rolUnidad: any;
            menus: any;
            tiempoSession: string | null;
            ws_noti_status: string;
            ws_total_conectados: string;
            ws_conectados: string;
            loading_menus: boolean;
            notify_data: {};
            thema_cuaderno: boolean;
            last_dark_state: boolean;
        } & import('pinia').PiniaCustomStateProperties<{
            sessionkey: import('vue').Ref<string | null, string | null>;
            sessiontime: import('vue').Ref<number, number>;
            dataUser: import('vue').Ref<any, any>;
            rolUnidad: import('vue').Ref<any, any>;
            menus: import('vue').Ref<any, any>;
            tiempoSession: import('vue').Ref<string | null, string | null>;
            ws_noti_status: import('vue').Ref<string, string>;
            ws_total_conectados: import('vue').Ref<string, string>;
            ws_conectados: import('vue').Ref<string, string>;
            loading_menus: import('vue').Ref<boolean, boolean>;
            notify_data: {};
            thema_cuaderno: import('vue').Ref<boolean, boolean>;
            last_dark_state: import('vue').Ref<boolean, boolean>;
        }>) => import('vue').ComputedRef<boolean>;
    }, {
        setSessionKey(xskey?: string, recreate?: boolean): void;
        setNewSessionKey(xskey: string): void;
        setNewSessionTime(xskey: number): void;
        setUser(user: any): void;
        setMenus(menus: any): void;
        setLoadingMenus(f: boolean): void;
        setWsNoti(e: string): void;
        setWsTotalConectados(e: string): void;
        setWsConectados(e: string): void;
        setRolUnidad(rolunidad: any): void;
        setNotifyData(data: any): void;
        setThemaCuaderno(xskey: boolean): void;
        setLastDarkstate(xskey: boolean): void;
        clearStore(reload?: boolean): void;
    }>;
    alert: import('vue').Ref<boolean, boolean>;
    loading: import('vue').Ref<boolean, boolean>;
    input: import('vue').Ref<any, any>;
    validaciones: Validaciones;
    foto_file: import('vue').Ref<any, any>;
    foto_64: import('vue').Ref<string, string>;
    refGeo: import('vue').Ref<any, any>;
    cerrar: () => boolean;
    open: () => Promise<void>;
    onSubmit: () => Promise<void>;
    filevalue: (file: any) => void;
    onRejected: (rejectedEntries: any) => void;
    openGeo: () => void;
    onpin: (lat: any, lon: any) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    Geo: import('vue').DefineComponent<{}, {
        alert: import('vue').Ref<boolean, boolean>;
        loading: import('vue').Ref<boolean, boolean>;
        zoom: import('vue').Ref<number, number>;
        center: import('vue').Ref<any, any>;
        url: import('vue').Ref<string, string>;
        attribution: import('vue').Ref<string, string>;
        mapOptions: import('vue').Ref<{
            zoomSnap: number;
        }, {
            zoomSnap: number;
        } | {
            zoomSnap: number;
        }>;
        showMap: import('vue').Ref<boolean, boolean>;
        refmap: import('vue').Ref<any, any>;
        markerLatLng: import('vue').Ref<any, any>;
        open: (lat?: null, lon?: null) => Promise<unknown>;
        cerrar: () => boolean;
        handleMapClick: (event: any) => void;
        limpiar: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
        LMap: import('vue').DefineComponent<{
            center: {
                type: import('vue').PropType<import('leaflet').PointExpression>;
            };
            bounds: {
                type: (ObjectConstructor | ArrayConstructor)[];
            };
            maxBounds: {
                type: (ObjectConstructor | ArrayConstructor)[];
            };
            zoom: {
                type: NumberConstructor;
            };
            minZoom: {
                type: NumberConstructor;
            };
            maxZoom: {
                type: NumberConstructor;
            };
            paddingBottomRight: {
                type: import('vue').PropType<import('leaflet').PointExpression>;
            };
            paddingTopLeft: {
                type: import('vue').PropType<import('leaflet').PointExpression>;
            };
            padding: {
                type: import('vue').PropType<import('leaflet').PointExpression>;
            };
            worldCopyJump: {
                type: BooleanConstructor;
                default: undefined;
            };
            crs: {
                type: (ObjectConstructor | StringConstructor)[];
            };
            maxBoundsViscosity: {
                type: NumberConstructor;
            };
            inertia: {
                type: BooleanConstructor;
                default: undefined;
            };
            inertiaDeceleration: {
                type: NumberConstructor;
            };
            inertiaMaxSpeed: {
                type: NumberConstructor;
            };
            easeLinearity: {
                type: NumberConstructor;
            };
            zoomAnimation: {
                type: BooleanConstructor;
                default: undefined;
            };
            zoomAnimationThreshold: {
                type: NumberConstructor;
            };
            fadeAnimation: {
                type: BooleanConstructor;
                default: undefined;
            };
            markerZoomAnimation: {
                type: BooleanConstructor;
                default: undefined;
            };
            noBlockingAnimations: {
                type: BooleanConstructor;
                default: undefined;
            };
            useGlobalLeaflet: {
                type: BooleanConstructor;
                default: boolean;
                custom: boolean;
            };
            options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
                readonly custom: true;
            };
        }, {
            root: import('vue').Ref<HTMLElement | undefined>;
            ready: import('vue').ComputedRef<boolean>;
            leafletObject: import('vue').ComputedRef<{
                getRenderer: (layer: import('leaflet').Path) => import('leaflet').Renderer;
                addControl: (control: import('leaflet').Control) => import('leaflet').Map;
                removeControl: (control: import('leaflet').Control) => import('leaflet').Map;
                addLayer: (layer: import('leaflet').Layer) => import('leaflet').Map;
                removeLayer: (layer: import('leaflet').Layer) => import('leaflet').Map;
                hasLayer: (layer: import('leaflet').Layer) => boolean;
                eachLayer: (fn: (layer: import('leaflet').Layer) => void, context?: any) => import('leaflet').Map;
                openPopup: {
                    (popup: import('leaflet').Popup): import('leaflet').Map;
                    (content: import('leaflet').Content, latlng: import('leaflet').LatLngExpression, options?: import('leaflet').PopupOptions | undefined): import('leaflet').Map;
                };
                closePopup: (popup?: import('leaflet').Popup | undefined) => import('leaflet').Map;
                openTooltip: {
                    (tooltip: import('leaflet').Tooltip): import('leaflet').Map;
                    (content: import('leaflet').Content, latlng: import('leaflet').LatLngExpression, options?: import('leaflet').TooltipOptions | undefined): import('leaflet').Map;
                };
                closeTooltip: (tooltip?: import('leaflet').Tooltip | undefined) => import('leaflet').Map;
                setView: (center: import('leaflet').LatLngExpression, zoom?: number | undefined, options?: import('leaflet').ZoomPanOptions | undefined) => import('leaflet').Map;
                setZoom: (zoom: number, options?: import('leaflet').ZoomPanOptions | undefined) => import('leaflet').Map;
                zoomIn: (delta?: number | undefined, options?: import('leaflet').ZoomOptions | undefined) => import('leaflet').Map;
                zoomOut: (delta?: number | undefined, options?: import('leaflet').ZoomOptions | undefined) => import('leaflet').Map;
                setZoomAround: (position: import('leaflet').LatLngExpression | import('leaflet').Point, zoom: number, options?: import('leaflet').ZoomOptions | undefined) => import('leaflet').Map;
                fitBounds: (bounds: import('leaflet').LatLngBoundsExpression, options?: import('leaflet').FitBoundsOptions | undefined) => import('leaflet').Map;
                fitWorld: (options?: import('leaflet').FitBoundsOptions | undefined) => import('leaflet').Map;
                panTo: (latlng: import('leaflet').LatLngExpression, options?: import('leaflet').PanOptions | undefined) => import('leaflet').Map;
                panBy: (offset: import('leaflet').PointExpression, options?: import('leaflet').PanOptions | undefined) => import('leaflet').Map;
                setMaxBounds: (bounds: import('leaflet').LatLngBoundsExpression) => import('leaflet').Map;
                setMinZoom: (zoom: number) => import('leaflet').Map;
                setMaxZoom: (zoom: number) => import('leaflet').Map;
                panInside: (latLng: import('leaflet').LatLngExpression, options?: import('leaflet').PanInsideOptions | undefined) => import('leaflet').Map;
                panInsideBounds: (bounds: import('leaflet').LatLngBoundsExpression, options?: import('leaflet').PanOptions | undefined) => import('leaflet').Map;
                invalidateSize: (options?: boolean | import('leaflet').InvalidateSizeOptions | undefined) => import('leaflet').Map;
                stop: () => import('leaflet').Map;
                flyTo: (latlng: import('leaflet').LatLngExpression, zoom?: number | undefined, options?: import('leaflet').ZoomPanOptions | undefined) => import('leaflet').Map;
                flyToBounds: (bounds: import('leaflet').LatLngBoundsExpression, options?: import('leaflet').FitBoundsOptions | undefined) => import('leaflet').Map;
                addHandler: (name: string, HandlerClass: typeof import('leaflet').Handler) => import('leaflet').Map;
                remove: () => import('leaflet').Map;
                createPane: (name: string, container?: HTMLElement | undefined) => HTMLElement;
                getPane: (pane: string | HTMLElement) => HTMLElement | undefined;
                getPanes: () => {
                    [name: string]: HTMLElement;
                } & import('leaflet').DefaultMapPanes;
                getContainer: () => HTMLElement;
                whenReady: (fn: () => void, context?: any) => import('leaflet').Map;
                getCenter: () => import('leaflet').LatLng;
                getZoom: () => number;
                getBounds: () => import('leaflet').LatLngBounds;
                getMinZoom: () => number;
                getMaxZoom: () => number;
                getBoundsZoom: (bounds: import('leaflet').LatLngBoundsExpression, inside?: boolean | undefined, padding?: import('leaflet').Point | undefined) => number;
                getSize: () => import('leaflet').Point;
                getPixelBounds: () => import('leaflet').Bounds;
                getPixelOrigin: () => import('leaflet').Point;
                getPixelWorldBounds: (zoom?: number | undefined) => import('leaflet').Bounds;
                getZoomScale: (toZoom: number, fromZoom?: number | undefined) => number;
                getScaleZoom: (scale: number, fromZoom?: number | undefined) => number;
                project: (latlng: import('leaflet').LatLngExpression, zoom?: number | undefined) => import('leaflet').Point;
                unproject: (point: import('leaflet').PointExpression, zoom?: number | undefined) => import('leaflet').LatLng;
                layerPointToLatLng: (point: import('leaflet').PointExpression) => import('leaflet').LatLng;
                latLngToLayerPoint: (latlng: import('leaflet').LatLngExpression) => import('leaflet').Point;
                wrapLatLng: (latlng: import('leaflet').LatLngExpression) => import('leaflet').LatLng;
                wrapLatLngBounds: (bounds: import('leaflet').LatLngBounds) => import('leaflet').LatLngBounds;
                distance: (latlng1: import('leaflet').LatLngExpression, latlng2: import('leaflet').LatLngExpression) => number;
                containerPointToLayerPoint: (point: import('leaflet').PointExpression) => import('leaflet').Point;
                containerPointToLatLng: (point: import('leaflet').PointExpression) => import('leaflet').LatLng;
                layerPointToContainerPoint: (point: import('leaflet').PointExpression) => import('leaflet').Point;
                latLngToContainerPoint: (latlng: import('leaflet').LatLngExpression) => import('leaflet').Point;
                mouseEventToContainerPoint: (ev: MouseEvent) => import('leaflet').Point;
                mouseEventToLayerPoint: (ev: MouseEvent) => import('leaflet').Point;
                mouseEventToLatLng: (ev: MouseEvent) => import('leaflet').LatLng;
                locate: (options?: import('leaflet').LocateOptions | undefined) => import('leaflet').Map;
                stopLocate: () => import('leaflet').Map;
                attributionControl: {
                    setPrefix: (prefix: string | false) => import("leaflet").Control.Attribution;
                    addAttribution: (text: string) => import("leaflet").Control.Attribution;
                    removeAttribution: (text: string) => import("leaflet").Control.Attribution;
                    options: {
                        prefix?: string | boolean | undefined;
                        position?: import('leaflet').ControlPosition | undefined;
                    };
                    getPosition: () => import('leaflet').ControlPosition;
                    setPosition: (position: import('leaflet').ControlPosition) => import("leaflet").Control.Attribution;
                    getContainer: () => HTMLElement | undefined;
                    addTo: (map: import('leaflet').Map) => import("leaflet").Control.Attribution;
                    remove: () => import("leaflet").Control.Attribution;
                    onAdd?: ((map: import('leaflet').Map) => HTMLElement) | undefined;
                    onRemove?: ((map: import('leaflet').Map) => void) | undefined;
                };
                boxZoom: {
                    enable: () => import('leaflet').Handler;
                    disable: () => import('leaflet').Handler;
                    enabled: () => boolean;
                    addHooks?: (() => void) | undefined;
                    removeHooks?: (() => void) | undefined;
                };
                doubleClickZoom: {
                    enable: () => import('leaflet').Handler;
                    disable: () => import('leaflet').Handler;
                    enabled: () => boolean;
                    addHooks?: (() => void) | undefined;
                    removeHooks?: (() => void) | undefined;
                };
                dragging: {
                    enable: () => import('leaflet').Handler;
                    disable: () => import('leaflet').Handler;
                    enabled: () => boolean;
                    addHooks?: (() => void) | undefined;
                    removeHooks?: (() => void) | undefined;
                };
                keyboard: {
                    enable: () => import('leaflet').Handler;
                    disable: () => import('leaflet').Handler;
                    enabled: () => boolean;
                    addHooks?: (() => void) | undefined;
                    removeHooks?: (() => void) | undefined;
                };
                scrollWheelZoom: {
                    enable: () => import('leaflet').Handler;
                    disable: () => import('leaflet').Handler;
                    enabled: () => boolean;
                    addHooks?: (() => void) | undefined;
                    removeHooks?: (() => void) | undefined;
                };
                tap?: {
                    enable: () => import('leaflet').Handler;
                    disable: () => import('leaflet').Handler;
                    enabled: () => boolean;
                    addHooks?: (() => void) | undefined;
                    removeHooks?: (() => void) | undefined;
                } | undefined;
                touchZoom: {
                    enable: () => import('leaflet').Handler;
                    disable: () => import('leaflet').Handler;
                    enabled: () => boolean;
                    addHooks?: (() => void) | undefined;
                    removeHooks?: (() => void) | undefined;
                };
                zoomControl: {
                    options: {
                        zoomInText?: string | undefined;
                        zoomInTitle?: string | undefined;
                        zoomOutText?: string | undefined;
                        zoomOutTitle?: string | undefined;
                        position?: import('leaflet').ControlPosition | undefined;
                    };
                    getPosition: () => import('leaflet').ControlPosition;
                    setPosition: (position: import('leaflet').ControlPosition) => import("leaflet").Control.Zoom;
                    getContainer: () => HTMLElement | undefined;
                    addTo: (map: import('leaflet').Map) => import("leaflet").Control.Zoom;
                    remove: () => import("leaflet").Control.Zoom;
                    onAdd?: ((map: import('leaflet').Map) => HTMLElement) | undefined;
                    onRemove?: ((map: import('leaflet').Map) => void) | undefined;
                };
                options: {
                    preferCanvas?: boolean | undefined;
                    attributionControl?: boolean | undefined;
                    zoomControl?: boolean | undefined;
                    closePopupOnClick?: boolean | undefined;
                    zoomSnap?: number | undefined;
                    zoomDelta?: number | undefined;
                    trackResize?: boolean | undefined;
                    boxZoom?: boolean | undefined;
                    doubleClickZoom?: import('leaflet').Zoom | undefined;
                    dragging?: boolean | undefined;
                    crs?: {
                        latLngToPoint: (latlng: import('leaflet').LatLngExpression, zoom: number) => import('leaflet').Point;
                        pointToLatLng: (point: import('leaflet').PointExpression, zoom: number) => import('leaflet').LatLng;
                        project: (latlng: import('leaflet').LatLng | import('leaflet').LatLngLiteral) => import('leaflet').Point;
                        unproject: (point: import('leaflet').PointExpression) => import('leaflet').LatLng;
                        scale: (zoom: number) => number;
                        zoom: (scale: number) => number;
                        getProjectedBounds: (zoom: number) => import('leaflet').Bounds;
                        distance: (latlng1: import('leaflet').LatLngExpression, latlng2: import('leaflet').LatLngExpression) => number;
                        wrapLatLng: (latlng: import('leaflet').LatLng | import('leaflet').LatLngLiteral) => import('leaflet').LatLng;
                        code?: string | undefined;
                        wrapLng?: [number, number] | undefined;
                        wrapLat?: [number, number] | undefined;
                        infinite: boolean;
                    } | undefined;
                    center?: [number, number] | {
                        equals: (otherLatLng: import('leaflet').LatLngExpression, maxMargin?: number | undefined) => boolean;
                        toString: () => string;
                        distanceTo: (otherLatLng: import('leaflet').LatLngExpression) => number;
                        wrap: () => import('leaflet').LatLng;
                        toBounds: (sizeInMeters: number) => import('leaflet').LatLngBounds;
                        clone: () => import('leaflet').LatLng;
                        lat: number;
                        lng: number;
                        alt?: number | undefined;
                    } | {
                        lat: number;
                        lng: number;
                    } | undefined;
                    zoom?: number | undefined;
                    minZoom?: number | undefined;
                    maxZoom?: number | undefined;
                    layers?: {
                        addTo: (map: import('leaflet').Map | import('leaflet').LayerGroup<any>) => import('leaflet').Layer;
                        remove: () => import('leaflet').Layer;
                        removeFrom: (map: import('leaflet').Map) => import('leaflet').Layer;
                        getPane: (name?: string | undefined) => HTMLElement | undefined;
                        addInteractiveTarget: (targetEl: HTMLElement) => import('leaflet').Layer;
                        removeInteractiveTarget: (targetEl: HTMLElement) => import('leaflet').Layer;
                        bindPopup: (content: ((layer: import('leaflet').Layer) => import('leaflet').Content) | import('leaflet').Content | import('leaflet').Popup, options?: import('leaflet').PopupOptions | undefined) => import('leaflet').Layer;
                        unbindPopup: () => import('leaflet').Layer;
                        openPopup: (latlng?: import('leaflet').LatLngExpression | undefined) => import('leaflet').Layer;
                        closePopup: () => import('leaflet').Layer;
                        togglePopup: () => import('leaflet').Layer;
                        isPopupOpen: () => boolean;
                        setPopupContent: (content: import('leaflet').Content | import('leaflet').Popup) => import('leaflet').Layer;
                        getPopup: () => import('leaflet').Popup | undefined;
                        bindTooltip: (content: import('leaflet').Content | ((layer: import('leaflet').Layer) => import('leaflet').Content) | import('leaflet').Tooltip, options?: import('leaflet').TooltipOptions | undefined) => import('leaflet').Layer;
                        unbindTooltip: () => import('leaflet').Layer;
                        openTooltip: (latlng?: import('leaflet').LatLngExpression | undefined) => import('leaflet').Layer;
                        closeTooltip: () => import('leaflet').Layer;
                        toggleTooltip: () => import('leaflet').Layer;
                        isTooltipOpen: () => boolean;
                        setTooltipContent: (content: import('leaflet').Content | import('leaflet').Tooltip) => import('leaflet').Layer;
                        getTooltip: () => import('leaflet').Tooltip | undefined;
                        onAdd: (map: import('leaflet').Map) => import('leaflet').Layer;
                        onRemove: (map: import('leaflet').Map) => import('leaflet').Layer;
                        getEvents?: (() => {
                            [name: string]: import('leaflet').LeafletEventHandlerFn;
                        }) | undefined;
                        getAttribution?: (() => string | null) | undefined;
                        beforeAdd?: ((map: import('leaflet').Map) => import('leaflet').Layer) | undefined;
                        options: {
                            pane?: string | undefined;
                            attribution?: string | undefined;
                        };
                        on: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tileerror", fn: import('leaflet').TileErrorEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Layer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Layer;
                        };
                        off: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: import('leaflet').LayersControlEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "layeradd" | "layerremove", fn?: import('leaflet').LayerEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "resize", fn?: import('leaflet').ResizeEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "popupopen" | "popupclose", fn?: import('leaflet').PopupEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "tooltipopen" | "tooltipclose", fn?: import('leaflet').TooltipEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "locationerror", fn?: import('leaflet').ErrorEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "locationfound", fn?: import('leaflet').LocationEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: import('leaflet').LeafletMouseEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "keypress" | "keydown" | "keyup", fn?: import('leaflet').LeafletKeyboardEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "zoomanim", fn?: import('leaflet').ZoomAnimEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "dragend", fn?: import('leaflet').DragEndEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: import('leaflet').TileEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "tileerror", fn?: import('leaflet').TileErrorEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: string, fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Layer;
                            (): import('leaflet').Layer;
                        };
                        fire: (type: string, data?: any, propagate?: boolean | undefined) => import('leaflet').Layer;
                        listens: {
                            (type: "resize" | "locationerror" | "locationfound" | "zoomanim" | "dragend" | "tileerror" | "baselayerchange" | "overlayadd" | "overlayremove" | "layeradd" | "layerremove" | "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag" | "popupopen" | "tooltipopen" | "tooltipclose" | "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick" | "keypress" | "keydown" | "keyup" | "tileunload" | "tileloadstart" | "tileload" | "tileabort", propagate?: boolean | undefined): boolean;
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "tileerror", fn: import('leaflet').TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        };
                        once: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tileerror", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Layer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Layer;
                        };
                        addEventParent: (obj: import('leaflet').Evented) => import('leaflet').Layer;
                        removeEventParent: (obj: import('leaflet').Evented) => import('leaflet').Layer;
                        addEventListener: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tileerror", fn: import('leaflet').TileErrorEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Layer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Layer;
                        };
                        removeEventListener: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: import('leaflet').LayersControlEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "layeradd" | "layerremove", fn?: import('leaflet').LayerEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "resize", fn?: import('leaflet').ResizeEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "popupopen" | "popupclose", fn?: import('leaflet').PopupEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "tooltipopen" | "tooltipclose", fn?: import('leaflet').TooltipEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "locationerror", fn?: import('leaflet').ErrorEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "locationfound", fn?: import('leaflet').LocationEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: import('leaflet').LeafletMouseEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "keypress" | "keydown" | "keyup", fn?: import('leaflet').LeafletKeyboardEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "zoomanim", fn?: import('leaflet').ZoomAnimEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "dragend", fn?: import('leaflet').DragEndEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: import('leaflet').TileEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: "tileerror", fn?: import('leaflet').TileErrorEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (type: string, fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Layer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Layer;
                        };
                        clearAllEventListeners: () => import('leaflet').Layer;
                        addOneTimeEventListener: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: "tileerror", fn: import('leaflet').TileErrorEventHandlerFn, context?: any): import('leaflet').Layer;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Layer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Layer;
                        };
                        fireEvent: (type: string, data?: any, propagate?: boolean | undefined) => import('leaflet').Layer;
                        hasEventListeners: (type: string) => boolean;
                    }[] | undefined;
                    maxBounds?: {
                        extend: (latlngOrBounds: import('leaflet').LatLngExpression | import('leaflet').LatLngBoundsExpression) => import('leaflet').LatLngBounds;
                        pad: (bufferRatio: number) => import('leaflet').LatLngBounds;
                        getCenter: () => import('leaflet').LatLng;
                        getSouthWest: () => import('leaflet').LatLng;
                        getNorthEast: () => import('leaflet').LatLng;
                        getNorthWest: () => import('leaflet').LatLng;
                        getSouthEast: () => import('leaflet').LatLng;
                        getWest: () => number;
                        getSouth: () => number;
                        getEast: () => number;
                        getNorth: () => number;
                        contains: (otherBoundsOrLatLng: import('leaflet').LatLngExpression | import('leaflet').LatLngBoundsExpression) => boolean;
                        intersects: (otherBounds: import('leaflet').LatLngBoundsExpression) => boolean;
                        overlaps: (otherBounds: import('leaflet').LatLngBoundsExpression) => boolean;
                        toBBoxString: () => string;
                        equals: (otherBounds: import('leaflet').LatLngBoundsExpression, maxMargin?: number | undefined) => boolean;
                        isValid: () => boolean;
                    } | [number, number][] | undefined;
                    renderer?: {
                        options: {
                            padding?: number | undefined;
                            tolerance?: number | undefined;
                            pane?: string | undefined;
                            attribution?: string | undefined;
                        };
                        addTo: (map: import('leaflet').Map | import('leaflet').LayerGroup<any>) => import('leaflet').Renderer;
                        remove: () => import('leaflet').Renderer;
                        removeFrom: (map: import('leaflet').Map) => import('leaflet').Renderer;
                        getPane: (name?: string | undefined) => HTMLElement | undefined;
                        addInteractiveTarget: (targetEl: HTMLElement) => import('leaflet').Renderer;
                        removeInteractiveTarget: (targetEl: HTMLElement) => import('leaflet').Renderer;
                        bindPopup: (content: ((layer: import('leaflet').Layer) => import('leaflet').Content) | import('leaflet').Content | import('leaflet').Popup, options?: import('leaflet').PopupOptions | undefined) => import('leaflet').Renderer;
                        unbindPopup: () => import('leaflet').Renderer;
                        openPopup: (latlng?: import('leaflet').LatLngExpression | undefined) => import('leaflet').Renderer;
                        closePopup: () => import('leaflet').Renderer;
                        togglePopup: () => import('leaflet').Renderer;
                        isPopupOpen: () => boolean;
                        setPopupContent: (content: import('leaflet').Content | import('leaflet').Popup) => import('leaflet').Renderer;
                        getPopup: () => import('leaflet').Popup | undefined;
                        bindTooltip: (content: import('leaflet').Content | ((layer: import('leaflet').Layer) => import('leaflet').Content) | import('leaflet').Tooltip, options?: import('leaflet').TooltipOptions | undefined) => import('leaflet').Renderer;
                        unbindTooltip: () => import('leaflet').Renderer;
                        openTooltip: (latlng?: import('leaflet').LatLngExpression | undefined) => import('leaflet').Renderer;
                        closeTooltip: () => import('leaflet').Renderer;
                        toggleTooltip: () => import('leaflet').Renderer;
                        isTooltipOpen: () => boolean;
                        setTooltipContent: (content: import('leaflet').Content | import('leaflet').Tooltip) => import('leaflet').Renderer;
                        getTooltip: () => import('leaflet').Tooltip | undefined;
                        onAdd: (map: import('leaflet').Map) => import('leaflet').Renderer;
                        onRemove: (map: import('leaflet').Map) => import('leaflet').Renderer;
                        getEvents?: (() => {
                            [name: string]: import('leaflet').LeafletEventHandlerFn;
                        }) | undefined;
                        getAttribution?: (() => string | null) | undefined;
                        beforeAdd?: ((map: import('leaflet').Map) => import('leaflet').Renderer) | undefined;
                        on: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tileerror", fn: import('leaflet').TileErrorEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Renderer;
                        };
                        off: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: import('leaflet').LayersControlEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "layeradd" | "layerremove", fn?: import('leaflet').LayerEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "resize", fn?: import('leaflet').ResizeEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "popupopen" | "popupclose", fn?: import('leaflet').PopupEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "tooltipopen" | "tooltipclose", fn?: import('leaflet').TooltipEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "locationerror", fn?: import('leaflet').ErrorEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "locationfound", fn?: import('leaflet').LocationEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: import('leaflet').LeafletMouseEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "keypress" | "keydown" | "keyup", fn?: import('leaflet').LeafletKeyboardEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "zoomanim", fn?: import('leaflet').ZoomAnimEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "dragend", fn?: import('leaflet').DragEndEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: import('leaflet').TileEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "tileerror", fn?: import('leaflet').TileErrorEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: string, fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Renderer;
                            (): import('leaflet').Renderer;
                        };
                        fire: (type: string, data?: any, propagate?: boolean | undefined) => import('leaflet').Renderer;
                        listens: {
                            (type: "resize" | "locationerror" | "locationfound" | "zoomanim" | "dragend" | "tileerror" | "baselayerchange" | "overlayadd" | "overlayremove" | "layeradd" | "layerremove" | "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag" | "popupopen" | "tooltipopen" | "tooltipclose" | "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick" | "keypress" | "keydown" | "keyup" | "tileunload" | "tileloadstart" | "tileload" | "tileabort", propagate?: boolean | undefined): boolean;
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: "tileerror", fn: import('leaflet').TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                        };
                        once: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tileerror", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Renderer;
                        };
                        addEventParent: (obj: import('leaflet').Evented) => import('leaflet').Renderer;
                        removeEventParent: (obj: import('leaflet').Evented) => import('leaflet').Renderer;
                        addEventListener: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tileerror", fn: import('leaflet').TileErrorEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Renderer;
                        };
                        removeEventListener: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: import('leaflet').LayersControlEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "layeradd" | "layerremove", fn?: import('leaflet').LayerEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "resize", fn?: import('leaflet').ResizeEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "popupopen" | "popupclose", fn?: import('leaflet').PopupEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "tooltipopen" | "tooltipclose", fn?: import('leaflet').TooltipEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "locationerror", fn?: import('leaflet').ErrorEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "locationfound", fn?: import('leaflet').LocationEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: import('leaflet').LeafletMouseEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "keypress" | "keydown" | "keyup", fn?: import('leaflet').LeafletKeyboardEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "zoomanim", fn?: import('leaflet').ZoomAnimEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "dragend", fn?: import('leaflet').DragEndEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: import('leaflet').TileEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: "tileerror", fn?: import('leaflet').TileErrorEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (type: string, fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Renderer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Renderer;
                        };
                        clearAllEventListeners: () => import('leaflet').Renderer;
                        addOneTimeEventListener: {
                            (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: "tileerror", fn: import('leaflet').TileErrorEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Renderer;
                            (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Renderer;
                        };
                        fireEvent: (type: string, data?: any, propagate?: boolean | undefined) => import('leaflet').Renderer;
                        hasEventListeners: (type: string) => boolean;
                    } | undefined;
                    fadeAnimation?: boolean | undefined;
                    markerZoomAnimation?: boolean | undefined;
                    transform3DLimit?: number | undefined;
                    zoomAnimation?: boolean | undefined;
                    zoomAnimationThreshold?: number | undefined;
                    inertia?: boolean | undefined;
                    inertiaDeceleration?: number | undefined;
                    inertiaMaxSpeed?: number | undefined;
                    easeLinearity?: number | undefined;
                    worldCopyJump?: boolean | undefined;
                    maxBoundsViscosity?: number | undefined;
                    keyboard?: boolean | undefined;
                    keyboardPanDelta?: number | undefined;
                    scrollWheelZoom?: import('leaflet').Zoom | undefined;
                    wheelDebounceTime?: number | undefined;
                    wheelPxPerZoomLevel?: number | undefined;
                    tap?: boolean | undefined;
                    tapTolerance?: number | undefined;
                    touchZoom?: import('leaflet').Zoom | undefined;
                    bounceAtZoomLimits?: boolean | undefined;
                };
                on: {
                    (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tileerror", fn: import('leaflet').TileErrorEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Map;
                    (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Map;
                };
                off: {
                    (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: import('leaflet').LayersControlEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "layeradd" | "layerremove", fn?: import('leaflet').LayerEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "resize", fn?: import('leaflet').ResizeEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "popupopen" | "popupclose", fn?: import('leaflet').PopupEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "tooltipopen" | "tooltipclose", fn?: import('leaflet').TooltipEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "locationerror", fn?: import('leaflet').ErrorEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "locationfound", fn?: import('leaflet').LocationEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: import('leaflet').LeafletMouseEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "keypress" | "keydown" | "keyup", fn?: import('leaflet').LeafletKeyboardEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "zoomanim", fn?: import('leaflet').ZoomAnimEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "dragend", fn?: import('leaflet').DragEndEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: import('leaflet').TileEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "tileerror", fn?: import('leaflet').TileErrorEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: string, fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Map;
                    (): import('leaflet').Map;
                };
                fire: (type: string, data?: any, propagate?: boolean | undefined) => import('leaflet').Map;
                listens: {
                    (type: "resize" | "locationerror" | "locationfound" | "zoomanim" | "dragend" | "tileerror" | "baselayerchange" | "overlayadd" | "overlayremove" | "layeradd" | "layerremove" | "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag" | "popupopen" | "tooltipopen" | "tooltipclose" | "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick" | "keypress" | "keydown" | "keyup" | "tileunload" | "tileloadstart" | "tileload" | "tileabort", propagate?: boolean | undefined): boolean;
                    (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: "tileerror", fn: import('leaflet').TileEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                    (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any, propagate?: boolean | undefined): boolean;
                };
                once: {
                    (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tileerror", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Map;
                    (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Map;
                };
                addEventParent: (obj: import('leaflet').Evented) => import('leaflet').Map;
                removeEventParent: (obj: import('leaflet').Evented) => import('leaflet').Map;
                addEventListener: {
                    (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tileerror", fn: import('leaflet').TileErrorEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Map;
                    (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Map;
                };
                removeEventListener: {
                    (type: "baselayerchange" | "overlayadd" | "overlayremove", fn?: import('leaflet').LayersControlEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "layeradd" | "layerremove", fn?: import('leaflet').LayerEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "resize", fn?: import('leaflet').ResizeEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "popupopen" | "popupclose", fn?: import('leaflet').PopupEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "tooltipopen" | "tooltipclose", fn?: import('leaflet').TooltipEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "locationerror", fn?: import('leaflet').ErrorEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "locationfound", fn?: import('leaflet').LocationEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn?: import('leaflet').LeafletMouseEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "keypress" | "keydown" | "keyup", fn?: import('leaflet').LeafletKeyboardEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "zoomanim", fn?: import('leaflet').ZoomAnimEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "dragend", fn?: import('leaflet').DragEndEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn?: import('leaflet').TileEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: "tileerror", fn?: import('leaflet').TileErrorEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (type: string, fn?: import('leaflet').LeafletEventHandlerFn | undefined, context?: any): import('leaflet').Map;
                    (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Map;
                };
                clearAllEventListeners: () => import('leaflet').Map;
                addOneTimeEventListener: {
                    (type: "baselayerchange" | "overlayadd" | "overlayremove", fn: import('leaflet').LayersControlEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "layeradd" | "layerremove", fn: import('leaflet').LayerEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "zoomlevelschange" | "unload" | "viewreset" | "load" | "zoomstart" | "movestart" | "zoom" | "move" | "zoomend" | "moveend" | "autopanstart" | "dragstart" | "drag" | "add" | "remove" | "loading" | "error" | "update" | "down" | "predrag", fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "resize", fn: import('leaflet').ResizeEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "popupopen" | "popupclose", fn: import('leaflet').PopupEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tooltipopen" | "tooltipclose", fn: import('leaflet').TooltipEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "locationerror", fn: import('leaflet').ErrorEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "locationfound", fn: import('leaflet').LocationEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "click" | "dblclick" | "mousedown" | "mouseup" | "mouseover" | "mouseout" | "mousemove" | "contextmenu" | "preclick", fn: import('leaflet').LeafletMouseEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "keypress" | "keydown" | "keyup", fn: import('leaflet').LeafletKeyboardEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "zoomanim", fn: import('leaflet').ZoomAnimEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "dragend", fn: import('leaflet').DragEndEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tileunload" | "tileloadstart" | "tileload" | "tileabort", fn: import('leaflet').TileEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: "tileerror", fn: import('leaflet').TileErrorEventHandlerFn, context?: any): import('leaflet').Map;
                    (type: string, fn: import('leaflet').LeafletEventHandlerFn, context?: any): import('leaflet').Map;
                    (eventMap: import('leaflet').LeafletEventHandlerFnMap): import('leaflet').Map;
                };
                fireEvent: (type: string, data?: any, propagate?: boolean | undefined) => import('leaflet').Map;
                hasEventListeners: (type: string) => boolean;
            } | undefined>;
            attrs: import('@vue-leaflet/vue-leaflet/dist/src/utils').Data;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("ready" | "update:zoom" | "update:center" | "update:bounds")[], "ready" | "update:zoom" | "update:center" | "update:bounds", import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
            center: {
                type: import('vue').PropType<import('leaflet').PointExpression>;
            };
            bounds: {
                type: (ObjectConstructor | ArrayConstructor)[];
            };
            maxBounds: {
                type: (ObjectConstructor | ArrayConstructor)[];
            };
            zoom: {
                type: NumberConstructor;
            };
            minZoom: {
                type: NumberConstructor;
            };
            maxZoom: {
                type: NumberConstructor;
            };
            paddingBottomRight: {
                type: import('vue').PropType<import('leaflet').PointExpression>;
            };
            paddingTopLeft: {
                type: import('vue').PropType<import('leaflet').PointExpression>;
            };
            padding: {
                type: import('vue').PropType<import('leaflet').PointExpression>;
            };
            worldCopyJump: {
                type: BooleanConstructor;
                default: undefined;
            };
            crs: {
                type: (ObjectConstructor | StringConstructor)[];
            };
            maxBoundsViscosity: {
                type: NumberConstructor;
            };
            inertia: {
                type: BooleanConstructor;
                default: undefined;
            };
            inertiaDeceleration: {
                type: NumberConstructor;
            };
            inertiaMaxSpeed: {
                type: NumberConstructor;
            };
            easeLinearity: {
                type: NumberConstructor;
            };
            zoomAnimation: {
                type: BooleanConstructor;
                default: undefined;
            };
            zoomAnimationThreshold: {
                type: NumberConstructor;
            };
            fadeAnimation: {
                type: BooleanConstructor;
                default: undefined;
            };
            markerZoomAnimation: {
                type: BooleanConstructor;
                default: undefined;
            };
            noBlockingAnimations: {
                type: BooleanConstructor;
                default: undefined;
            };
            useGlobalLeaflet: {
                type: BooleanConstructor;
                default: boolean;
                custom: boolean;
            };
            options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
                readonly custom: true;
            };
        }>> & {
            onReady?: ((...args: any[]) => any) | undefined;
            "onUpdate:zoom"?: ((...args: any[]) => any) | undefined;
            "onUpdate:center"?: ((...args: any[]) => any) | undefined;
            "onUpdate:bounds"?: ((...args: any[]) => any) | undefined;
        }, {
            options: Record<string, any>;
            worldCopyJump: boolean;
            inertia: boolean;
            zoomAnimation: boolean;
            fadeAnimation: boolean;
            markerZoomAnimation: boolean;
            noBlockingAnimations: boolean;
            useGlobalLeaflet: boolean;
        }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        LMarker: import('vue').DefineComponent<{
            readonly draggable: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly icon: {
                readonly type: import('vue').PropType<import('leaflet').Icon<import('leaflet').IconOptions>>;
            };
            readonly zIndexOffset: {
                readonly type: NumberConstructor;
            };
            readonly latLng: {
                readonly type: import('vue').PropType<import('leaflet').LatLngExpression>;
                readonly custom: true;
                readonly required: true;
            };
            readonly pane: {
                readonly type: StringConstructor;
            };
            readonly attribution: {
                readonly type: StringConstructor;
            };
            readonly name: {
                readonly type: StringConstructor;
                readonly custom: true;
            };
            readonly layerType: {
                readonly type: import('vue').PropType<import('@vue-leaflet/vue-leaflet/dist/src/types/enums/LayerType').LayerType>;
                readonly custom: true;
            };
            readonly visible: {
                readonly type: BooleanConstructor;
                readonly custom: true;
                readonly default: true;
            };
            readonly options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
                readonly custom: true;
            };
        }, {
            ready: import('vue').Ref<boolean>;
            leafletObject: import('vue').Ref<import('leaflet').Marker<any> | undefined>;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
            readonly draggable: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly icon: {
                readonly type: import('vue').PropType<import('leaflet').Icon<import('leaflet').IconOptions>>;
            };
            readonly zIndexOffset: {
                readonly type: NumberConstructor;
            };
            readonly latLng: {
                readonly type: import('vue').PropType<import('leaflet').LatLngExpression>;
                readonly custom: true;
                readonly required: true;
            };
            readonly pane: {
                readonly type: StringConstructor;
            };
            readonly attribution: {
                readonly type: StringConstructor;
            };
            readonly name: {
                readonly type: StringConstructor;
                readonly custom: true;
            };
            readonly layerType: {
                readonly type: import('vue').PropType<import('@vue-leaflet/vue-leaflet/dist/src/types/enums/LayerType').LayerType>;
                readonly custom: true;
            };
            readonly visible: {
                readonly type: BooleanConstructor;
                readonly custom: true;
                readonly default: true;
            };
            readonly options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
                readonly custom: true;
            };
        }>>, {
            readonly visible: boolean;
            readonly options: Record<string, any>;
            readonly draggable: boolean;
        }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        LTileLayer: import('vue').DefineComponent<{
            readonly tms: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly subdomains: {
                readonly type: import('vue').PropType<String | String[]>;
                readonly validator: (prop: any) => boolean;
            };
            readonly detectRetina: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly url: {
                readonly type: StringConstructor;
                readonly required: true;
                readonly custom: true;
            };
            readonly opacity: {
                readonly type: NumberConstructor;
            };
            readonly zIndex: {
                readonly type: NumberConstructor;
            };
            readonly tileSize: {
                readonly type: import('vue').PropType<Number | import('leaflet').PointExpression>;
            };
            readonly noWrap: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly minZoom: {
                readonly type: NumberConstructor;
            };
            readonly maxZoom: {
                readonly type: NumberConstructor;
            };
            readonly className: {
                readonly type: StringConstructor;
            };
            readonly pane: {
                readonly type: StringConstructor;
            };
            readonly attribution: {
                readonly type: StringConstructor;
            };
            readonly name: {
                readonly type: StringConstructor;
                readonly custom: true;
            };
            readonly layerType: {
                readonly type: import('vue').PropType<import('@vue-leaflet/vue-leaflet/dist/src/types/enums/LayerType').LayerType>;
                readonly custom: true;
            };
            readonly visible: {
                readonly type: BooleanConstructor;
                readonly custom: true;
                readonly default: true;
            };
            readonly options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
                readonly custom: true;
            };
        }, {
            leafletObject: import('vue').Ref<import('leaflet').TileLayer | undefined>;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
            readonly tms: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly subdomains: {
                readonly type: import('vue').PropType<String | String[]>;
                readonly validator: (prop: any) => boolean;
            };
            readonly detectRetina: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly url: {
                readonly type: StringConstructor;
                readonly required: true;
                readonly custom: true;
            };
            readonly opacity: {
                readonly type: NumberConstructor;
            };
            readonly zIndex: {
                readonly type: NumberConstructor;
            };
            readonly tileSize: {
                readonly type: import('vue').PropType<Number | import('leaflet').PointExpression>;
            };
            readonly noWrap: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly minZoom: {
                readonly type: NumberConstructor;
            };
            readonly maxZoom: {
                readonly type: NumberConstructor;
            };
            readonly className: {
                readonly type: StringConstructor;
            };
            readonly pane: {
                readonly type: StringConstructor;
            };
            readonly attribution: {
                readonly type: StringConstructor;
            };
            readonly name: {
                readonly type: StringConstructor;
                readonly custom: true;
            };
            readonly layerType: {
                readonly type: import('vue').PropType<import('@vue-leaflet/vue-leaflet/dist/src/types/enums/LayerType').LayerType>;
                readonly custom: true;
            };
            readonly visible: {
                readonly type: BooleanConstructor;
                readonly custom: true;
                readonly default: true;
            };
            readonly options: {
                readonly type: ObjectConstructor;
                readonly default: () => {};
                readonly custom: true;
            };
        }>>, {
            readonly visible: boolean;
            readonly options: Record<string, any>;
            readonly noWrap: boolean;
            readonly tms: boolean;
            readonly detectRetina: boolean;
        }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
