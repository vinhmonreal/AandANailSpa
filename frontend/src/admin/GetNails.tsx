
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";


export default function GetNails() {
    
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
        const manicure = services.filter((service: { type: string; }) => service.type === "Nail");
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
                <h1>Nails Manager</h1>
                <button onClick={()=>{navigate("/admin/addnail")}}>Add Nail</button>
                <hr />
                {loading ? <h1>Loading...</h1> : (manicure.map((service: any) => (
                    <div key={service._id}>
                        <h3>Name: {service.name}</h3>
                        <p>Price: {service.price}</p>
                        <p>Description: {service.description}</p>
                        <button onClick={()=>{handleRemove(service._id)}}>Remove</button>
                        <button style={style} onClick={()=>{
                            localStorage.setItem('stuff_id', JSON.stringify(service._id))
                            navigate("/admin/updatenail")
                            }}>Update</button>
                            <hr />
                    </div>
                )))}
            </div>
        </Body>
    )
}

const style = {
    marginLeft: "50px"
}
