import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard, { withPromotedComp } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { ReactDOM } from "react-dom/client";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = withPromotedComp(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.370509&lng=79.4661697&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //   ?.restaurants);

      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      console.log(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurant data: ", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="dark:bg-black my-1 dark:m-0 min-h-screen">
      <div className="flex shadow-md">
        <div className="m-4 dark:text-white">
          <FontAwesomeIcon className="absolute p-3" icon={faMagnifyingGlass} />
          <input
            className="bg-transparent font-semibold py-2 px-8 border border-blue-950 dark:border-white rounded-full"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-1 bg-green-500 hover:bg-green-600 text-white font-bold py-[6px] px-2 border-b-4 border-green-600 hover:border-green-700 rounded-xl"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-2 my-[20px] h-10 bg-red-400 hover:bg-red-600 text-white font-bold border-b-4 border-red-400 hover:red-700 rounded-xl"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) => res.info.avgRating > 4.4)
              );
            }}
          >
            Top-Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted === true ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
