
import { useEffect, useState } from "react";
import  {GetServices}  from "../components/GetServices";
import Body from "../components/Body";

export default function Pedicures() {
    const base_url = import.meta.env.VITE_BASE_URL;
    const [services, setServices] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchServices = async () => {
        const res = await fetch(`${base_url}/admin/services`);
        const data = await res.json();
        setServices(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchServices();
    }
    , []);


    const pedicures = [
        {
            name:"1. Herbal Organic Spa",
            price:"",
            instruction:"",
            ingredients:[],
        },
        {}
    ]

    return (
        <Body navbar={true} >

        <div className="service-container">
        {loading ? <h2>Loading...</h2> : (    
            <>
                
                <center><h1>Pedicures</h1> </center>  
                <hr />
                    {services.map((service: { _id: any; name: any; price: any; instruction: any; image: any; ingredients: [any] }) => {
                        return (
                            <div key={service._id}>
                                <h3>{service.name+'.....'}{service.price}</h3>
                                <p>{service.instruction}</p>
                                {service.ingredients.map((ingredient) => {
                                    return (
                                        <ul>
                                            <li>{ingredient}</li>
                                        </ul>
                                    )
                                }
                                )}
                                <hr />

                            </div>
                                    


                        )
                    }
                    )}
            </>
        )}
    </div>
    </Body>
    )
}

const style = {
    marginLeft: "50px"
}
