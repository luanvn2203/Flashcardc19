export const saveAccessToken = (payload) => {
    return {
        type: "SAVE_ACCESS_TOKEN",
        payload: payload,
    };
};

