

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function AddManicure() {
    
    const base_url = import.meta.env.VITE_BASE_URL 
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const type = "Manicure"
    const navigate = useNavigate();


    async function addService(e: { preventDefault: () => void; }) {
        e.preventDefault();

        const addServiceData = {
          
            name,
            price,
            description,
            image,
            type
        };

        try {            
            await axios.post(`${base_url}/admin/createnail`, addServiceData);
            if (addServiceData) {
                alert("Add service success");
                navigate("/admin/manicures");
            }            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="page">
            <h1>Add Manicure</h1>
            <form onSubmit={addService}>
                <label htmlFor="addservice-name">Name:</label>
                <input
                    type="text"
                    id="addservice-name"
                    placeholder="Enter service name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <br /><br />

                <label htmlFor="addservice-price">Price:</label>
                <input
                    type="text"
                    id="addservice-price"
                    placeholder="Enter service price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />

                <br /><br />
                <label htmlFor="addservice-instruction">Instruction:</label>
                <input
                    style={{width: "100%", height: "100px"}}
                    type="text"
                    id="addservice-instruction"
                    placeholder="Enter service instruction"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <br /><br />
                <label htmlFor="addservice-image">Image:</label>
                <input
                    type="text"
                    id="addservice-image"
                    placeholder="Enter service image"
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
    