
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function UpdateDrink() {
    
    const base_url = import.meta.env.VITE_BASE_URL 
    const navigate = useNavigate();
    
    async function handleSubmitForm(e:React.FormEvent<HTMLFormElement>) {
        
        e.preventDefault();
        const _id = localStorage.getItem('stuff_id');      
        const nameField = e.currentTarget.querySelector('#updatedrink-name') as HTMLInputElement;
        const instructionField = e.currentTarget.querySelector('#updatedrink-instruction') as HTMLInputElement;
        const ingredientsField = e.currentTarget.querySelector('#updatedrink-ingredients') as HTMLInputElement;
        const imageField = e.currentTarget.querySelector('#updatedrink-image') as HTMLInputElement;
        const name = nameField.value;
        const instruction = instructionField.value;
        const ingredients = ingredientsField.value;
        const image = imageField.value;
        const updateData = {
            "id": _id?.split('"').join(''),
            "name": name,
            "instruction": instruction,
            "ingredients": ingredients,
            "image": image
        }
        const res = await axios.put(`${base_url}/admin/updatedrink`, updateData);

        if (res.data) {
            alert("Update success");
            navigate('/admin/drinks');
        }
        
    }

    return (
        <div className="page">
            <h1>Update Drink</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="updatedrink-name" >Name:</label>
                <input
                    type="text"
                    id="updatedrink-name"
                    placeholder="Enter drink name"
                />
                <br /><br />
                <label htmlFor="updatedrink-instruction">Instruction:</label>
                <input
                    style={{width: "100%", height: "100px"}}

                    type="text"
                    id="updatedrink-instruction"
                    placeholder="Enter drink instruction"
                />
                <br /><br />
                <label htmlFor="updatedrink-ingredients">Ingredients:</label>
                <input
                    type="text"
                    id="updatedrink-ingredients"
                    placeholder="Enter drink ingredients"
                />
                <br /><br />
                <label htmlFor="updatedrink-image">Image:</label>
                <input
                    type="text"
                    id="updatedrink-image"
                    placeholder="Link image"
                />
                <br /><br />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

    