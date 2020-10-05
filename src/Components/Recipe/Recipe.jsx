import React from "react";
import style from './Recipe.module.css';


let Recipe = (props) => {
    return (
        <div id="recipe" className={style.recipe}>
            <div id="recipeBody" className={style.recipeBody}>

            </div>
        </div>
    )
}

export default Recipe;