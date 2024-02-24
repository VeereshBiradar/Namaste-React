import { resData } from "../utils/constant";
import { styleCard, IMAGE_CDN_URL } from "../utils/constant";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  deliveryTime,
}) => {
  return (
    <div className="restaurant__card">
      <div className="food_image">
        <img alt="food-image" src={IMAGE_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="restaurant__details">
        <div className="name">{name}</div>
        <div className="avgRating">{avgRating} stars</div>
        <div className="cost">{costForTwo} FOR TWO</div>
      </div>
    </div>
  );
};
