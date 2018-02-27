import {
    CREATE_USER,
    EDIT_USER,
    DELETE_USER
} from "../actions/actionType";
import initialState from '../store/initialState'
import injectReducer from './helper/injectReducer';

export default injectReducer(initialState.users, {
    [`${CREATE_USER}`]: (state, action) => [...state, action.user],

    [`${DELETE_USER}`]: (state, action) => state.filter((cur, id) => id !== Number(action.id)),

    [`${EDIT_USER}`]: (state, action) => {
        const newState = state.concat();
        newState.splice(action.index, 1, action.user);
        return newState;
    }
})