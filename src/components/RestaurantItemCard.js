import veg from "../../Images/veg.png";
import nonVeg from "../../Images/nonVeg.png";

const RestaurantItemCard = ({ item }) => {
  const { info } = item.card;
  console.log(info);
  const {
    imageId,
    name,
    defaultPrice,
    price,
    itemAttribute,
    description,
    isVeg
  } = info;
  return (
    <div className="w-6/12 p-3 mx-auto my-5 flex justify-between border shadow-md">
      <div className="w-9/12 mr-3">
        {itemAttribute.vegClassifier === "Veg" || isVeg === 1 ? (
          <img className="w-6 rounded-md" src={veg} alt="veg" />
        ) : (
          <img className="w-6 rounded-md" src={nonVeg} alt="nonVeg" />
        )}
        <h2 className="text-left font-bold text-gray-700">{name}</h2>
        <h2 className="text-left mb-2">₹{price / 100 || defaultPrice / 100}</h2>
        <p className="text-left text-[12px] text-gray-600">{description}</p>
      </div>
      <div className="w-3/12 p-0 m-0">
        <img
          className="w-[160px] rounded-xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
            imageId
          }
          alt="food-img"
        />
      </div>
    </div>
  );
};
export default RestaurantItemCard;
