import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CocktailCard from "../components/CocktailCard";


function BrowsePage(letter) {
    // const { letterData } = letter;
    const [cocktailData, updateCocktailData] = useState({ ingredients: [] });

    useEffect(() => {
        fetch(`/cocktails/by_letter/${letter}`)
            .then((results) => { console.log(results); return results.json() })
            .then((data) => { updateCocktailData(data) })
    }, []);

    return (
        <div>

            <h1>Cocktails by Letter</h1>
            <div id="cocktail-list" >


                {/* {
                    cocktailData.map((cocktail, key) => {
                        return <CocktailCard key={key} cocktailData={cocktail} />;
                    })
                } */}
            </div >


            <h1>Browse by Name</h1>

            <div id="name-list" >
                {/* <p>{letterData}</p> */}

            </div>

        </div>
    );

}

export default BrowsePage;