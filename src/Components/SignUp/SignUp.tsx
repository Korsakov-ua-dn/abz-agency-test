import { SubmitHandler, useForm, Controller } from "react-hook-form"
import { PositionType } from "../../Main/DAL/axios";
import { Input } from "../Common/Input/Input";
import { Title } from "../Common/Title/Title";
import s from "./SignUp.module.scss"

type PropsType = {
    positions: PositionType[]
}

export const SignUp:React.FC<PropsType> = ({positions}) => {

    const setMarginBottom = (mb: number) => ({
        marginBottom: `${mb}px`
    })

    const { register, handleSubmit, reset, control } = useForm<any>({});
    const onSubmit: SubmitHandler<FormDataType> = data => console.log(data)
   
    return (
        <section className={s.section}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <Title>Register to get a work</Title>
                    <h2>Your personal data is stored according to the Privacy Policy</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>

                        <Input 
                                style={setMarginBottom(50)}
                                label={"Your name"} 
                                placeholder={"Enter your name"} 
                                type="text" 
                                // error={errors.name}
                                register={ {...register("name", { required: true, minLength: 2, maxLength: 60 })} } 
                            />
                        
                        <Input 
                            style={setMarginBottom(50)}
                            label={"Email"} 
                            placeholder={"Enter your email"} 
                            type="text" 
                            // error={errors.email}
                            register={ {...register("email", { required: true, minLength: 2, maxLength: 100})} }
                        />

                        <Input 
                            style={setMarginBottom(45)}
                            label={"Phone"} 
                            placeholder={"Enter your phone"} 
                            type="text" 
                            // error={errors.phone}
                            register={ {...register("phone", { required: true })} }
                        />
                        {/* <label>Select your position</label>
                        <Controller
                        as={
                            <RadioGroup aria-label="gender">
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                            />
                            </RadioGroup>
                        }
                        name="RadioGroup"
                        control={control}
                        /> */}
                        {/* <div className={s.positionWrapper}>
                            <span>Select your position</span>
                            { 
                                positions.map(p => <input key={p.id} type="radio"   {...register(`${p.name}`)} />)
                            }
                        </div>
                        <input type="file" {...register("photo")} /> */}
                        <input type="submit" />

                    </form>
                </div>
            </div>
        </section>
    );
}
// pattern: /^[\+]{0,1}380([0-9]{9})$/

// type RadioPropsType = {
//     name: string
// }

// const Radio:React.FC<RadioPropsType> = ({name}) => {
//     return (
//         <input type="radio" name={name} />
//     )
// }

//types
type FormDataType = {
    name: string
    email: string
    phone: string
    photo: string
}