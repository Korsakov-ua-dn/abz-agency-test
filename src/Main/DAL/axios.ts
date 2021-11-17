import axios from 'axios'

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
    }
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
   id: number
   name: string
}

type RequestPositionsType = {
    success: boolean
    positions : PositionType[]
}