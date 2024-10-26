import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import RestaurantItemCard from "./RestaurantItemCard";
import Shimmer from "./Shimmer";

const RestaurantCategorie = ({ data }) => {
  const { title, itemCards } = data;
  const [display, setDisplay] = useState(false);
  const [listOfItem, setListOfItem] = useState([]);

  return (
    <div>
      <button
        className="my-3 w-6/12 mx-auto rounded-lg p-4 bg-teal-50 hover:bg-teal-300 transition-colors duration-200 shadow-md"
        onClick={() => {
          if (display === false) {
            setListOfItem(itemCards);
            setDisplay(true);
          } else {
            setDisplay(false);
            setListOfItem([]);
          }
        }}
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">
            {title} ({itemCards.length})
          </h1>
          {display === false ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} />
          )}
        </div>
      </button>
      {display && (
        <div className="px-4">
          {listOfItem.map((foodItem, index) => (
            <RestaurantItemCard key={index} item={foodItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategorie;
