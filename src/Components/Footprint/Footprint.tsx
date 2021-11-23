import fotoprint328 from "../../Assets/Img/Footprint-328x124.svg"
import fotoprint467 from "../../Assets/Img/Footprint-467x177.svg"
import fotoprint972 from "../../Assets/Img/Footprint-972x177.svg"
import s from "./Footprint.module.scss"

const Footprint = () => {
    return (
        <section>
            <picture className={s.picture}>
                  <source media="(min-width: 1025px)" srcSet={fotoprint972}/>
                  <source media="(min-width: 768px)" srcSet={fotoprint467}/>
                  <img src={fotoprint328} alt="footprint"/>
            </picture>
        </section>
    )
}

export default Footprint