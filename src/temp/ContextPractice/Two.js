import Three from "./Three";
import React from "react";
const ValueContext = React.createContext();


export default function Two(props){

    return(
        <div>
            <h1>Two</h1>
            <Three/>
        </div>
    )
}