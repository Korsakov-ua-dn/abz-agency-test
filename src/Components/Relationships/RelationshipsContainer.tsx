import { useSelector } from "react-redux"
import { AppStoreType } from "../../Main/BLL/b1-store"
import { Relationships } from "./Relationships"

export const RelationshipsContainer = () => {

    const numberColumns = useSelector((s: AppStoreType) => s.auth.numberColumns)

    const text = numberColumns === 1 
    ? "Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion."
    : "Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.";

    return <Relationships text={text}/>
}