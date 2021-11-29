import React, {memo} from "react"
import s from "./Title.module.scss"

type PropsType = {
    children: React.ReactChild
}

const Title: React.FC<PropsType> = ({children}) => {
    return (
        <h1 className={s.title}>
            {children}
        </h1>
    )
}

export default memo(Title)