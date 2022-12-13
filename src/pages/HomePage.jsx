import React, { useState, useEffect } from "react";
import CocktailCard from "../components/CocktailCard";
import { allCocktails } from "../data";


function HomePage() {

    const [cocktailData, updateCocktailData] = useState([])
    // const [popularData, updatePopularData] = useState([])

    useEffect(() => {
        fetch(`/cocktails`)
            .then(res => res.json())
            .then(data => { updateCocktailData(data); })

        // fetch(`/cocktails/popular`)
        //     .then(res => res.json())
        //     .then(data => { updatePopularData(data); })
    }, [])

    return (
        <div>
            <div id="hero-banner">
                <div id="hero-banner-text">
                    <h1>Welcome to Cocktails and Candy</h1>
                    <p>There is no candy, but there is cocktails</p>
                    <a href="#cocktails" className="button" >Find Cocktails Now</a>
                </div>
            </div>

            <div id='cocktails' className="cocktail-list" >
                {
                    cocktailData.map((cocktail, key) => {
                        return <CocktailCard key={key} cocktailData={cocktail} />;
                    })
                }
            </div >

            {/* <div id='cocktails' className="cocktail-list" >
                <h1>Popular Cocktails</h1>
                {
                    popularData.map((cocktail, key) => {
                        return <CocktailCard key={key} popularData={cocktail} />;
                    })
                }
            </div > */}

        </div>
    )

}

export default HomePage;