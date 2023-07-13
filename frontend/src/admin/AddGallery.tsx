
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddGallery() {
    
    const base_url = import.meta.env.VITE_BASE_URL 
    const [image, setImage] = useState("");
    const type = "Gallery"
    const name = ''
    const price = ''
    const instruction = ''
    const navigate = useNavigate();


    async function addService(e: { preventDefault: () => void; }) {
        e.preventDefault();

        const addServiceData = {          
            name,
            price,
            instruction,
            image,
            type
        };

        try {            
            await axios.post(`${base_url}/admin/createnail`, addServiceData);
            if (addServiceData) {
                alert("Add success");
                navigate("/admin/Gallery");
            }            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="page">
            <h1>Add Picture To Gallery</h1>
            <form onSubmit={addService}>
                
                <label htmlFor="addservice-image">Image:</label>
                <input
                    type="text"
                    id="addservice-image"
                    placeholder="Enter Link Image"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                />
                <br /><br />
                <button type="submit">Add </button>
            </form>
        </div>
    );
}
//
    