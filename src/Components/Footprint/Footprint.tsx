import footprint328 from "../../Assets/Img/Footprint-328x124.svg"
import footprint467 from "../../Assets/Img/Footprint-467x177.svg"
import footprint972 from "../../Assets/Img/Footprint-972x177.svg"
import s from "./Footprint.module.scss"

const Footprint = () => {
    return (
        <section>
            <picture className={s.picture}>
                  <source media="(min-width: 1025px)" srcSet={footprint972}/>
                  <source media="(min-width: 768px)" srcSet={footprint467}/>
                  <img src={footprint328} alt="footprint"/>
            </picture>
        </section>
    )
}

export default Footprint