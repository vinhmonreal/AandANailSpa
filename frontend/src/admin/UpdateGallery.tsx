
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function UpdateNail() {
    
    const base_url = import.meta.env.VITE_BASE_URL 
    const navigate = useNavigate();
  
    async function handleSubmitForm(e:React.FormEvent<HTMLFormElement>) {
        
        e.preventDefault();
        const _id = localStorage.getItem('stuff_id');      
        const nameField = e.currentTarget.querySelector('#updateservice-name') as HTMLInputElement;
        const priceField = e.currentTarget.querySelector('#updateservice-price') as HTMLInputElement;
        const instructionField = e.currentTarget.querySelector('#updateservice-instruction') as HTMLInputElement;
        const imageField = e.currentTarget.querySelector('#updateservice-image') as HTMLInputElement;
        const name = nameField.value;
        const price = priceField.value;
        const instruction = instructionField.value;
        const image = imageField.value;
        const updateData = {
            "id": _id?.split('"').join(''),
            "name": name,
            "price": price,
            "instruction": instruction,
            "image": image,

        }
        const res = await axios.put(`${base_url}/admin/updatenail`, updateData);
        if (res.data) {
            alert("Update success");
            navigate('/admin/nails');
        }
    }
      

    return (
        <div className="page">
            <h1>Update Gallery</h1>
            <p>Leave it blank if you like to keep the old value</p>

            <form onSubmit={handleSubmitForm}>
                <label htmlFor="updateservice-name" >Name:</label>
                <input
                    type="text"
                    id="updateservice-name"
                    placeholder="Enter service name"
                />
                <br /><br />
                <label htmlFor="updateservice-price">Price:</label>
                <input
                    type="text"
                    id="updateservice-price"
                    placeholder="Enter service price"
                />
                <br /><br />

                <label htmlFor="updateservice-instruction">Instruction:</label>
                <input
                    style={{width: "100%", height: "100px"}}
                    type="text"
                    id="updateservice-instruction"
                    placeholder="Enter service instruction"
                />
                <br /><br />
                <label htmlFor="updateservice-image">Image:</label>
                <input
                    type="text"
                    id="updateservice-image"
                    placeholder="Enter Link image"
                />
                <br /><br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
