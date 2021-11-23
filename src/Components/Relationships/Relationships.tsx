import {Button} from "react-scroll/modules"
import btnStyle from "../../Components/Common/Button/Button.module.scss"
import {Title} from "../Common/Title/Title"
import s from "./Relationships.module.scss"

export const Relationships = () => {
    return (
        <section className={s.section} id="relationships">
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.description}>
                        <Title>Test assignment for front-end developers</Title>
                        <div>
                            <p>Front-end developers make sure the user sees and interacts with all the necessary elements to
                                ensure conversion. Therefore, responsive design, programming languages and specific frameworks
                                are the must-have skillsets to look for when assessing your front-end developers.</p>
                        </div>
                        <Button
                            className={`${btnStyle.primary} ${btnStyle.btn}`}
                            type="submit"
                            value="Sign up"
                            to="signUp"
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration={500}/>
                    </div>
                </div>
            </div>
        </section>
    )
}