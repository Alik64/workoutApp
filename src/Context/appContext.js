import { createContext, useState, useEffect } from "react";


export const appContext = createContext()



export default function AppContextProvider(props) {

    const exo = [
        {
            name: "Upper body",
            id: 1
        },
        {
            name: "Leg day",
            id: 2
        },
        {
            name: "Full body",
            id: 3
        },
        {
            name: "Abs",
            id: 4
        },
    ]
    const [timer, setTimer] = useState()

    return (
        <appContext.Provider value={{ timer, exo }}>
            {props.children}
        </appContext.Provider>
    )
}
