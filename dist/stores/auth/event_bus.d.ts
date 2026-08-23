declare class EventBus extends EventTarget {
    emit(eventName: any, data: any): void;
    on(eventName: any, callback: any): void;
    off(eventName: any, callback: any): void;
}
export declare const eventBus: EventBus;
export {};
