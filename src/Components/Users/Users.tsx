import { UserType } from "../../Main/DAL/axios"
import s from "./Users.module.scss"

type PropsType = {
    columns: number
    users: UserType[]
}

export const Users:React.FC<PropsType> = ({
    columns,
    users,
}) => {

    const grid = {
        display: "grid", 
        gridTemplateColumns: `repeat(${columns}, 1fr)`, 
        gridTemplateRows: `repeat(3, 313px)`, 
        gridGap: "29px",
    }

    return (
        <section style={grid} className={s.section}>
            {users.map(u => <User 
                                key={u.id} 
                                photo={u.photo} 
                                name={u.name} 
                                position={u.position} 
                                email={u.email} 
                                phone={u.phone}  />)}
        </section>
    )
} 

type UserPropsType = {
    photo: string
    name: string
    position: string
    email: string
    phone: string
}

const User:React.FC<UserPropsType> = ({
    photo,
    name,
    position,
    email,
    phone,
}) => {
    return (
        <div className={s.userWrapper}>
            <div className={s.photoWrapper}>
                <img src={photo} alt="photo" />
            </div>
            <h2 className={s.title}>{name}</h2>
            <div className={s.descrWrapper}>
                <span className={s.position}>{position}</span>
                <span className={s.email}>{email}</span>
                <span className={s.phone}>{phone}</span>
            </div>
        </div>
    )
}