import users from './userReduces';
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    users,
    routing: routerReducer
})