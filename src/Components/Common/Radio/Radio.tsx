import React, {RefAttributes, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Radio.module.scss'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type RadioPropsType = DefaultInputPropsType & {
    radioId: number
    style?: any
    name: string
}

const Radio: React.FC<RadioPropsType & RefAttributes<HTMLInputElement>> = React.forwardRef((props, ref) => {

    const { type,  children, name, radioId, style, ...restProps} = props

      return (
        <label style={style} className={s.lableWrapper}>
            <input
                type={'radio'}
                ref={ref}
                name={name}
                value={radioId}
                // onChange={onChange}
                className={s.input}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            <span className={s.span}></span>
            {children && <span className={s.spanChild}>{children}</span>}
        </label>
    )
})

export default Radio