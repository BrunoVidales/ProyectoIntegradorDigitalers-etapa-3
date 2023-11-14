import { createContext, useState } from "react";



const ThemeContext = createContext()

const temaInicial = 'dark';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(temaInicial)

    const handleTheme = () => {
       if(theme === 'dark') {
        setTheme('dark')
       } else {
        setTheme('light')
       }
    }

    const data = {theme, handleTheme}

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}



export {ThemeProvider}
export default ThemeContext