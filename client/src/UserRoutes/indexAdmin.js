import "./index.css";
import { useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Services from "../views/Services/Services";
import Nav from "../components/Nav/Nav";
import FormPatente from "../components/FormPatent/FormPatent";
import Dashboard from "../views/Dashboard/Dashboard";
import BillingList from "../views/BillingList/BillingList";
import FormVehicle from "../components/FormVehicle/FormVehicle";
import FormService from "../components/FormService/FormService";
import Billing from "../components/CardServices/Billing/Billing";
import Edit from "../components/CardServices/Edit/Edit";
import Cookies from "universal-cookie";

function Admin() {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const cookies = new Cookies();

  useEffect(() => {
    let userAccess = cookies.get("userAccess");
    if (!userAccess || userAccess.type !== "admin" || !userAccess.access)
      navigate("/");
  }, [cookies]);

  return (
    <div className="index">
      <Nav />
      <Routes location={background || location}>
        <Route path="/" element={<Services />} />
        <Route path="/createVehicle" element={<FormPatente />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/billinglist" element={<BillingList />} />
        <Route path="/formVehicle" element={<FormVehicle />} />
        <Route path="/formService" element={<FormService />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/billing" element={<Billing />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      )}
    </div>
  );
}

export default Admin;
