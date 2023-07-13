import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";

export default function DeliveryText(){

    const base_url = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();
    const [numbers, setNumbers] = useState([]);    
    const [provider, setProvider] = useState("");
    const [deliveryText, setDeliveryText] = useState("");
    const [user, setUser] = useState("");   

    async function addDeliveryText(e: { preventDefault: () => void; }) {
        e.preventDefault();

        const res = await fetch (`${base_url}/admin/deliverytext`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                deliveryText: deliveryText,
                provider: provider,
                userName: user
            })
        })

        if (res.status === 200) {
            alert("Add delivery text success");
            navigate("/admin/deliverytext");
            window.location.reload();
        }
        else {
            alert("Add delivery text failed");
        }
    }

    const fetchNumbers = async () => {
        const res = await fetch (`${base_url}/admin/managetexts`)
        const data = await res.json();
        return data;
    }

    useEffect(() => {
        fetchNumbers()
        .then((data) => {
            setNumbers(data);
        }
        )

    }, []);

    async function handleRemove(id:string) {
        // create a promt to confirm the delete
        if (window.confirm('Are you sure you want to delete this delivery text?')) {
            const res = await fetch (`${base_url}/admin/deletetextuser`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id})
            })

            if (res.status === 200) {
                const newNumbers = numbers.filter((number: any) => number._id !== id);
                setNumbers(newNumbers);
            }
        } else {
            alert("Delete delivery text failed");
        }
    }

    return (
        <Body navbar={true}>
            <div className="page">
                <h1>Emails on Service</h1>
                <hr />
                <p>user: aandanailbar2023@gmail.com</p>
                <p>pass: culebra2023</p>
                {numbers.map((number: any) => (
                    <div key={number._id} style={styles.card}>
                        <h3>{number.userName}</h3>
                        <p>{number.deliveryText}</p>
                        <button onClick={() => handleRemove(number._id)}>Remove</button>
                    </div>
                ))}
                <hr />
                <h1>Add Email</h1>
                
                <form onSubmit={addDeliveryText}>
                    
                    <label htmlFor="addservice-name">Email:</label>
                    <input
                        type="text"
                        id="addservice-name"
                        placeholder="Enter Email Address"
                        onChange={(e) => setDeliveryText(e.target.value)}
                        value={deliveryText}
                    />
                    <br /><br />
                

                    <button type="submit">Add</button>
                </form>
            </div>
        </Body>
    );
}


const styles = {
    card: {
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',        
    },
};