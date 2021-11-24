import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {AuthActionType, appReducer} from './b2-app-reducer'
import {UsersActionType, usersReducer} from './b3-users-reducer'
import { SignUpActionType, signUpReducer } from './b4-signUp-reducer';

const reducers = combineReducers({
    auth: appReducer,
    users: usersReducer,
    signUp: signUpReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type RootAppActionsType = AuthActionType | UsersActionType | SignUpActionType
export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev