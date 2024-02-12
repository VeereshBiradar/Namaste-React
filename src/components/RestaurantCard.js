import {resData} from '../utils/constant';
import { styleCard, CDN_URL } from '../utils/constant';

export const RestaurantCard = (props) => {
    const {resData} = props
    return (
        <div className="restaurant-card" style={ styleCard }>
            <img src={CDN_URL} alt="" />
            <h3>{resData.name}</h3>
            <h4>{resData.place}</h4>
            <p>{resData.breakfast}</p>
        </div>
    )
}
