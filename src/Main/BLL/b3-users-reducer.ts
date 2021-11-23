import {ThunkAction} from 'redux-thunk'
import {usersAPI, UserType} from '../DAL/axios'
import {FormDataType} from "../../Components/SignUp/SignUp";

const initialstate = {
    users: [] as UserType[],
    currentPage: 1,
    totalPages: 0,
}

export const usersReducer = (state: UsersStateType = initialstate, action: UsersActionType): UsersStateType => {
    switch (action.type) {
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

// thunks
export const getUsers = (pageNumber: number = 1): ThunkTypes => (dispatch, getState: () => any) => {
    const countUsers = getState().auth.numberColumns * 3 // number of rows always "3"
    usersAPI.getUsers(pageNumber, countUsers)
        .then(res => {
            if (pageNumber === 1) dispatch(setUsers(res.data.users)) 
            else {
                dispatch(addMoreUsers(res.data.users))
            }
            dispatch(setTotalPages(res.data.total_pages))
        })
        .catch(e => {
            console.log(e)
            // const errorMessage = e.response?.data?.error || "Unknown error!"
        })
        .finally(() => {
            dispatch(setCurrentPage(pageNumber))
        })
}

// export const showMoreUsers = (pageNumber: number): ThunkTypes => (dispatch, getState: () => any) => {
//     const countUsers = getState().auth.numberColumns * 3 // number of rows always "3"
//     usersAPI.getUsers(pageNumber, countUsers)
//         .then(res => {
//             dispatch(addMoreUsers(res.data.users))
//             dispatch(setTotalPages(res.data.total_pages))
//         })
//         .catch(e => {
//             console.log(e)
//             // const errorMessage = e.response?.data?.error || "Unknown error!"
//         })
//         .finally(() => {
//             dispatch(setCurrentPage(pageNumber))
//         })
// }

export const addUser = (payload: FormDataType): ThunkTypes => (dispatch, getState: () => any) => {
    const token = getState().auth.token
    usersAPI.addUser(payload, token)
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
    | ReturnType<typeof addMoreUsers>

export type ThunkTypes<ReturnType = void> = ThunkAction<ReturnType,
    UsersStateType,
    unknown,
    UsersActionType>