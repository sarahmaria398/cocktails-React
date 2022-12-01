import React from "react";
import { oneCocktail } from "../data"

function CocktailPage() {
    return (
        <div id="cocktail-page">
            <h2>{oneCocktail.name}</h2>
            <img src={oneCocktail.image} alt="cocktail" />
            <h3>{oneCocktail.instructions}</h3>

            <h3>Ingredients:</h3>

            {oneCocktail.ingredients.map((ingredientData, key) => {
                return (
                    <li>
                        {ingredientData.name}
                    </li>
                );
            })}
            <h4>Glass: {oneCocktail.glass}</h4>
            <h4>Category: {oneCocktail.category}</h4>
        </div>
    );

}

export default CocktailPage