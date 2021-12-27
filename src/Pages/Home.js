import React, { useContext } from 'react'
import Activity from '../Components/Activity'
import { appContext } from '../Context/appContext'


export default function Home() {
    const { activities } = useContext(appContext)

    return (
        <div>
            <h1>Choice your workout</h1>
            {activities.map((activity, index) => {
                return (
                    <div key={index}>
                        <Activity activity={activity} />
                    </div>
                )
            })}

        </div>
    )
}
