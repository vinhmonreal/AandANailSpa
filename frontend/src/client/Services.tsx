import { useNavigate } from "react-router-dom";
import Body from "../components/Body";

export default function Services(){
    const navigate = useNavigate();
    return (
        <Body navbar={true}>
            <div style={style} className="page-content">
                <center><h1>Services</h1></center>
                <button onClick={()=>{navigate("/pedicures")}}>Pedicures</button>
                <button onClick={()=>{navigate("/manicures")}}>Manicures</button>
                <button onClick={()=>{navigate("/nails")}}>Nails</button>
                <button onClick={()=>{navigate("/waxing")}}>Waxing</button>
            </div>
        </Body>
    )
}

const style = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "960px",
    
}