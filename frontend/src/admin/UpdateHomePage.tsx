
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";


export default function UpdateHomePage() {

    const base_url = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();
    const handleSubmit = async () => {
        const res = await fetch(`${base_url}/admin/updatehomepage`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id:'64a9bde80a0ea3d878b563ba',
                h1: (document.getElementById("h1") as HTMLInputElement).value,
                h2: (document.getElementById("h2") as HTMLInputElement).value,
                h3: (document.getElementById("h3") as HTMLInputElement).value,
                p: (document.getElementById("p") as HTMLInputElement).value,
                image1: (document.getElementById("banner1") as HTMLInputElement).value,
                image2: (document.getElementById("banner2") as HTMLInputElement).value,

        })
        })
        if (res.status === 200) {
            navigate("/");
        }
        else {
            alert("Update failed");
        }
    }


    return (
        <Body navbar={true} >
        <div>
            <h1>Update Home Page</h1>
            <label htmlFor="h1" >H1</label>
            <br />
            <input style={{width: "100%", height: "100px"}} type="text" name="h1" id="h1" placeholder="Enter Header h1 Text Here" />
            <br />
            <label htmlFor="h2">H2</label>
            <br />
            <input style={{width: "100%", height: "100px"}} type="text" name="h2" id="h2" placeholder="Enter Header h2 Text Here" />
            <br />
            <label htmlFor="h3">H3</label>
            <br />
            <input style={{width: "100%", height: "100px"}} type="text" name="h3" id="h3" placeholder="Enter Header h3 Text Here" />
            <br />
            <label htmlFor="p">P</label>
            <br />
            <input style={{width: "100%", height: "100px"}} type="text" name="p" id="p" placeholder="Enter Header p Text Here" />
            <br />
            <label htmlFor="banner2">Hinh Tren</label>
            <br />
            <input style={{width: "100%", height: "100px"}} type="text" name="banner2" id="banner2" placeholder="Link Image1" />
            <br />
            <label htmlFor="banner1">Hinh Duoi</label>
            <br />
            <input style={{width: "100%", height: "100px"}} type="text" name="banner1" id="banner1" placeholder="Link Image1" />
            <br />
            <button type="submit" onClick={handleSubmit}>Update</button>
        </div>
        </Body>
    )
}

