
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function AddDrink() {
    
    const base_url = import.meta.env.VITE_BASE_URL 
    const [name, setName] = useState("");
    const [instruction, setInstruction] = useState("");
    const [image, setImage] = useState("");
    const [ingredient, setIngredient] = useState("");
    const navigate = useNavigate();

    async function handleSubmitForm(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const addData = {
            name,
            ingredient,
            instruction,
            image
        }
        const res = await axios.post(`${base_url}/admin/createdrink`, addData);
        if (res.data) {
            alert("Add success");
            navigate('/admin/drinks');
        }
    }

    return (
        <div className="page">
            <h1>Add Drink</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="addservice-name" >Name:</label>
                <input
                    type="text"
                    id="addservice-name"
                    placeholder="Enter service name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />
                <label htmlFor="addservice-ingredient">Ingredient:</label>
                <input
                    type="text"
                    id="addservice-ingredient"
                    placeholder="Enter service ingredient"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                />
                <br /><br />

                <label htmlFor="addservice-instruction">Instruction:</label>
                <input
                    style={{width: "100%", height: "100px"}}

                    type="text"
                    id="addservice-instruction"
                    placeholder="Enter service instruction"
                    value={instruction}
                    onChange={(e) => setInstruction(e.target.value)}
                />
                <br /><br />
                <label htmlFor="addservice-image">Image:</label>
                <input
                    type="text"
                    id="addservice-image"
                    placeholder="Enter service image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <br /><br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
