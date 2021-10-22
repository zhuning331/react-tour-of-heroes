export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export interface ISetMessageAction {
    type: string;
    payload?: {
        newMessage: string;
    }
}

export const addMessage = (newMessage: string): ISetMessageAction => ({
    type: ADD_MESSAGE,
    payload: {
        newMessage
    }
});

export const clearMessage = (): ISetMessageAction => ({
    type: CLEAR_MESSAGE
});