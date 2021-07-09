const initialState = {
    listLessionBySubjectId: null
};

function subjectReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_LIST_LESSION_FOUND':
            return {
                ...state,
                listLessionBySubjectId: action.payload
            };
        default:
            return state;
    }
}

export default subjectReducer;