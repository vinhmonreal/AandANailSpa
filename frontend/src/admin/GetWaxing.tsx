
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";


export default function GetWaxing() {    
    
    const base_url = import.meta.env.VITE_BASE_URL
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [waxing, setWaxing] = useState([]);
    const navigate = useNavigate();
    
    
    const fetchServices = async () => {
        const res = await fetch (`${base_url}/admin/nails`)
        const data = await res.json();
        console.log(data);
        setServices(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchServices();
    }, []);

    useEffect(() => {
         const waxing = services.filter((service: { type: string; }) => service.type === "Waxing");
        setWaxing(waxing);
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
            <h1>Waxing Manager</h1>
            <button onClick={()=>{navigate("/admin/addwaxing")}}>Add Service</button>
            <hr />
            {loading ? <h1>Loading...</h1> : (waxing.map((service: any) => (
                <div key={service._id}>
                    <h1>Name: {service.name}</h1>
                    <p>Price: {service.price}</p>
                    <p>Description: {service.description}</p>
                        <div style={style}>

                            <button onClick={()=>{handleRemove(service._id)}}>Remove</button>
                            <button onClick={()=>{
                                localStorage.setItem('stuff_id', JSON.stringify(service._id))
                                navigate("/admin/updatewaxing")
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