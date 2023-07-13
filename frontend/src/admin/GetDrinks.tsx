
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";


export default function GetDrinks() {    
    
    const base_url = import.meta.env.VITE_BASE_URL
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    
    const fetchDrinks = async () => {
        const res = await fetch (`${base_url}/admin/drinks`)
        const data = await res.json();
        console.log(data);
        setDrinks(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchDrinks();
    }, []);

    async function handleRemove(id:string) {
        // create a promt to confirm the delete
        if (window.confirm('Are you sure you want to delete this drink?'))
        {
        setLoading(true);
        const res = await fetch (`${base_url}/admin/removedrink`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})
        })
        if (res.status === 200) {
            const newDrinks = drinks.filter((drink: any) => drink._id !== id);
            setDrinks(newDrinks);
        }
        setLoading(false);
        }
    }
       
    return (
        <Body navbar={true}>
        <>
            <h1>Drinks Manager</h1>
            <button onClick={()=>{navigate("/admin/adddrink")}}>Add Drink</button>
            <hr />
            {loading ? <h2>Loading...</h2> : (
                <div className="service-list">
                    {drinks.map((drink: { _id: any; name: any; price: any; instruction: any; ingredient:any; image: any; }) => {
                        return (
                            <div
                                className="service" 
                                key={drink._id}
                                style={style}
                                >
                                    <center><h3>{drink.name}</h3></center>
                                        <img src={drink.image}  width={"100%"} height={"100%"}/>
                                        <p>{drink.instruction}</p>
                                        <p>{drink.ingredient}</p>
                                    <div style={div}>
                                        <button  onClick={()=>{handleRemove(drink._id)}}>Remove</button>                                
                                        <button onClick={()=>{
                                        localStorage.setItem('stuff_id', JSON.stringify(drink._id))
                                        navigate("/admin/updatedrink")
                                        }}>Update</button>
                                    </div>
                                <hr />
                                </div>
                            )
                        })}
                    </div>
            )}
        </>
        </Body>

    )
}




const style = {
 
    border: '1px solid white',
   
    margin: '10px',
    borderRadius: '10px',
    padding: '10px',
}

const div = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%', 
}
