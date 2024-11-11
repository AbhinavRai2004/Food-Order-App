import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategorie from "./RestaurantCategorie";

const RestaurantMenuCard = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const jsonData = await data.json();

      setResInfo(jsonData);
    } catch (error) {
      console.log("Error fetching menu:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center min-h-screen bg-gradient-to-b from-teal-50 via-white to-teal-100">
      <h1 className="mt-1 mb-4 p-4 text-3xl font-bold ">{name}</h1>
      <p className="my-4 text-gray-600 font-medium">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((categorie) => (
        <RestaurantCategorie key={categorie.card.card.title} data={categorie.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenuCard;
