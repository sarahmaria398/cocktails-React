import React, { useState, useEffect } from "react";
import CocktailCard from "../components/CocktailCard";
import { useParams, Link, useNavigate } from "react-router-dom";
import BrowsePage from "./BrowsePage";


function AllCocktailsPage() {

    const [cocktailData, updateCocktailData] = useState([{ ingredients: [] }])
    const M = 'M'


    useEffect(() => {
        fetch(`/cocktails`)
            .then(res => res.json())
            .then(data => { updateCocktailData(data); })
            .catch(error => console.log)

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

            <h1>All Cocktails : Filtering</h1>
            <div id="cocktail-list" >

                {
                    cocktailData.map((cocktail, key) => {
                        return <CocktailCard key={key} cocktailData={cocktail} />;
                    })
                }
            </div >



        </div>
    )

}

export default AllCocktailsPage;