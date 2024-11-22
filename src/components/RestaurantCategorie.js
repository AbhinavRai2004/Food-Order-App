import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantCategorie = ({ data, setDisplayIdx, display}) => {
  const { title, itemCards } = data;

  return (
    <div>
      <button
        className="my-3 w-6/12 mx-auto rounded-lg p-4 bg-teal-50 hover:bg-teal-300 transition-colors duration-200 shadow-md"
        onClick={() => {
          setDisplayIdx();
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
          {itemCards.map((foodItem, index) => (
            <RestaurantItemCard key={index} item={foodItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategorie;
