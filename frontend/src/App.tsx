import { Container } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./client/Home";
import Login from "./client/Login";
import Logout from "./components/Logout";
import Services from "./client/Services";
import Nails from "./client/Nails";
import Manicures from "./client/Manicures";
import Pedicures from "./client/Pedicures";
import Waxing from "./client/Waxing";
import MakeOrder from "./client/MakeOrder";
import Drink from "./client/Drink";
import Admin from "./admin/Admin";
import UpdateService from "./admin/UpdateService";
import AddService from "./admin/AddService";
import AddNail from "./admin/AddNail";
import UpdateManicure from "./admin/UpdateManicure";
import AddManicure from "./admin/AddManicure";
import AddWaxing from "./admin/AddWaxing";
import UpdateWaxing from "./admin/UpdateWaxing";
import GetGallery from "./admin/GetGallery";
import AddGallery from "./admin/AddGallery";
import UpdateHomePage from "./admin/UpdateHomePage";
import DeliveryText from "./admin/DeliveryText";
import AddDrink from "./admin/AddDrink";
import GetDrinks from "./admin/GetDrinks";
import UpdateDrink from "./admin/UpdateDrink";
import GetNails from "./admin/GetNails";
import GetPedicures from "./admin/GetPedicures";
import UpdateNail from "./admin/UpdateNail";
import GetWaxing from "./admin/GetWaxing";
import { GetManicures } from "./admin/GetManicures";


function App() {
  return (   
    <Container className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/services" element={<Services />} />
          <Route path="/nails" element={<Nails />} />
          <Route path="/manicures" element={<Manicures />} />
          <Route path="/pedicures" element={<Pedicures />} />
          <Route path="/waxing" element={<Waxing />} />
          <Route path="/drinks" element={<Drink />} />
          <Route path="/makeorder" element={<MakeOrder />} /> 
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/pedicures" element={<GetPedicures />} />
          <Route path="/admin/updatepedicure" element={<UpdateService />} />
          <Route path="/admin/addpedicure" element={<AddService />} /> 
          <Route path="/admin/drinks" element={<GetDrinks/>} />
          <Route path="/admin/updatedrink" element={<UpdateDrink />} />
          <Route path="/admin/adddrink" element={<AddDrink />} /> 
          <Route path="/admin/deliverytext" element={<DeliveryText />} /> 
          <Route path="/admin/nails" element={<GetNails />} />
          <Route path="/admin/addnail" element={<AddNail />} /> 
          <Route path="/admin/updatenail" element={<UpdateNail />} />
          <Route path="/admin/manicures" element={<GetManicures />} />
          <Route path="/admin/addmanicure" element={<AddManicure />} />
          <Route path="/admin/updatemanicure" element={<UpdateManicure />} />
          <Route path="/admin/waxing" element={<GetWaxing />} />
          <Route path="/admin/addwaxing" element={<AddWaxing />} />
          <Route path="/admin/updatewaxing" element={<UpdateWaxing />} />
          <Route path="/admin/gallery" element={<GetGallery />} />
          <Route path="/admin/addgallery" element={<AddGallery />} />
          <Route path="/admin/updatehomepage" element={<UpdateHomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App
