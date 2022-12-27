import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


function CocktailPage() {
    const [cocktailData, updateCocktailData] = useState({ ingredients: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`/cocktails/${id}`)
            .then((results) => { return results.json(); })
            .then((data) => { updateCocktailData(data) })
    }, []);

    return (
        <div>
            <div id="cocktail-page">
                <h2>{cocktailData.name}</h2>
                <img src={cocktailData.image} alt="cocktail" />
                <h3>{cocktailData.instructions}</h3>


                {cocktailData.ingredients[0] ?
                    <div>
                        <h3>Ingredients:</h3>

                        {cocktailData.ingredients.map((ingredientData, key) => {
                            return (
                                <ul>
                                    {ingredientData.name}
                                    <img src={ingredientData.image} />
                                </ul>
                            );
                        })}
                    </div>
                    : 'No Ingredients added yet.'}


                <h4>Glass: {cocktailData.glass}</h4>
                <h4>Category: {cocktailData.category}</h4>
                <h4>Alcoholic: {cocktailData.is_alcoholic}</h4>
                <h4>Popular: {cocktailData.is_popular}</h4>
            </div>

            <div >
                <Link className="button" to="/">View More Cocktails</Link>
            </div>
        </div>
    );

}

export default CocktailPage