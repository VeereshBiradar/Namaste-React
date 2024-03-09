import { IMAGE_CDN_URL } from "../utils/constant";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="restaurant__card">
      <div className="food_image">
        <img alt="food-image" src={IMAGE_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="restaurant__details">
        <div className="name">{name}</div>
        <div className="avgRating">{avgRating} stars</div>
        <div className="cost">{costForTwo}</div>
      </div>
    </div>
  );
};
