import {Dispatch} from 'redux'
import {authAPI, PositionType, signUpAPI} from '../DAL/axios'

const initialstate = {
    positions: [] as PositionType[],
}

export const signUpReducer = (state: SignUpStateType = initialstate, action: SignUpActionType): SignUpStateType => {
    switch (action.type) {
        case "SIGN-UP_SET_POSITIONS":
            return {...state, ...action.payload }

        default:
            return state
    }
}

// actions
const setPositions = (positions: PositionType[]) => ({type: "SIGN-UP_SET_POSITIONS", payload: {positions}} as const)


// thunks
export const getPositions = () => (dispatch: Dispatch) => {
    
    signUpAPI.getPositions()
        .then(res => {
            dispatch(setPositions(res.data.positions))
        })
        .catch(e => {
            console.log(e);

            // const errorMessage = e.response?.data?.error || "Unknown error!"
        })
        .finally(() => {
        })
}

// types
export type SignUpStateType = typeof initialstate

export type SignUpActionType = ReturnType<typeof setPositions>