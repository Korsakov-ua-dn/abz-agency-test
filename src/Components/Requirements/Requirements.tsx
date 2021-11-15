import s from "./Requirements.module.scss"
import img from "../../Assets/Img/man_at_table.svg"
import { Title } from "../../Common/Title/Title"
import Button from "../../Common/Button/Button"

export const Requirements = () => {
    return (
        <section className={s.section}>
            <div>
                <img src={img} alt="img" />
            </div>
            <div className={s.description}>
                <Title>Let's get acquainted</Title>
                <h2>I'm a good front-end developer</h2>
                <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <Button primary>Sign up</Button>
            </div>
        </section>
    )
}