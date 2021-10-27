import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import titleReducer from '../reducers/titleReducer';
import heroReducer from '../reducers/heroReducer';
import messageReducer from '../reducers/messageReducer';

const rootReducer = combineReducers({
    titleReducer,
    heroReducer,
    messageReducer
});

const middlewares = [thunk];
const configureStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export type storeTypes = ReturnType<typeof rootReducer>;

export default configureStore;