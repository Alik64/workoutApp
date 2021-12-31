import { createContext } from "react";
import { activities } from "../data";

export const appContext = createContext()



export default function AppContextProvider(props) {




    return (
        <appContext.Provider value={{ activities }}>
            {props.children}
        </appContext.Provider>
    )
}
