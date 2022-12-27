import React, { useState, useEffect } from "react";
import CocktailCard from "../components/CocktailCard";
import { useParams, Link, useNavigate } from "react-router-dom";
import BrowsePage from "./BrowsePage";


function HomePage() {

    const [cocktailData, updateCocktailData] = useState([{ ingredients: [] }])
    const [popularData, updatePopularData] = useState([{ ingredients: [] }])
    const [latestData, updateLatestData] = useState([{ ingredients: [] }])
    // const [randomData, updateRandomData] = useState([{ ingredients: [] }])
    const letterData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M']
    const M = 'M'


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

            <h1>Browse by Name</h1>
            <div id="name-list" >
                {/* {
                    letterData.map((letter, key) => {
                        return <Link to={`/cocktails/by_letter/${letter}`} key={key} letterData={letter} > {letter}</Link>
                        TODO so far the top works better, though unable to pass through the letter to the BrowsePage, as the url on the console shows either object
                        or undefined.
                        
                        // return <BrowsePage key={key} letterData={letter} to={`/cocktails/by_letter/${letter}`}> {letter}</BrowsePage>
                    })
                } */}

                <li><a href="/cocktails/by_letter/M" letter={M}>M</a></li>
                {/* undefined url path: has object for letter */}
            </div>

        </div>
    )

}

export default HomePage;