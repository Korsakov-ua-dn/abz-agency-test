import {Dispatch} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {usersAPI, UserType} from '../DAL/axios'
import { AppStoreType } from './b1-store'

const initialstate = {
    users: [] as UserType[],
    currentPage: 1,
    totalPages: 0,
}

export const b3UsersReducer = (state: UsersStateType = initialstate, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case "USERS/SET_TOTAL_PAGES":
            return {...state, ...action.payload}
        case "USERS/SET_USERS":
            return {...state, users: [...state.users, ...action.users] }
        case "USERS/INC_CURRENT_PAGE":
            return {...state, currentPage: state.currentPage + 1}

        default:
            return state
    }
}

// actions
const setUsers = (users: UserType[]) => ({type: "USERS/SET_USERS", users} as const)
const setCurrentPage = () => ({type: "USERS/INC_CURRENT_PAGE"} as const)
const setTotalPages = (totalPages: number) => ({type: "USERS/SET_TOTAL_PAGES", payload: {totalPages}} as const)

// thunks
export const getUsers = (): ThunkTypes => (dispatch: Dispatch, getState: () => any) => {
    const countUsers = getState().auth.numberColumns * 3 // number of rows always "3"
    const currentPage = getState().users.currentPage

    usersAPI.getUsers(currentPage, countUsers)
        .then(res => {
            dispatch(setUsers(res.data.users))
            dispatch(setTotalPages(res.data.total_pages))
        })
        .catch(e => {
            console.log(e)

            // const errorMessage = e.response?.data?.error || "Unknown error!"
        })
        .finally(() => {
        })
}
export const showMore = (): ThunkTypes  => dispatch => {
    dispatch(setCurrentPage())
    dispatch(getUsers())
}
export const addUser = (name: string, email: string, phone: string, position_id: number, photo: File): ThunkTypes => (dispatch, getState: () => any) => {
    const token = getState().auth.token

    usersAPI.addUser(name, email, phone, position_id, photo, token)
        .then(res => {
            dispatch(getUsers())
        })
        .catch(e => {
            console.log(e)

            // const errorMessage = e.response?.data?.error || "Unknown error!"
        })
        .finally(() => {
        })
}

// types
export type UsersStateType = typeof initialstate

export type UsersActionType = ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalPages>

export type ThunkTypes<ReturnType = void> = ThunkAction<ReturnType,
UsersStateType,
    unknown,
    UsersActionType>