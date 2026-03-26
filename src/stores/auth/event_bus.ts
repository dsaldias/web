/* eslint-disable @typescript-eslint/no-explicit-any */

class EventBus extends EventTarget {
  emit(eventName: any, data: any) {
    this.dispatchEvent(new CustomEvent(eventName, { detail: data }))
  }

  on(eventName: any, callback: any) {
    this.addEventListener(eventName, callback)
  }

  off(eventName: any, callback: any) {
    this.removeEventListener(eventName, callback)
  }
}

export const eventBus = new EventBus()
