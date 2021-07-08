const initialState = {
    accessToken: null,
    refreshToken: null,
    expirationTime: null
};

function booksReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ACCESS_TOKEN':
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                expirationTime: action.payload.expiredTime,
            };
        default:
            return state;
    }
}

export default booksReducer;