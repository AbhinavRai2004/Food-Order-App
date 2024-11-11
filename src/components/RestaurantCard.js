import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CDN_URL } from "../utils/constants";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = resData?.info;

  return (
    <div className="hover:bg-slate-300 dark:hover:bg-slate-700 rounded-3xl hover:scale-95">
      <img
        className="px-1 pt-3 my-2 mx-2 w-[200px] h-[200px] rounded-3xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="pl-5 pb-3 w-[200px]">
        <h3 className="font-bold dark:text-white">{name}</h3>
        <h4 className="font-semibold dark:text-white">
          <FontAwesomeIcon className="pr-1" icon={faStar} />
          {avgRating} <FontAwesomeIcon className="px-1" icon={faClock} />
          {sla?.deliveryTime} mins
        </h4>
        <p className="text-gray-500 dark:text-white">
          {cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard => return(RestaurantCardPromoted)

export const withPromotedComp = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

// module.exports = RestaurantCard;

export default RestaurantCard;
