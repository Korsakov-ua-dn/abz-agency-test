import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppStoreType } from "../../Main/BLL/store"
import { getUsers } from "../../Main/BLL/users-reducer"
import { Users } from "./Users"


export const UsersContainer = () => {

    const dispatch = useDispatch()
    const users = useSelector((s: AppStoreType) => s.users.users )

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <Users columns={3} users={users}/>
    )
}