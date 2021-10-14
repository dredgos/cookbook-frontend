import axios from "../../axios";
import { useEffect, useState } from "react";
import { allRecipes } from '../../data/dummyData'


const AllRecipes = () => {

    const [allMeals, setAllMeals] = useState([]);

    const everyRecipe = allRecipes


    // const getAllRecipes = async () => {
    //     const allMeals = await axios.get('/recipes');
    //     console.log(allMeals.data)
    // }

    // useEffect(() => {
    //     getAllRecipes();
    // })

    useEffect(() => {
        setAllMeals(everyRecipe.data);
    })

    return (
        <div className="all_recipes">
            {allMeals.map((recipe, index) => (
                <article className="recipe_card">
                    <div className="recipe_card_container">
                        <h4>{recipe.recipe_name}</h4>
                        <p>{recipe.category}</p>
                        <p>{recipe.difficulty}</p>
                        <p>{recipe.time}</p>
                        {/* <p>{recipe.ingredients}</p> */}
                    </div>
                </article>
                )                    
            )}
        </div>
    );
};

export default AllRecipes;