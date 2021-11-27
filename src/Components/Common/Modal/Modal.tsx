import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {setOpenModal} from "../../../Main/BLL/b2-app-reducer"
import Button from "../Button/Button"
import s from "./Modal.module.scss"
import {AppStoreType} from "../../../Main/BLL/b1-store";

const Modal = () => {

    const dispatch = useDispatch()
    const isOpenModal = useSelector((s: AppStoreType) => s.app.isOpenModal)
    const HandleCloseModal = () => dispatch(setOpenModal(false))

    if (!isOpenModal) return null

    return (
        <div className={s.wrapper}>
            <div onClick={HandleCloseModal} className={s.background}/>
            <div className={s.modal}>
                <div className={s.descr}>
                    <h3 className={s.title}>Congratulations</h3>
                    <span className={s.text}>You have successfully passed the registration</span>
                </div>
                <Button onClick={HandleCloseModal}>Great</Button>
            </div>
        </div>
    )
}

export default Modal