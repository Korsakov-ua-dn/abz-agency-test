import s from "./UploadFile.module.scss"
import React from "react"

type PropsType = {
    error: string
    id: string
    register?: any
}

export const UploadFile:React.FC<PropsType> = ({
                                                   error, id, register, children
                                               }) => {
    return (
        <div className={s.wrapper}>
            <input className={s.input} type="file" id={id} {...register}/>
            <label className={s.label} htmlFor={id}>{children}</label>
            <textarea className={s.textarea} placeholder={"Upload your photo"}> </textarea>
            <span className={s.error}>{error}</span>
        </div>
    )
}