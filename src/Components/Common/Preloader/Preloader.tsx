import preloaderImg from "../../../Assets/Img/Preloader.svg"
import s from "./Preloader.module.scss"
import {useSelector} from "react-redux"
import {AppStoreType} from "../../../Main/BLL/b1-store"

const Preloader = () => {

    const preloader = useSelector((s: AppStoreType) => s.app.preloader)
    if (!preloader) return null

    return (
        <div className={s.wrapper}>
            <div className={s.background}/>
            <div className={s.spinnerWrapper}>
                <img className={s.spinner} srcSet={preloaderImg} alt="spinner"/>
            </div>
        </div>
    )
}

export default Preloader