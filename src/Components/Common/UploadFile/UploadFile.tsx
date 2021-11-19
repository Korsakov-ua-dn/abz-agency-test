import s from "./UploadFile.module.scss"

type PropsType = {
    error: string
    id: string
}

export const UploadFile:React.FC<PropsType> = (props) => {
    return (
        <div className={s.wrapper}>
            <input className={s.inputImg} type="file" id={props.id}/>
            <label className={s.labelImg} htmlFor={props.id}></label>
            <textarea className={s.textareaImg} placeholder={"Upload your photo"}></textarea>
            <span className={s.errorImg}>{props.error}</span>
        </div>
    )
}