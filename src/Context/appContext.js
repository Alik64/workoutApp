import { createContext, useState, useEffect } from "react";


export const appContext = createContext()



export default function AppContextProvider(props) {

    const activities = [
        {
            name: "Upper body",
            id: 1,
            exercices: [
                "upper1",
                "upper2",
                "upper3"
            ]
        },
        {
            name: "Leg day",
            id: 2,
            exercices: [
                "legday1",
                "legday2",

            ]
        },
        {
            name: "Full body",
            id: 3,
            exercices: [
                "full1",
                "full2",
                "full3",
                "full4"
            ]
        },
        {
            name: "Abs",
            id: 4,
            exercices: [
                "text1",
                "text2",
                "text3",
                "text4",
                "text5"
            ]
        },
    ]
    const [timer, setTimer] = useState()

    return (
        <appContext.Provider value={{ timer, activities }}>
            {props.children}
        </appContext.Provider>
    )
}
