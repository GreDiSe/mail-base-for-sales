import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import addReducer from '../reducers/indexReducer';
import initialState from './initialState'


const store = createStore(
    addReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;