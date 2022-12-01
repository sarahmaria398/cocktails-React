import React from "react";
import CocktailCard from "../components/Nav/CocktailCard/CocktailCard";
import { allCocktails } from "../data";
import "../App.css";

function HomePage() {
    return (
        <div id="cocktail-list">
            {allCocktails.map((cocktailData, key) => {
                return <CocktailCard key={key} cocktailData={cocktailData} />;
            })}
        </div>
    )

}

export default HomePage;