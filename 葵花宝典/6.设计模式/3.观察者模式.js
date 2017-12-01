const observer = {
    _eventMap: {},

    on(event, handler) {
        const handlerSet = this._eventMap[event] = this._eventMap[event] || new Set()
        handlerSet.add(handler)
    },

    off(event, handler) {
        const handlerSet = this._eventMap[event]
        if (handlerSet && handlerSet.has(handler)) {
            handlerSet.delete(handler)
        }
    },

    dispatch(event) {
        const handlerSet = this._eventMap[event]
        if (handlerSet) {
            handlerSet.forEach(handler => handler())
        }
    }
}

module.exports = observer