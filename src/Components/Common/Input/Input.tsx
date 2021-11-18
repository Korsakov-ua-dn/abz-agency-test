import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './InputText.module.scss'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperInputTextPropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    setError?: (error: string) => void
    error?: string
    label?: string
    spanClassName?: string
    register?: any
}

export const Input: React.FC<SuperInputTextPropsType> = (
    {
        onChange, onChangeText,
        onKeyPress, onEnter, setError,
        label, error,
        className, register,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError && setError('')
        onChange && onChange(e) // если есть пропс onChange то передать ему е (поскольку onChange не обязателен)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter && e.key === 'Enter' && onEnter() // если есть пропс onEnter и если нажата кнопка Enter, то вызвать его
    }
    const onBlurcallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setError && setError('')
        if (!e.currentTarget.value) {
            setError && setError('field is required')
        }
    }

    const finalInputClassName = `${error ? s.errorInput : ''} ${s.input} ${className} `

    return (
        <div className={s.wrapper}>
            <input
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                onBlur={onBlurcallback}
                className={finalInputClassName}
                required // меняет поведение label!!!
                {...register}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
            <label className={s.label}>{label}</label>
            <div>
                <span className={s.error}>{error}</span>
            </div>
        </div>
    )
}