
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";


export function GetManicures() {
    
    const base_url = import.meta.env.VITE_BASE_URL
    const [manicure, setManicure] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();    
    
    const fetchServices = async () => {
        const res = await fetch (`${base_url}/admin/nails`)
        const data = await res.json();
        setServices(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchServices();
    }, []);

    useEffect(() => {
        const manicure = services.filter((service: { type: string; }) => service.type === "Manicure");
        setManicure(manicure);  
    }, [services]);

    async function handleRemove(id:string) {
        // create a promt to confirm the delete
        if (window.confirm('Are you sure you want to delete this service?')) {        
        setLoading(true);
        const res = await fetch (`${base_url}/admin/removenail`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id})
        })

        if (res.status === 200) {
            const newServices = services.filter((service: any) => service._id !== id);
            setServices(newServices);
        }
        setLoading(false);
        } else {
            return;
        }
    }

    
    return (
        <Body navbar={true}>
            <div>
                <h1>Manicures Manager</h1>
                <button onClick={()=>{navigate("/admin/addmanicure")}}>Add Manicure</button>
                <hr />
                {loading ? <h1>Loading...</h1> : (manicure.map((manicure: any) => (
                    <div key={manicure._id}>
                        <h1>Name: {manicure.name}</h1>
                        <h2>Price: {manicure.price}</h2>
                        <p>Description: {manicure.description}</p>
                        <img src={manicure.image} width={"100%"} height={"100%"}/>
                        <br />
                        <div style={style}>

                            <button onClick={()=>{handleRemove(manicure._id)}}>Remove</button>
                            
                            <button onClick={()=>{
                                localStorage.setItem('stuff_id', JSON.stringify(manicure._id))
                                navigate("/admin/updatemanicure")
                                }}>Update</button>
                        </div>
                                <hr />
                    </div>
                )))}
            </div>
        </Body>
    )
}


const style = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}