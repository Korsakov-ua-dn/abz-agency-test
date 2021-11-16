import Button from "./Button/Button"
import {InputText} from "./Input/InputText"

export const View = () => {

    return (
        <div style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
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
            <h1>The five boxing wizards jump quickly.</h1>
            <p>The five boxing wizards jump quickly.</p>
        </div>
    )
}