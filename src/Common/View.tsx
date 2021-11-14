import Button from "./Button/Button";
import {InputText} from "./Input/InputText";

export const View = () => {
    return (
        <>
            <Button primary>Normal</Button>
            <Button primary disabled>Disabled</Button>
            <InputText
                label={"E-mail"}
                placeholder={"enter your email"}
                maxLength={10}
                error={""}
                currentLength={5}/>
            <InputText
                label={"Error"}
                placeholder={"enter your email"}
                maxLength={10}
                error={"Helper text"}
                currentLength={5}/>
        </>
    )
}