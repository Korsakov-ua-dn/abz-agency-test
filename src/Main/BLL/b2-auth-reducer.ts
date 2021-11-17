import {Dispatch} from 'redux'
import {authAPI} from '../DAL/axios'

const initialstate = {
    token: "",
    numberColumns: 0 as number
}

export const b2AuthReducer = (state: AuthStateType = initialstate, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case "AUTH/SET_NUMBER_COLUMNS":
        case "AUTH/SET_TOKEN":
            return {...state, ...action.payload }

        default:
            return state
    }
}

// actions
const setToken = (token: string) => ({type: "AUTH/SET_TOKEN", payload: {token}} as const)
export const setNumberColumns = (numberColumns: number) => ({type: "AUTH/SET_NUMBER_COLUMNS", payload: {numberColumns}} as const)


// thunks
export const initializeApp = () => (dispatch: Dispatch) => {
    
    authAPI.authMe()
        .then(res => {
            dispatch(setToken(res.data.token))
        })
        .catch(e => {
            console.log(e);

            // const errorMessage = e.response?.data?.error || "Unknown error!"
        })
        .finally(() => {
        })
}

// types
export type AuthStateType = typeof initialstate

export type AuthActionType = ReturnType<typeof setToken>
    | ReturnType<typeof setNumberColumns>