import React from "react";
import { Link } from "react-router-dom";
import "./CocktailCard.css";

function CocktailCard(props) {
    const { cocktailData } = props;
    return (
        <div className="cocktail-card">
            <Link to={`/cocktails/${cocktailData.id}`}>
                <img src={cocktailData.image} />
                <h3>{cocktailData.name}</h3>
            </Link>
        </div>
    );
}

export default CocktailCard;