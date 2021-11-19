type PropsType = "maxLength" 
    | "minLength" 
    | "pattern" 
    | "required" 
    | "onBlur" 
    | "onChange" 
    | "shouldUnregister" 
    | "min" 
    | "max" 
    | "validate" 
    | "valueAsNumber" 
    | "valueAsDate" 
    | "value" 
    | "setValueAs" 
    | "disabled" 
    | "deps"
    | string 

const getErrorMessage = (type: PropsType | undefined) => {
    switch(type) {
        case "maxLength": return "Max length exceeded"
        case "minLength": return "Insufficient length"
        case "pattern": return "Invalid format"
        case "required": return "Field is required"

        default: return ""
    }
}

export default getErrorMessage