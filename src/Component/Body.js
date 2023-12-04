import React from "react";
import "./Rescard.css";
import Rescard from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import About from "./About";
import { Link } from "react-router-dom";
// import {link}   from ".react-router-dom"

function Body() {
    const [ListOfRestraurant, setListOfRestraurant] = useState([]);
    const [filteredRestraurant, setFilteredRestraurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log(searchText);

    const fetchdata = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2138156&lng=75.8647527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        const newdata =
            json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRestraurant(newdata);
        setFilteredRestraurant(newdata);
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return ListOfRestraurant.length === 0 ? (
        <Shimmer />
    ) : (
        <section className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search.box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            const filteredRestraurants = ListOfRestraurant.filter((res) => {
                                return res.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase());
                                // console.log(res)
                            });
                            setListOfRestraurant(filteredRestraurants);
                            // console.log(filteredRestraurants)
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredmenu = ListOfRestraurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestraurant(filteredmenu);
                    }}
                >
                    Top rated rastaurants
                </button>
            </div>
            <div className="Rescontainer">
                {ListOfRestraurant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={`/restaurants/${restaurant.info.id}`}
                    >
                        <Rescard menu={restaurant} />
                    </Link>
                ))}
            </div>
            <About />
        </section>
    );
}

export default Body;
