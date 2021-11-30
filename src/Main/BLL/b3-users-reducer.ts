import {ThunkAction} from 'redux-thunk'
import {usersAPI, UserType} from '../DAL/axios'
import {FormDataType} from "../../Components/SignUp/SignUp";
import {setOpenModal, setPreloader} from './b2-app-reducer';
import {AppStoreType, RootAppActionsType} from './b1-store';

const initialstate = {
    users: [] as UserType[],
    currentPage: 1,
    totalPages: 0,
    errorMessage: "",
}

export const usersReducer = (state: UsersStateType = initialstate, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case "USERS/SET_ERROR_MESSAGE":
        case "USERS/SET_TOTAL_PAGES":
        case "USERS/SET_CURRENT_PAGE":
            return {...state, ...action.payload}
        case "USERS/SET_USERS":
            return {...state, users: [...action.users]}
        case "USERS/ADD_MORE_USERS":
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

// actions
const setUsers = (users: UserType[]) => ({type: "USERS/SET_USERS", users} as const)
const addMoreUsers = (users: UserType[]) => ({type: "USERS/ADD_MORE_USERS", users} as const)
const setCurrentPage = (currentPage: number) => ({type: "USERS/SET_CURRENT_PAGE", payload: {currentPage}} as const)
const setTotalPages = (totalPages: number) => ({type: "USERS/SET_TOTAL_PAGES", payload: {totalPages}} as const)
const setErrorMessage = (errorMessage: string) => ({type: "USERS/SET_ERROR_MESSAGE", payload: {errorMessage}} as const)

// thunks
export const getUsers = (pageNumber: number = 1): ThunkTypes => (dispatch, getState) => {
    dispatch(setPreloader(true))
    const countUsers = getState().app.numberColumns * 3 // number of rows always "3"
    usersAPI.getUsers(pageNumber, countUsers)
        .then(res => {
            if (pageNumber === 1) dispatch(setUsers(res.data.users))
            else {
                dispatch(addMoreUsers(res.data.users))
            }
            dispatch(setTotalPages(res.data.total_pages))
        })
        .catch(e => {
            const errorMessage = e.response?.data?.message || "Unknown error!"
            console.log(errorMessage)
        })
        .finally(() => {
            dispatch(setCurrentPage(pageNumber))
            dispatch(setPreloader(false))
        })
}

export const addUser = (payload: FormDataType): ThunkTypes => (dispatch, getState) => {
    dispatch(setPreloader(true))
    const token = getState().app.token
    usersAPI.addUser(payload, token)
        .then(res => {
            dispatch(getUsers())
            dispatch(setOpenModal(true))
        })
        .catch(e => {
            const errorMessage = e.response?.data?.message || "Unknown error!"
            dispatch(setErrorMessage(errorMessage))
            setTimeout(() => dispatch(setErrorMessage("")), 3000)
        })
        .finally(() => {
            dispatch(setPreloader(false))
        })
}

// types
export type UsersStateType = typeof initialstate

export type UsersActionType = ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalPages>
    | ReturnType<typeof addMoreUsers>
    | ReturnType<typeof setErrorMessage>

export type ThunkTypes<ReturnType = void> = ThunkAction<ReturnType,
    AppStoreType,
    unknown,
    RootAppActionsType>