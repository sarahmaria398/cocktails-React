import React, { useState, useEffect } from "react";
import CocktailCard from "../components/CocktailCard";
import { allCocktails } from "../data";


function HomePage() {

    const [cocktailData, updateCocktailData] = useState([])

    useEffect(() => {
        // setLoading(true);
        // ${process.env.REACT_APP_API_URL}
        fetch(`/cocktails`)
            .then(res => res.json())
            .then(data => { updateCocktailData(data); })
    }, [])

    return (
        <div className="cocktail-list" >
            {
                cocktailData.map((cocktail, key) => {
                    return <CocktailCard key={key} cocktailData={cocktail} />;
                })
            }
        </div >
    )

}

export default HomePage;