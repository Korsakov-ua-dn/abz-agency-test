import axios from 'axios'
import {FormDataType} from "../../Components/SignUp/SignUp";

const instance = axios.create({
    baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
})

export const authAPI = {
    authMe() {
        return instance.get<AuthMe>("/token")
    },
}

export const usersAPI = {
    getUsers(currentPage: number, count: number) {
        return instance.get<GetUsersType>(`/users?page=${currentPage}&count=${count}`)
    },
    addUser(payload: FormDataType, token: string) {
        const formData = new FormData()
        formData.append('name', payload.name)
        formData.append('email', payload.email)
        formData.append('phone', payload.phone)
        formData.append('position_id', payload.position)
        formData.append('photo', payload.photo)
        
        return instance.post<AddUserType>(`/users`, formData, {
            headers: { 
                'Token': token,
                'Content-Type': 'multipart/form-data',
            }
        })
    },
}

export const signUpAPI = {
    getPositions() {
        return instance.get<RequestPositionsType>("/positions")
    },
}

//types
type AuthMe = {
    success: boolean,
    token: string
}

export type UserType = {
    id: number,
    name: string,
    email: string,
    phone: string,
    position: string,
    position_id: number,
    registration_timestamp: number,
    photo: string
}

type GetUsersType = {
    success: boolean
    page: number
    total_pages: number
    total_users: number
    count: number
    links: {
        next_url: string,
        prev_ur: string | null
    }
    users: UserType[]
}

export type PositionType = {
   id: string
   name: string
}

type RequestPositionsType = {
    success: boolean
    positions : PositionType[]
}

type AddUserType = {
    success : boolean
    user_id : number,
    message : string
}
// 409
// message: "User with this phone or email already exist"
// success: false

// 201
// message: "New user successfully registered"
// success: true
// user_id: 97