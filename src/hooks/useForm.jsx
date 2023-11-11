import { useState } from "react"



export const useForm = (estadoInicial = {} ) => {
    
    const [values, setValues] = useState(estadoInicial)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({ 
            ...values,
            [name]: Number(value)
        })
    }

    return [values, handleInputChange]
}
