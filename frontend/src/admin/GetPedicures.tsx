
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";


export default function GetPedicures() {
    
    const base_url = import.meta.env.VITE_BASE_URL
    const user = localStorage.getItem('user');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    
    const fetchDrinks = async () => {
        const res = await fetch (`${base_url}/admin/services`)
        const data = await res.json();
        setServices(data);
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
        const res = await fetch (`${base_url}/admin/removeservice`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})
        })

        if (res.status === 200) {
            const newService = services.filter((drink: any) => drink._id !== id);
            setServices(newService);
        }
        setLoading(false);
        }
    }



       
    return (
        <Body navbar={true}>
            <>
            <h1>Pedicures Manager</h1>
            <button onClick={()=>{navigate("/admin/addpedicure")}}>Add Pedicure</button>
            <hr />
            {loading ? <h1>Loading...</h1> : (services.map((pedicure: any) => (
                <div key={pedicure._id}>                    
                    <h1>Name: {pedicure.name}</h1>
                    <p>Price: {pedicure.price}</p>                    
                    <img src={pedicure.image} width={"100%"} height={"100%"}/>
                    <br />
                    <div style={style}>
                        <button onClick={()=>{handleRemove(pedicure._id)}}>Remove</button>                        
                        <button onClick={()=>{
                            localStorage.setItem('stuff_id', JSON.stringify(pedicure._id))
                            navigate("/admin/updatepedicure")
                            }}>Update</button>
                    </div>
                        <hr />
                </div>
            )))}
            </>
        </Body>
    )
}


const style = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}


