import { useState } from "react";


export default function UseInput(intialvalue) {
    const [value, setvalue] = useState(intialvalue) 
    const reset= () => {
        setvalue(intialvalue)
    }
    const bind ={
         value,
         onChange:e => {
             setvalue(e.target.value)
         }
    }
    return[value,bind,reset]
}