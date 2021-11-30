import logo from "../../Assets/Img/Logo.svg"
import menuIcon from "../../Assets/Img/Menu.svg"
import s from "./Header.module.scss"
import {Link} from "react-scroll"
import {useDispatch} from "react-redux"
import {setOpenMenu} from "../../Main/BLL/b2-app-reducer"

export const Header = () => {
    const dispatch = useDispatch()
    const openMenuHandler = () => {
        dispatch(setOpenMenu(true))
        document.body.style.overflow = "hidden"; // for correct work mobileMenu
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <img src={logo} alt="logo"/>
                    <img onClick={openMenuHandler} className={s.menuIcon} src={menuIcon} alt="menuIcon"/>
                    <nav className={s.nav}>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >About me</Link>
                        </div>
                        <div className={s.item}>
                            <Link
                                to="relationships"
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Relationships</Link>
                        </div>
                        <div className={s.item}>
                            <Link
                                to="requirements"
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0.5}
                                duration={500}
                            >Requirements</Link>
                        </div>
                        <div className={s.item}>
                            <Link
                                to="users"
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={60}
                                duration={500}
                            >Users</Link>
                        </div>
                        <div className={s.item}>
                            <Link
                                to="signUp"
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={65}
                                duration={500}
                            >Sign Up</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}