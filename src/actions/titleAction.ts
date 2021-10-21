export const SET_TITLE = 'SET_TITLE';

export interface ISetTitleAction {
    type: typeof SET_TITLE;
    payload: {
        newTitle: string;
    }
}

export const setTitle = (newTitle: string): ISetTitleAction => ({
    type: SET_TITLE,
    payload: {
        newTitle
    }
});