import React from "react";
import { allCocktails } from "../data";

function HomePage() {
    return (
        <div>
            {allCocktails.map((cocktailData, key) => {
                return <div key={key}>{cocktailData.name}
                    <img src={cocktailData.image} alt="cocktail" />
                </div>
            })}
        </div>
    )

}

export default HomePage;