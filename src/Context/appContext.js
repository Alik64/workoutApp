import { createContext, useState, useEffect } from "react";


export const appContext = createContext()



export default function AppContextProvider(props) {

    const [timer, setTimer] = useState()

    return (
        <appContext.Provider value={{ timer }}>
            {props.children}
        </appContext.Provider>
    )
}
