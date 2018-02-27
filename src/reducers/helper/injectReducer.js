export default (initialState, handlers) => (state = initialState, action = {}) => {
    return action.hasOwnProperty('type') ? handlers[action.type]
        ? handlers[action.type](state, action)
        : state
        : state;
}