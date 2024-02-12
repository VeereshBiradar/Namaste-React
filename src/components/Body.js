import { RestaurantCard } from './RestaurantCard';
import { restaurantList } from '../utils/mockData';
import { useEffect, useState } from 'react';

export const Body = () => {

    const [listOfResturants, setListOfResturants] = useState(restaurantList);

    useEffect(()=> {
        console.log("Use Effect called")
    }, [])

    return (
        <div className="body">
            <br />
            <div className='filter'>
                <button className='filter-btn' onClick={()=>{
                    const filteredList = listOfResturants.filter((res)=> res.rating > 4);
                    setListOfResturants(filteredList);
                }}>
                    Top Rated Resturants
                </button>
            </div>
            <br />
            <br />
            <div className="restaurant-container">
                {
                    listOfResturants.map((restaurant, index)=>(
                        <RestaurantCard key={restaurant.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}