import React, {useEffect, useState} from "react"
import {SubmitHandler, useForm} from "react-hook-form"
import {PositionType} from "../../Main/DAL/axios"
import getErrorMessage from "../../Utils/getErrorMessage"
import {Input} from "../Common/Input/Input"
import Radio from "../Common/Radio/Radio"
import {Title} from "../Common/Title/Title"
import s from "./SignUp.module.scss"
import setMarginBottom from "../../Utils/setMarginBottom"
import verifyUploadFile from "../../Utils/verifyUploadFile"
import {UploadFile} from "../Common/UploadFile/UploadFile";

type PropsType = {
    positions: PositionType[]
}

export const SignUp: React.FC<PropsType> = ({positions}) => {
    const [radioId, setRadioId] = useState<number>()
    useEffect(() => setRadioId(positions[0]?.id), [positions])
    const INITIAL_POSITION = 1

    const {register, handleSubmit, formState: {errors}} = useForm<FormDataType>({
        defaultValues: {
            position: positions[0]?.id | INITIAL_POSITION
        }
    });
    const onSubmit: SubmitHandler<FormDataType> = data => console.log(data)
    // const onError = (errors: any, e: any) => console.log(e);

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
                            error={getErrorMessage(errors.name?.type)}
                            register={{...register("name", {required: true, minLength: 2, maxLength: 60})}}
                        />
                        <Input
                            style={setMarginBottom(50)}
                            label={"Email"}
                            placeholder={"Enter your email"}
                            type="text"
                            error={getErrorMessage(errors.email?.type)}
                            register={{
                                ...register("email", {
                                    required: true,
                                    minLength: 2,
                                    maxLength: 100,
                                    // eslint-disable-next-line no-control-regex
                                    pattern: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
                                })
                            }
                            }
                        />
                        <Input
                            style={setMarginBottom(43)}
                            label={"Phone"}
                            placeholder={"+380xx xxx xx xx"}
                            type="text"
                            error={getErrorMessage(errors.phone?.type)}
                            register={{
                                ...register("phone", {
                                    required: true,
                                    pattern: /^[+]?380([0-9]{9})$/
                                })
                            }
                            }
                        />

                        <div className={s.positionWrapper}>
                            <span className={s.title}>Select your position</span>
                            {
                                positions.map((p) => <Radio
                                    style={setMarginBottom(7)}
                                    key={p.name}
                                    type="radio"
                                    {...register("position")}
                                    radioId={radioId}
                                    checked={p.id === radioId}
                                    onChange={() => setRadioId(p.id)}> {p.name} </Radio>
                                )
                            }
                        </div>

                        <div className={s.uploadWrapper}>
                            <UploadFile
                                id={"userPhoto"}
                                error={getErrorMessage(errors.phone?.type)}
                                register={{
                                    ...register("photo", {
                                        validate: (value) => verifyUploadFile((value as any) as File[]),
                                        required: true
                                    })
                                }
                                } >Upload</UploadFile>
                        </div>

                        <input type="submit"/>

                    </form>
                </div>
            </div>
        </section>
    );
}

//types
type FormDataType = {
    name: string
    email: string
    phone: string
    photo: string
    position: number
}