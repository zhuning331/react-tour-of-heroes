import { ISetTitleAction, SET_TITLE } from '../actions/titleAction';

const initialState = {
    title: 'Tour of Heroes'
}

const titleReducer = (state = initialState, action: ISetTitleAction) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.payload.newTitle
            }
        default:
            return state;
    }
}

export default titleReducer;