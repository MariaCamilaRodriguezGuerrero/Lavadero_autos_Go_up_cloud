import "./index.css";
import { useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Dashboard from "../viewsSuperAdmin/Dashboard/Dashboard";
import Cookies from "universal-cookie";
import NavSuperAdmin from "../componentsSuperAdmin/NavSuperAdmin/NavSuperAdmin";
import BillingListSuperAdmin from "../viewsSuperAdmin/BillingListSuperAdmin/BillingList";
import WorkersRegistration from "../viewsSuperAdmin/workersregistration/Workersregistration";
import ServicesRegistration from "../viewsSuperAdmin/ServicesRegistration/ServicesRegistration";
import CanceledServices from "../viewsSuperAdmin/CanceledServices/CanceledServices";
import FormWorkers from "../componentsSuperAdmin/FormWorkersRegistration/FormWorkersRegistration";
import Services from "../viewsSuperAdmin/Services/Services";
import EditServices from "../viewsSuperAdmin/EditServices/EditServices";
import CardWorkersPay from "../componentsSuperAdmin/CardWorkersPay/CardWorkersPay";

function SuperAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const cookies = new Cookies();

  useEffect(() => {
    let userAccess = cookies.get("userAccess");
    if (!userAccess || userAccess.type !== "superadmin" || !userAccess.access)
      navigate("/");
  }, [cookies, navigate]);

  return (
    <div className="index">
      <NavSuperAdmin />
      <Routes location={background || location}>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/billingListSuperAdmin"
          element={<BillingListSuperAdmin />}
        />
        <Route path="/workersregistration" element={<WorkersRegistration />} />
        <Route path="/formRegistration" element={<FormWorkers />} />
        <Route
          path="/servicesRegistration"
          element={<ServicesRegistration />}
        />
        <Route path="/canceledServices" element={<CanceledServices />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/servicesRegistration"
          element={<ServicesRegistration />}
        />
        <Route path="/services/editServices" element={<EditServices />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/workersregistration/payment"
            element={<CardWorkersPay />}
          />
        </Routes>
      )}
    </div>
  );
}

export default SuperAdmin;
