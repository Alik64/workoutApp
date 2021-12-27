import React from 'react'



export default function Activity({ activity }) {



    return (
        <div>
            <span>{activity.id}</span>  <h2>{activity.name}</h2>
        </div>
    )
}
