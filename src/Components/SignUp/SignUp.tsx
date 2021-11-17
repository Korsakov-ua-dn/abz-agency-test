import { SubmitHandler, useForm } from "react-hook-form"
import { PositionType } from "../../Main/DAL/axios";
import s from "./SignUp.module.scss"

type PropsType = {
    positions: PositionType[]
}

export const SignUp:React.FC<PropsType> = ({positions}) => {

    const { register, handleSubmit } = useForm<FormDataType>();
    const onSubmit: SubmitHandler<FormDataType> = data => console.log(data);
   
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, minLength: 2, maxLength: 60 })} />
            <input {...register("email", { required: true, minLength: 2, maxLength: 100})} />
            <input type="number" {...register("phone", { required: true })} />
            <span>Select your position</span>
            { 
                positions.map(p => <input key={p.id} type="checkbox" {...register("position")} />)
            }
            <input type="file" {...register("photo", { required: true, min: 18, max: 99 })} />
            <input type="submit" />
        </form>
    );
}

//types
type FormDataType = {
    name: string
    email: string
    phone: string
    position: string
    photo: string
}