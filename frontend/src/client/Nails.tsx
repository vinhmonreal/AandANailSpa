
import { useEffect, useState } from "react";
import  {GetServices}  from "../components/GetServices";
import Body from "../components/Body";

export default function Nails() {
    const base_url = import.meta.env.VITE_BASE_URL;
    const [services, setServices] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [manicure, setManicure] = useState<any>([]);
    const [nail, setNail] = useState<any>([]);

    const fetchServices = async () => {
        const res = await fetch(`${base_url}/admin/nails`);
        const data = await res.json()
              
        setServices(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchServices();
    }
    , []);

    useEffect(() => {
        const manicure = services.filter((service: { type: string; }) => service.type === "Manicure");
       
        const nail = services.filter((service: { type: string; }) => service.type === "Nail");
        setNail(nail);
    }, [services]);

  
    return (
        <Body navbar={true} >

        <div className="service-container">
        {loading ? <h2>Loading...</h2> : (    
            <>
                
                <center><h1>Nail Enhancement</h1> </center>  
                    {nail.map((service: { _id: any; name: any; price: any; description: any; image: any; }) => {
                        return (
                            <ul key={service._id}>
                                <li>{service.name+'.....'}{service.price}</li>
                                <p>{service.description}</p>
                            </ul>


                        )
                    }
                    )}
            </>
        )}
    </div>
    </Body>
    )
}

