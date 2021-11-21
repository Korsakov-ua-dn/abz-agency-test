import s from "./UploadFile.module.scss"
import React, {useState} from "react"

type PropsType = {
    error: string
    id: string
    register?: any
}

export const UploadFile: React.FC<PropsType> = ({
                                                    error,
                                                    id,
                                                    register,
                                                    children
                                                }) => {
    const [uploadFileName, setUploadFileName] = useState<string>()

    const inputUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files && setUploadFileName(e.target.files[0].name)
    }

    return (
        <div className={s.wrapper}>
            <input
                className={s.input}
                type="file"
                id={id}
                {...register}
                onChange={(e) => inputUploadHandler(e)}/>
            <label className={s.label} htmlFor={id}>{children}</label>
            <textarea className={s.textarea}
                      placeholder={"Upload your photo"}
                      value={uploadFileName}/>
            <span className={s.error}>{error}</span>
        </div>
    )
}