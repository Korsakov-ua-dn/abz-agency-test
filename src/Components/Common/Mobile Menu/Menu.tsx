import React from "react"
import s from "./Menu.module.scss"
import logo from "../../../Assets/Img/Logo.svg"
import {Link} from "react-scroll"
import {useDispatch, useSelector} from "react-redux"
import {setOpenMenu} from "../../../Main/BLL/b2-app-reducer"
import {AppStoreType} from "../../../Main/BLL/b1-store";

const Menu = () => {
    const dispatch = useDispatch()
    const isOpenMenu = useSelector((s: AppStoreType) => s.app.isOpenMenu)

    const handleCloseMenu = () => {
        dispatch(setOpenMenu(false))
        document.body.style.overflow = "visible"; // for correct work mobileMenu
    }

    if (!isOpenMenu) return null

    return (
        <div className={`${s.wrapper}`}>
            <div onClick={handleCloseMenu} className={s.background}/>

            <div className={`${s.menu}`}>

                <div className={s.logoWrapper}>
                    <img src={logo} alt="logo"/>
                </div>

                <div className={s.linkWrapper}>
                    <nav className={s.nav}>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
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
                                onClick={handleCloseMenu}
                            >Relationships</Link></div>
                        <div className={s.item}>
                            <Link
                                to="users"
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={60}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Users</Link></div>
                        <div className={s.item}>
                            <Link
                                to="signUp"
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={65}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Sign Up</Link>
                        </div>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={65}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Terms and Conditions</Link>
                        </div>
                    </nav>
                    <nav className={s.nav}>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >How it works</Link>
                        </div>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Partnership</Link></div>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Help</Link></div>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Level testimonial</Link>
                        </div>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Contact us</Link>
                        </div>
                    </nav>
                    <nav className={s.nav}>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Articles</Link>
                        </div>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Our news</Link></div>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Testimonials</Link></div>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Licenses</Link>
                        </div>
                        <div className={s.item}>
                            <Link
                                to=""
                                activeClass={s.active}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                onClick={handleCloseMenu}
                            >Privacy Policy</Link>
                        </div>
                    </nav>
                </div>

            </div>

        </div>
    )
}

export default Menu