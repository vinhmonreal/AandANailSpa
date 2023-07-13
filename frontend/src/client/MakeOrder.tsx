
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Body from "../components/Body";
import  Spinner  from "react-bootstrap/Spinner";




export default function Makeorder() {
    const base_url = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const drinkName = localStorage.getItem("drinkName") as string;
    async function handleOrder(drinkName: string) {     
        setLoading(true);   
        const res = await fetch (`${base_url}/client/order`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clientName: (document.getElementById("clientName") as HTMLInputElement).value,
                drinkName: drinkName,
                clientStation: (document.getElementById("clientStation") as HTMLInputElement).value,
            })
        }
        )
        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
            setLoading(false);
            alert("Your drink is on the way!")
            navigate("/services")
            
        }
        else {          
            alert("Order failed")
        }
    
    
    }
    return (
        <Body navbar={true} >

      
            {loading ? ( 
                <Spinner animation="grow" variant="danger" > Processing...
                </Spinner>
                
            ): (
            <div>
                <h2>You are making order for {drinkName}. Please enter your name and your station!</h2>
                <center><form onSubmit={(e) => {
                    const drinkName = localStorage.getItem("drinkName") as string;
                    e.preventDefault();
                    handleOrder(drinkName);
                    }}>
                    <label htmlFor="clientName">Name</label>
                    <br />
                    <input type="text" id="clientName" name="clientName" placeholder="Enter Your Name"/>
                    <br /> <br />
                    <label htmlFor="clientStation">Station</label>
                    <br />
                    <input type="text" id="clientStation" name="clientStation" placeholder="Chair/Table Number" />
                    <br />
                    <button type="submit">Order Now</button>
                </form></center>
            </div>

            )}
        </Body>
    )
}
