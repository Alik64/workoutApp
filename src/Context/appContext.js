import { createContext } from "react";
import { data } from "../data";

export const appContext = createContext()



export default function AppContextProvider(props) {




    return (
        <appContext.Provider value={{ data }}>
            {props.children}
        </appContext.Provider>
    )
}
