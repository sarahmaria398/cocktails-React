import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


function IngredientPage() {
    const [ingredientData, updateIngredientData] = useState({ name: '' });
    const { id } = useParams();

    useEffect(() => {
        fetch(`/ingredients/${id}`)
            .then((results) => { return results.json(); })
            .then((data) => { updateIngredientData(data) })
    }, []);

    return (
        <div>
            <div id="ingredient-page">
                <h2>{ingredientData.name}</h2>
                <img src={ingredientData.image} alt="ingredient" />
                <h3>{ingredientData.instructions}</h3>
            </div>

            <div >
                <Link className="button" to="/">View More Cocktails</Link>
            </div>
        </div>
    );

}

export default IngredientPage;