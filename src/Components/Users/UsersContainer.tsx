import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {AppStoreType} from "../../Main/BLL/b1-store"
import {getUsers, showMoreUsers} from "../../Main/BLL/b3-users-reducer"
import {Users} from "./Users"

export const UsersContainer = () => {

    const dispatch = useDispatch()
    const users = useSelector((s: AppStoreType) => s.users.users)
    const numberColumns = useSelector((s: AppStoreType) => s.auth.numberColumns)
    const totalPages = useSelector((s: AppStoreType) => s.users.totalPages)
    const currentPage = useSelector((s: AppStoreType) => s.users.currentPage)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch, numberColumns])

    const showMoreHandler = () => {
        dispatch(showMoreUsers(currentPage + 1))
    }

    return (
        <Users showMoreHandler={showMoreHandler}
               columns={numberColumns}
               users={users}
               lastPage={totalPages === currentPage}/>
    )
}