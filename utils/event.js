import Vue from 'vue'

/**
 * A simple event bus.
 *
 * @type {Object}
 */
class EventBus {
  constructor() {
    this.bus = new Vue()
  }

  emit(name, ...args) {
    this.bus.$emit(name, ...args)
    return this
  }

  off(name) {
    this.bus.$off(name)
    return this
  }

  on() {
    if (arguments.length === 2) {
      this.bus.$on(arguments[0], arguments[1])
    } else {
      Object.keys(arguments[0]).forEach((key) =>
        this.bus.$once(key, arguments[0][key])
      )
    }

    return this
  }

  once() {
    if (arguments.length === 2) {
      this.bus.$once(arguments[0], arguments[1])
    } else {
      Object.keys(arguments[0]).forEach((key) =>
        this.bus.$once(key, arguments[0][key])
      )
    }

    return this
  }
}

const event = new EventBus()

export { event }
