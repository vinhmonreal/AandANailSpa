
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function UpdateManicure() {
    
    const base_url = import.meta.env.VITE_BASE_URL 
    const navigate = useNavigate();
  
    async function handleSubmitForm(e:React.FormEvent<HTMLFormElement>) {
        
        e.preventDefault();
        const _id = localStorage.getItem('stuff_id');      
        const name = (document.getElementById('updateservice-name') as HTMLInputElement).value;
        const price = (document.getElementById('updateservice-price') as HTMLInputElement).value;
        const instruction = (document.getElementById('updateservice-instruction') as HTMLInputElement).value;
        const image = ''
        const type = "Manicure"
        console.log(_id);
        const updateData = {
            "id": _id?.split('"').join(''),
            "name": name,
            "price": price,
            "description": instruction,
            "image": image,
            "type": type
        }
        const res = await axios.put(`${base_url}/admin/updatenail`, updateData);
        if (res.data) {
            alert("Update success");
            navigate('/admin/manicures');
        }
    }
      

    return (
        <div className="page">
            <h1>Update Manicure</h1>
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
                <label htmlFor="updateservice-instruction">Description:</label>
                <input

                    type="text"
                    id="updateservice-instruction"
                    placeholder="Enter service instruction"
                />      
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
