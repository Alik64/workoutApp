import React, { useContext, useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom";
import { appContext } from '../../Context/appContext';
import { v4 as uuidv4 } from 'uuid'
import styles from './Workout.module.css'



export default function Workout() {
    const { data } = useContext(appContext)

    let workoutId = Number(useParams().id)
    console.log("workoutId", workoutId)


    return (
        <div>
            <NavLink to={"/"} className={styles.backBtn} >Back</NavLink>
            {data.filter(obj => obj.id === workoutId)
                .map(({ id, category }) =>
                    <div key={uuidv4()}>{category}</div>
                )}
        </div>
    )
}
