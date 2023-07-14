

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";


export default function GetGallery() {    
    
    const base_url = import.meta.env.VITE_BASE_URL
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [gallery, setGallery] = useState([]);
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
         const gallery = services.filter((service: { type: string; }) => service.type === "Gallery");
        setGallery(gallery);
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
                <h1>Gallery Manager</h1>
                <button onClick={()=>{navigate("/admin/addgallery")}}>Add Picture To Gallery</button>
                <hr />
                {loading ? <h1>Loading...</h1> : (gallery.map((service: any) => (
                    <div key={service._id}>
                        <img src={service.image}  width="100%" height="100%"/>
                        <button onClick={()=>{handleRemove(service._id)}}>Remove</button>
                        <hr />
                    </div>
                )))}
            </div>
        </Body>
    )
}



