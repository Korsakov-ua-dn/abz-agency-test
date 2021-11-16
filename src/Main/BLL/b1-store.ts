import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {b2AuthReducer} from './b2-auth-reducer'
import {b3UsersReducer} from './b3-users-reducer'

const reducers = combineReducers({
    auth: b2AuthReducer,
    users: b3UsersReducer,
});

const b1Store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default b1Store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = b1Store // for dev