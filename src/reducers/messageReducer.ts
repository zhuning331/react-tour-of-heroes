import { ISetMessageAction, ADD_MESSAGE, CLEAR_MESSAGE } from '../actions/messageAction';

export interface IMessageState {
    messages: string[];
}

const initialState: IMessageState = {
    messages: []
}

const messageReducer = (state = initialState, action: ISetMessageAction): IMessageState => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                messages: [...state.messages, action.payload!.newMessage]
            }
        case CLEAR_MESSAGE:
            return {
                messages: [] 
            }
        default:
            return state;
    }
}

export default messageReducer;