import React from "react";
import { oneCocktail } from "../data"

function CocktailPage() {
    return (
        <div>
            <h2>{oneCocktail.name}</h2>

            <h3>{oneCocktail.instructions}</h3>
            <img src={oneCocktail.image} alt="cocktail" />
            <h3>Ingredients:</h3>
            {oneCocktail.ingredients.map((ingredientData, key) => {
                return (
                    <li>
                        {ingredientData.name}
                    </li>
                );
            })}
        </div>
    );

}

export default CocktailPage