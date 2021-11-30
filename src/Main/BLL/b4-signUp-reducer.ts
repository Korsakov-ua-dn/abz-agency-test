import {Dispatch} from 'redux'
import {PositionType, signUpAPI} from '../DAL/axios'
import {setPreloader} from "./b2-app-reducer"

const initialstate = {
    positions: [] as PositionType[],
}

export const signUpReducer = (state: SignUpStateType = initialstate, action: SignUpActionType): SignUpStateType => {
    switch (action.type) {
        case "SIGN-UP/SET_POSITIONS":
            return {...state, ...action.payload}

        default:
            return state
    }
}

// actions
const setPositions = (positions: PositionType[]) => ({type: "SIGN-UP/SET_POSITIONS", payload: {positions}} as const)

// thunks
export const getPositions = () => (dispatch: Dispatch) => {
    dispatch(setPreloader(true))
    signUpAPI.getPositions()
        .then(res => {
            dispatch(setPositions(res.data.positions))
        })
        .catch(e => {
            const errorMessage = e.response?.data?.message || "Unknown error!"
            console.log(errorMessage)
        })
        .finally(() => {
            dispatch(setPreloader(false))
        })
}

// types
export type SignUpStateType = typeof initialstate

export type SignUpActionType = ReturnType<typeof setPositions>