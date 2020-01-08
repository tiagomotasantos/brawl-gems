const brawlReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PLAYER':
            return {
                ...state,
                player: action.player
            };
        default:
            return state;
    }
}

export { brawlReducer as default }