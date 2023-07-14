import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";

export default function Drink() {
    const base_url = import.meta.env.VITE_BASE_URL;
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const fetchDrinks = async () => {
        const res = await fetch(`${base_url}/admin/drinks`);
        const data = await res.json();
        setData(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchDrinks();
    }
    , []);

    const handleOrder = (name: string) => {
        localStorage.setItem('drinkName', name);
        navigate('/makeorder');
    }

    return (
        <Body navbar={true} >
            <h1>Enjoy Our Compliment Drinks</h1>
            <hr />
            {loading ? <h2>Loading...</h2> : (
                <div className="drink-list">
                    {data.map((drink: { _id: any; name: any; price: any; instruction: any; image: any; }) => {
                        return (
                            <div
                                className="service" 
                                key={drink._id}
                                style={style}
                                >
                                    <center><h3>{drink.name}</h3></center>
                                        <img src={drink.image}  width={"100%"} height={"100%"}/>
                                    <center><button className="order-button" onClick={() => handleOrder(drink.name)}>Order</button></center>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
            )}
        </Body>

    )
}

const style = {
 
    border: '1px solid white',
   
    margin: '10px',
    borderRadius: '10px',
    padding: '10px',
}