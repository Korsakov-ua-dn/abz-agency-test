import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {authReducer} from './b2-auth-reducer'
import {usersReducer} from './b3-users-reducer'
import { signUpReducer } from './b4-signUp-reducer';

const reducers = combineReducers({
    auth: authReducer,
    users: usersReducer,
    signUp: signUpReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev