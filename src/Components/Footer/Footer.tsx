import s from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <span>
                    © abz.agency specially for the test task
                </span>
            </div>
        </footer>
    )
}

export default Footer