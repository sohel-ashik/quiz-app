
import Two from "./Two";
import ValueContext from './Context'
import { useState } from "react";

export default function One(){

    const [x,setX] = useState(10);
    const callBack = (val) =>{
        setX(val);
    }

    return(
        <div>
            <h1>One {x}</h1>
            <ValueContext.Provider value={callBack}>
                <Two/>
            </ValueContext.Provider>
        </div>
    )
}