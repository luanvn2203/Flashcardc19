const initialState = {
    accessToken: null,
    refreshToken: null,
    expirationTime: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ACCESS_TOKEN':
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                expirationTime: action.payload.expirationTime,
            };
        default:
            return state;
    }
}

export default authReducer;