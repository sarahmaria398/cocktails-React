import React from "react";
import CocktailCard from "../components/CocktailCard";
import { allCocktails } from "../data";


function HomePage() {
    return (
        <div className="cocktail-list" >
            {
                allCocktails.map((cocktailData, key) => {
                    return <CocktailCard key={key} cocktailData={cocktailData} />;
                })
            }
        </div >
    )

}

export default HomePage;