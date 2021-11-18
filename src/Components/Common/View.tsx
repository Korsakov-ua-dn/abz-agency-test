import Button from "./Button/Button"
import {Input} from "./Input/Input"

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
            <Input
                label={"E-mail"}
                placeholder={"enter your email"}
                error={""}/>
            <Input
                label={"Error"}
                placeholder={"enter your email"}
                error={"Helper text"}/>
            <h1>The five boxing wizards jump quickly.</h1>
            <p>The five boxing wizards jump quickly.</p>
        </div>
    )
}