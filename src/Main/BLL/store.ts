import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './auth-reducer';
import { usersReducer } from './users-reducer';

const reducers = combineReducers({
    auth: authReducer,
    users: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev