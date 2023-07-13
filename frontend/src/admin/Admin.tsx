
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";


export default function Admin() {

    const navigate = useNavigate();
    const isAdmin = localStorage.getItem("isAdmin");

    useEffect (() => {
        if (isAdmin !== "true") {
            navigate("/login");
        }
    }, [isAdmin]);


    return (
        <Body navbar={true} >
            <div style={styles}>
                <center><h1>Admin</h1></center>
                <button style={button} onClick={()=>{navigate("/admin/pedicures")}}>Pedicures</button> <br />
                <button style={button} onClick={()=>{navigate("/admin/nails")}}>Nails</button><br />
                <button style={button} onClick={()=>{navigate("/admin/manicures")}}>Manicures</button><br />
                <button style={button} onClick={()=>{navigate("/admin/waxing")}}>Waxing</button><br />
                <button style={button} onClick={()=>{navigate("/admin/drinks")}}>Drinks</button><br />
                <button style={button} onClick={()=>{navigate("/admin/gallery")}}>Gallery</button><br />
                <button style={button} onClick={()=>{navigate("/admin/updatehomepage")} }>Homepage</button><br />
                <button style={button} onClick={()=>{navigate("/admin/deliverytext")}}>Delivery Email</button><br />         
            </div>
            <br /><br />
        </Body>
    );
}


const styles = {
    display: "flex",
    flexDirection: "column",
    width: "100%",       
}

const button = {
    marginTop: "15px",    
}