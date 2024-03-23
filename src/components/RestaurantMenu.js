import { useEffect, useState } from "react";
import {SWIGGY_RES_MENU_API_URL} from '../utils/constant'
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    console.log(resId)

    useEffect(()=>{
        fetchResMenu();
    }, []);

    const fetchResMenu = async () => {
        const data = await fetch(SWIGGY_RES_MENU_API_URL+resId);
        const resData = await data.json();
        setResInfo(resData.data);
    }

    if(resInfo === null ){
        return <ShimmerCard/>
    }

    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards)

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - { costForTwoMessage }</p>
            <h1>Menu</h1>
            <ul>
                {itemCards?.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {'Rs.'}
                        {item.card.info.price/100 || item.card.info.defaultPrice/100}
                    
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;