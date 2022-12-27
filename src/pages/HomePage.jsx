import React, { useState, useEffect } from "react";
import CocktailCard from "../components/CocktailCard";
import { allCocktails } from "../data";


function HomePage() {

    const [cocktailData, updateCocktailData] = useState([{ ingredients: [] }])
    const [popularData, updatePopularData] = useState([{ ingredients: [] }])
    const [latestData, updateLatestData] = useState([{ ingredients: [] }])
    // const [randomData, updateRandomData] = useState([{ ingredients: [] }])


    useEffect(() => {
        fetch(`/cocktails`)
            .then(res => res.json())
            .then(data => { updateCocktailData(data); })
            .catch(error => console.log)

        fetch(`/cocktails/popular`)
            .then(res => res.json())
            .then(data => { updatePopularData(data); })
            .catch(error => console.log)

        fetch(`/latest`)
            .then(res => res.json())
            .then(data => { updateLatestData(data); })
            .catch(error => console.log)

    }, [])
    // useEffect(() => {
    //     fetch(`/random`)
    //         .then(res => {
    //             if (res.ok) { console.log("HTTP request successful") }
    //             else { console.log("HTTP request unsuccessful") }
    //             return res
    //         })
    //         .then(res => res.json())
    //         .then(data => { updateRandomData(data); })
    //         .catch(error => console.log)

    // }, [cocktailData])

    return (
        <div>
            <div id="hero-banner">
                <div id="hero-banner-text">
                    <h1>Welcome to Cocktails and Candy</h1>
                    <p>There is no candy, but there is cocktails</p>
                    <a href="#cocktails" className="button" >Find Cocktails Now</a>
                </div>
            </div>

            <h1>All Cocktails</h1>
            <div id="cocktail-list" >

                {
                    cocktailData.map((cocktail, key) => {
                        return <CocktailCard key={key} cocktailData={cocktail} />;
                    })
                }
            </div >

            <h1>Popular Cocktails</h1>
            <div id="cocktail-list" >

                {
                    popularData.map((cocktail, key) => {
                        return <CocktailCard key={key} cocktailData={cocktail} />;
                    })
                }
            </div >

            <h1>Latest Cocktails</h1>
            <div id="cocktail-list" >

                {
                    latestData.map((cocktail, key) => {
                        return <CocktailCard key={key} cocktailData={cocktail} />;
                    })
                }
            </div >

            {/* <div id='cocktails' className="cocktail-list" >
                <h1>Random Cocktail of the Day</h1>
                {
                    randomData.map((cocktail, key) => {
                        return <CocktailCard key={key} cocktailData={cocktail} />;
                    })
                }
            </div > */}
            {/* TODO bug fix, server return null in position of index as previously deleted */}

        </div>
    )

}

export default HomePage;