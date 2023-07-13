
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const base_url = import.meta.env.VITE_BASE_URL 

export default function AddService() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [instruction, setInstruction] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    async function addService(e: { preventDefault: () => void; }) {
        e.preventDefault();

        const addServiceData = {          
            name,
            price,
            instruction,
            image
        };

        try {            
            await axios.post(`${base_url}/admin/createservice`, addServiceData);
            if (addServiceData) {
                alert("Add service success");
                navigate("/admin/pedicures");
            }            
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="page">
            <center><h1>Add Pedicure</h1></center>
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
                    onChange={(e) => setInstruction(e.target.value)}
                    value={instruction}
                />
                <br /><br />
                <label htmlFor="addservice-image">Image:</label>
                <input
                    type="text"
                    id="addservice-image"
                    placeholder="Link image"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                />
                <br /><br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

    