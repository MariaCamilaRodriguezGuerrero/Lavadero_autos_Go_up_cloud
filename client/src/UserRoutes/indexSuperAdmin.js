import "./index.css";
import { useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Dashboard from "../viewsSuperAdmin/Dashboard/Dashboard";
import Cookies from "universal-cookie";
import NavSuperAdmin from "../componentsSuperAdmin/NavSuperAdmin/NavSuperAdmin";
import BillingListSuperAdmin from "../viewsSuperAdmin/BillingListSuperAdmin/BillingList";
import WorkersRegistration from "../viewsSuperAdmin/workersregistration/Workersregistration";
import ServicesRegistration from "../viewsSuperAdmin/ServicesRegistration/ServicesRegistration";
import CanceledServices from "../viewsSuperAdmin/CanceledServices/CanceledServices"



function SuperAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const cookies = new Cookies();

  useEffect(() => {
    let userAccess = cookies.get("userAccess");
    if (!userAccess || userAccess.type !== "superadmin" || !userAccess.access)
      navigate("/");
  }, [cookies]);

  return (
    <div className="index">
      <NavSuperAdmin />
      <Routes location={background || location}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/billingListSuperAdmin" element={<BillingListSuperAdmin />} />
        <Route path="/workersregistration" element={<WorkersRegistration />} />
        <Route path="/servicesRegistration" element={<ServicesRegistration />} />
        <Route path="/canceledServices" element={<CanceledServices />} />
      </Routes>
    </div>  
  );
}

export default SuperAdmin;
