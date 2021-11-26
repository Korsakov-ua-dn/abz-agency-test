import logo from "../../Assets/Img/Logo.svg"
import s from "./Header.module.scss"
import { Link } from "react-scroll"

export const Header = ()  => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <img src={logo} alt="logo"/>
                <nav className={s.nav}>
                    <div className={`${s.item}`}>
                        <Link 
                            to="" 
                            activeClass={s.active}
                            spy = { true } 
                            smooth = { true } 
                            offset = { 0 } 
                            duration = { 500 }
                        >About me</Link>
                    </div>
                    <div className={s.item}>
                        <Link 
                            to="relationships" 
                            activeClass={s.active}
                            spy = { true } 
                            smooth = { true } 
                            offset = { 0 }
                            duration = { 500 }
                    >Relationships</Link>
                    </div>
                    <div className={s.item}>
                        <Link 
                            to="requirements" 
                            activeClass={s.active}
                            spy = { true } 
                            smooth = { true } 
                            offset = { 0 }
                            duration = { 500 }
                    >Requirements</Link>
                    </div>
                    <div className={s.item}>
                        <Link 
                            to="users" 
                            activeClass={s.active}
                            spy = { true } 
                            smooth = { true } 
                            offset = { 60 }
                            duration = { 500 }
                    >Users</Link>
                    </div>
                    <div className={s.item}>
                        <Link 
                            to="signUp" 
                            activeClass={s.active}
                            spy = { true } 
                            smooth = { true } 
                            offset = { 65 }
                            duration = { 500 }
                    >Sign Up</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}