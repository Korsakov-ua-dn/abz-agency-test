import s from "./UploadFile.module.scss"
import React from "react"

type PropsType = {
    error: string
    id: string
    uploadFileName: string | undefined
    setUploadFileName: (fileName: string) => void
    register: any
}

export const UploadFile: React.FC<PropsType> = ({
                                                    error,
                                                    id,
                                                    uploadFileName,
                                                    setUploadFileName,
                                                    register,
                                                    children
                                                }) => {

    const {onChange, ...restProps} = register                                            

    const inputUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files && setUploadFileName(e.target.files[0].name)
    }

    const labelClassName =  `${s.label} ${error ? s.errorLabel : ''}`
    const textareaClassName =  `${s.textarea}`
    const textareaWrapper =  `${s.textareaWrapper} ${error ? s.errorTextarea : ''}`

    return (
        <div className={s.wrapper}>
            <input
                className={s.input}
                type="file"
                id={id}
                onChange={(e) => {
                    onChange(e)
                    inputUploadHandler(e)
                }}
                {...restProps}
                
                />
            <label className={labelClassName} htmlFor={id}>{children}</label>
            <div className={textareaWrapper}>
                <textarea className={textareaClassName}
                          placeholder={"Upload your photo"}
                          value={uploadFileName}
                          readOnly
                />
            </div>
            <span className={s.error}>{error}</span>
        </div>
    )
}