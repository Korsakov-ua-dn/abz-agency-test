import {UserType} from "../../Main/DAL/axios"
import s from "./Users.module.scss"
import {Title} from "../Common/Title/Title"
import {User} from "./User"
import Button from "../Common/Button/Button";

type PropsType = {
    showMoreHandler: () => void
    columns: number | null
    users: UserType[]
    lastPage: boolean
}

export const Users: React.FC<PropsType> = ({
                                               showMoreHandler,
                                               columns,
                                               users,
                                               lastPage,
                                           }) => {

    const grid = {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(3, 313px)`,
        gridGap: "29px",
    }

    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <Title>Our cheerful users</Title>
                    <h2>The best specialists are shown below</h2>
                    <div style={grid}>
                        {users.map(u => <User
                            key={u.id}
                            photo={u.photo}
                            name={u.name}
                            position={u.position}
                            email={u.email}
                            phone={u.phone}/>)}
                    </div>
                    {!lastPage && <Button onClick={showMoreHandler} >Show more</Button>}
                </div>
            </div>
        </section>
    )
}