import { useContext } from "react"
import ValueContext from "./Context"



export default function Three(){
    const change = useContext(ValueContext);
    change(12);
    return(
        <div>
            <h1>Three</h1>
        </div>
    )
}