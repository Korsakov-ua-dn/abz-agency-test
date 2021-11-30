import s from "./Users.module.scss"
import photoCover from "../../Assets/Img/Photo-cover.svg"

type UserPropsType = {
    photo: string
    name: string
    position: string
    email: string
    phone: string
}
export const User: React.FC<UserPropsType> = ({
                                                  photo,
                                                  name,
                                                  position,
                                                  email,
                                                  phone,
                                              }) => {

    return (
        <div className={s.userWrapper}>
            <div className={s.photoWrapper} id='img-parent'>
                <img src={photo ? photo : photoCover} onError={(e: any) => {
                    e.target.onerror = null;
                    e.target.src = photoCover
                }} alt="img"/>
            </div>
            <h2 className={s.title}>{name}</h2>
            <div className={s.descrWrapper}>
                <span className={s.position}>{position}</span>
                <span className={s.email}>{email}</span>
                <span className={s.tooltip}>{email}</span>
                <span className={s.phone}>{phone}</span>
            </div>
        </div>
    )
}