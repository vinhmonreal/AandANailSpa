

import { useEffect, useState } from "react";
import Body from "../components/Body";
import { set } from "mongoose";


export default function Home() {
    const [data, setData] =useState<any>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<any>([]);
    const [h1, setH1] = useState<any>([]);
    const [h2, setH2] = useState<any>([]);
    const [h3, setH3] = useState<any>([]);
    const [p, setP] = useState<any>([]);
    const [image1, setImage1] = useState<any>([]);
    const [image2, setImage2] = useState<any>([]);
    const [gallery, setGallery] = useState<any>([]);

    const base_url = import.meta.env.VITE_BASE_URL;

    const fetchServices = async () => {
        const res = await fetch(`${base_url}/admin/homepage`);
        const data = await res.json()
        setData(data);
        setLoading(false);
        setH1(data[0].h1);
        setH2(data[0].h2);
        setH3(data[0].h3);
        setP(data[0].p);
        setImage1(data[0].image1);
        setImage2(data[0].image2);

        
    }

    const fetchGallery = async () => {
        const res = await fetch(`${base_url}/admin/nails`);
        const data = await res.json()
        const gallery = data.filter((service: { type: string; }) => service.type === "Gallery");
        setGallery(gallery);
    }

    useEffect(() => {
        fetchServices();
        fetchGallery();
    }
    , []);

    return (
        <Body navbar={true} >
            <>
                <div>
                    <img src="..\src\image\avatar.jpg" width="100%" height="100%"/>
                    <div>
                        <h1 style={{textAlign:"center"}}>{h1}</h1>
                    </div>
                <h2 style={{textAlign:"center"}}>{h2}</h2>
                <p>{p}</p>

                <hr />

                </div>
                <h3>Our Gallery</h3>
                <div  className="gallery">
                    {gallery.map((gallery: {_id:any; image:any}) => {
                        return (
                            <div key={gallery._id} className="gallery-image">
                                <img src={gallery.image}  style={img1}/>
                            </div>
                        )
                    }
                    )}
                </div>
                <br /><hr />
                <h3>{h3}</h3>

                <img src={image1}  width="100%" height="100%"/>
                    <br /><hr /><br />
            </>
            
        </Body>
    );

}


const img1= {
    width: '230px',
    height: '230px',
    borderRadius: '10px',
    transition: 'all 0.3s ease-out',
    cursor: 'pointer',
    marginLeft: '1rem',

}


