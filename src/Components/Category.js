import React from 'react'
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'


export default function Category({ category }) {

    //console.log(category.exercices)

    return (
        <div>
            <NavLink to={"/workout/" + category.id}>
                <div>
                    <span>{category.id}</span>  <h2>{category.category}</h2>
                    <h2>
                        {category.description}
                    </h2>
                </div>

            </NavLink>


        </div >
    )
}
