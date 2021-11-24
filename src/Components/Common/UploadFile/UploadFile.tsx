import s from "./UploadFile.module.scss"
import React, {useState} from "react"

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

    const lableClassName =  ` ${error ? s.errorLabel : ''} ${s.label} `
    const textareaClassName =  ` ${error ? s.errorTextarea : ''} ${s.textarea} `

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
            <label className={lableClassName} htmlFor={id}>{children}</label>
            <textarea className={textareaClassName}
                      placeholder={"Upload your photo"}
                      value={uploadFileName}
                      readOnly
                      />
            <span className={s.error}>{error}</span>
        </div>
    )
}