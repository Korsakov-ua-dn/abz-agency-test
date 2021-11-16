import { Dispatch } from 'redux'
import { authAPI } from '../DAL/axios'

const initialstate = {
    token: "",
}

export const authReducer = (state: AuthStateType = initialstate, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case "AUTH/SET_TOKEN": return {...state, token: action.token}

        default: return state
    }
}

// actions
const setToken = (token: string) => ({type: "AUTH/SET_TOKEN", token} as const)


// thunks
export const initializeApp = () => (dispatch: Dispatch) => {
    authAPI.authMe()
    .then(res => {
        dispatch(setToken(res.data.token))
    })
    .catch(e => {
        console.log(e);
        
        const errorMessage = e.response?.data?.error || "Unknown error!"
    })
    .finally( () => {} )
}

// types
export type AuthStateType = typeof initialstate

export type AuthActionType = ReturnType<typeof setToken>