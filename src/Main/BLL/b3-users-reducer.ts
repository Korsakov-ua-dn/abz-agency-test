import {Dispatch} from 'redux'
import {usersAPI, UserType} from '../DAL/axios'

const initialstate = {
    users: [] as UserType[],
}

export const b3UsersReducer = (state: UsersStateType = initialstate, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case "USERS/SET_USERS":
            return {...state, users: action.users}

        default:
            return state
    }
}

// actions
const setUsers = (users: UserType[]) => ({type: "USERS/SET_USERS", users} as const)

// thunks
export const getUsers = () => (dispatch: Dispatch) => {
    usersAPI.getUsers()
        .then(res => {
            dispatch(setUsers(res.data.users))
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