import React from "react";
import { Link, useParams } from "react-router-dom";
import "./IngredientCard.css";

function IngredientCard(props) {
    const { ingredientData } = props;
    const { id } = useParams;


    return (
        <div className="ingredient-card">
            {ingredientData.name}
            <Link to={`/ingredients/${ingredientData.id}`}><img src={ingredientData.image} /></Link>
        </div>
    );
}

export default IngredientCard;