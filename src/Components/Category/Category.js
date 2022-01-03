import React from 'react'
import styles from './Category.module.css'
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'


export default function Category({ category }) {

    //console.log(category.exercices)

    return (
        <>
            <NavLink to={"/workout/" + category.id}>
                <div className={styles.category}>
                    <div>
                        <h2>{category.category}</h2>
                        <h3>
                            {category.description}
                        </h3>
                    </div>

                </div>

            </NavLink>


        </>
    )
}
