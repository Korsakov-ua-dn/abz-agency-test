import s from "./Requirements.module.scss"
import btnStyle from "../../Components/Common/Button/Button.module.scss"
import img from "../../Assets/Img/man_at_table.svg"

import Title from "../Common/Title/Title"

import {Link} from "react-scroll"


export const Requirements = () => {
    return (
        <section className={s.section} id="requirements">
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div>
                        <img src={img} alt="img"/>
                    </div>
                    <div className={s.description}>
                        <Title>Let's get acquainted</Title>
                        <h2>I'm a good front-end developer</h2>
                        <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
                            with a
                            vast understanding of User design thinking as they'll be building web interfaces with
                            accessibility
                            in mind. They should also be excited to learn, as the world of Front-End Development keeps
                            evolving.</p>
                        <Link
                            className={`${btnStyle.primary} ${btnStyle.btn}`}
                            type="submit"
                            to="signUp"
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration={500}>Sign up</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}