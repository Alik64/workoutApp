import React from 'react'
import { v4 as uuidv4 } from 'uuid'


export default function Activity({ activity }) {

    //console.log(activity.exercices)

    return (
        <div>
            <div>
                <span>{activity.id}</span>  <h2>{activity.name}</h2>
                <h2>
                    {activity.description}
                </h2>
            </div>




        </div >
    )
}
