import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { Menu_API } from './utills/constant';


const RestaurantMenu = () => {

    const [resinfo, setResinfo] = useState(null);
    const [menu, setmenu] = useState([])
     
    const {resId} = useParams();
    console.log(resId)

    // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.130436&lng=75.81890930000002&restaurantId=1049&catalog_qa=undefined&submitAction=ENTER"


    const fetchResMenu = async () => {
        const MenuData = await fetch(
            Menu_API + resId
            // & catalog_qa=undefined & submitAction=ENTER"
        );
        // console.log(MenuData)

        const json = await MenuData.json();
        // console.log(json)
        setResinfo(json.data.cards[0].card.card.info)
        setmenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories)
        // console.log(resinfo.itemCards)
    };
    // use effect always decalare hone k bad chlega 
    useEffect(() => {
        fetchResMenu();
    }, [])

    console.log(menu[0].title) 

    if (resinfo === null) return
    <Shimmer />;

    // const  itemCards = resinfo?.cards?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards

    // console.log(menu)


    // const { name, cusision, CostForTwoMessage } = a

    return (

        <div>
            <h1>{resinfo.name}</h1>
            <h3>{resinfo.cuisines}</h3>
            <h3>{resinfo.costForTwoMessage}</h3>
            <ul>
                {menu[0].itemCards.map((item) => (
                    <li >
                        {item.card.info.name} - {"Rs"} {item.card.info.price / 100
                        }
                    
                        {console.log( item.info.id )}
                    </li>
                ))}


            </ul>
        </div>
    )
}

export default RestaurantMenu
