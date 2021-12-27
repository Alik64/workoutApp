import React from 'react'



export default function Activity({ activity }) {

    //console.log(activity.exercices)

    return (
        <div>
            <span>{activity.id}</span>  <h2>{activity.name}</h2>
            <ul>
                {activity.exercices.map(ex => {
                    return <li>{ex}</li>
                })}
            </ul>



        </div>
    )
}
