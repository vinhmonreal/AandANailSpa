
import { useEffect, useState } from "react";
import  {GetServices}  from "../components/GetServices";
import Body from "../components/Body";

export default function Manicures() {
    const base_url = import.meta.env.VITE_BASE_URL;
    const [services, setServices] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [manicure, setManicure] = useState<any>([]);
    const [nail, setNail] = useState<any>([]);

    const fetchServices = async () => {
        const res = await fetch(`${base_url}/admin/nails`);
        const data = await res.json()
              
        console.log(manicure);
        setServices(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchServices();
    }
    , []);

    useEffect(() => {
        const manicure = services.filter((service: { type: string; }) => service.type === "Manicure");
        setManicure(manicure);
        console.log(manicure);

    }, [services]);

  
    return (
        <Body navbar={true} >

        <div className="service-container">
        {loading ? <h2>Loading...</h2> : (    
            <>
                
                <center><h1>Manicures</h1> </center>  
                    {manicure.map((service: { _id: any; name: any; price: any; description: any; image: any; }) => {
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

const styles = {

    card: {    
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid white',
        borderRadius: '10px',
        padding: '10px',
    }
}