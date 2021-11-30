import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {AppStoreType} from "../../Main/BLL/b1-store"
import {getPositions} from "../../Main/BLL/b4-signUp-reducer"
import {SignUp} from "./SignUp"

export const SignUpContainer = () => {

    const dispatch = useDispatch()
    const positions = useSelector((s: AppStoreType) => s.signUp.positions)
    const errorMessage = useSelector((s: AppStoreType) => s.users.errorMessage)

    useEffect(() => {
        dispatch(getPositions())
    }, [dispatch])

    return (
        <SignUp positions={positions} errorMessage={errorMessage}/>
    )
}