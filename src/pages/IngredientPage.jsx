import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CocktailCard from "../components/CocktailCard";


function IngredientPage() {
    const [ingredientData, updateIngredientData] = useState({ name: '' });
    const [cocktailData, updateCocktailData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`/ingredients/${id}`)
            .then((results) => { return results.json(); })
            .then((data) => { updateIngredientData(data) })
    }, []);

    useEffect(() => {
        fetch(`/cocktails/search/${ingredientData.name}`)
            .then((results) => { return results.json(); })
            .then((data) => { updateCocktailData(data) })
    }, [ingredientData]);

    return (
        <div>
            <div id="ingredient-page">
                <h2>{ingredientData.name}</h2>
                <img src={ingredientData.image} alt="ingredient" />
                <h3>{ingredientData.instructions}</h3>
            </div>

            <div id="cocktail-list" >
                <h1>Cocktails with this Ingredient</h1>

                {
                    cocktailData.map((cocktail, key) => {
                        return <CocktailCard key={key} cocktailData={cocktail} />;
                    })
                }
            </div >

            <div >
                <Link className="button" to="/">View More Cocktails</Link>
            </div>
        </div>
    );

}

export default IngredientPage;