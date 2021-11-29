import {Dispatch} from 'redux'
import {authAPI} from '../DAL/axios'

const initialstate = {
    token: "",
    numberColumns: 0,
    isOpenModal: false,
    isOpenMenu: false,
    preloader: false,
}

export const appReducer = (state: AuthStateType = initialstate, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case "AUTH/SET_PRELOADER":
        case "AUTH/SET_OPEN_MENU":
        case "AUTH/SET_OPEN_MODAL":
        case "AUTH/SET_NUMBER_COLUMNS":
        case "AUTH/SET_TOKEN":
            return {...state, ...action.payload}

        default:
            return state
    }
}

// actions
const setToken = (token: string) => ({type: "AUTH/SET_TOKEN", payload: {token}} as const)
export const setNumberColumns = (numberColumns: number) => ({
    type: "AUTH/SET_NUMBER_COLUMNS",
    payload: {numberColumns}
} as const)
export const setOpenModal = (isOpenModal: boolean) => ({type: "AUTH/SET_OPEN_MODAL", payload: {isOpenModal}} as const)
export const setOpenMenu = (isOpenMenu: boolean) => ({type: "AUTH/SET_OPEN_MENU", payload: {isOpenMenu}} as const)
export const setPreloader = (preloader: boolean) => ({type: "AUTH/SET_PRELOADER", payload: {preloader}} as const)

// thunks
export const initializeApp = () => (dispatch: Dispatch) => {
    dispatch(setPreloader(true))
    authAPI.authMe()
        .then(res => {
            dispatch(setToken(res.data.token))
        })
        .catch(e => {
            const errorMessage = e.response?.data?.message || "Unknown error!"
            console.log(errorMessage);
        })
        .finally(() => {
            dispatch(setPreloader(false))
        })
}

// types
export type AuthStateType = typeof initialstate

export type AuthActionType = ReturnType<typeof setToken>
    | ReturnType<typeof setNumberColumns>
    | ReturnType<typeof setOpenModal>
    | ReturnType<typeof setOpenMenu>
    | ReturnType<typeof setPreloader>