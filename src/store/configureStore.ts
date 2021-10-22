import { createStore, combineReducers } from 'redux';
import titleReducer from '../reducers/titleReducer';
import heroReducer from '../reducers/heroReducer';
import messageReducer from '../reducers/messageReducer';

const rootReducer = combineReducers({
    titleReducer,
    heroReducer,
    messageReducer
});

const configureStore = createStore(rootReducer);

export type storeTypes = ReturnType<typeof rootReducer>;

export default configureStore;