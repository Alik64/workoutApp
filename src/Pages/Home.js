import React, { useContext } from 'react'
import Category from '../Components/Category/Category'
import { appContext } from '../Context/appContext'



export default function Home() {
    const { data } = useContext(appContext)

    return (
        <div>
            <h1>Choice your workout</h1>
            {data.map((category, index) => {
                return (
                    <div key={index}>
                        <Category category={category} />
                    </div>
                )
            })}

        </div>
    )
}
