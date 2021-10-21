import { createStore, combineReducers } from 'redux';
import titleReducer from '../reducers/titleReducer';
import heroReducer from '../reducers/heroReducer';

const rootReducer = combineReducers({
    titleReducer,
    heroReducer
});

const configureStore = createStore(rootReducer);

export type storeTypes = ReturnType<typeof rootReducer>;

export default configureStore;