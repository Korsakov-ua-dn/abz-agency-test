import { useDispatch } from "react-redux"
import { setOpenModal } from "../../../Main/BLL/b2-auth-reducer"
import Button from "../Button/Button"
import s from "./Modal.module.scss"

type PropsType = {
    isOpenModal: boolean
}
const Modal:React.FC<PropsType> = ({isOpenModal}) => {

    const dispatch = useDispatch()
    const btnHandler = () => dispatch(setOpenModal(false))

    if (!isOpenModal) return null

    return (
        <div className={s.wrapper}>
            <div className={s.modal}>
                <div className={s.descr}>
                    <h3 className={s.title}>Congratulations</h3>
                    <span className={s.text}>You have successfully passed the registration</span>
                </div>
                <Button onClick={btnHandler}>Great</Button>
            </div>
        </div>
    )
}

export default Modal