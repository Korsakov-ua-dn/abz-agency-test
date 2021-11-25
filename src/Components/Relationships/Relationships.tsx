import {Button} from "react-scroll/modules"
import btnStyle from "../../Components/Common/Button/Button.module.scss"
import {Title} from "../Common/Title/Title"
import s from "./Relationships.module.scss"

type PropsType = {
    text: string
}

export const Relationships : React.FC<PropsType> = ({text}) => {
    return (
        <section className={s.section} id="relationships">
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.description}>
                        <Title>Test assignment for front-end developers</Title>
                        <div>
                            <p>{text}</p>
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