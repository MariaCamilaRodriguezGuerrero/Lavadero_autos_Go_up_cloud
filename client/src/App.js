import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import CreateVehicle from "./views/CreateVehicle/CreateVehicle";
import HomePage from "./views/Home/Home";
import Services from "./views/Services/Services";
import FormVehicle from "./components/FormVehicle/FormVehicle";
import Billing from "./components/CardServices/Billing/Billing";
import Edit from "./components/CardServices/Edit/Edit";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div className="App">
        <Routes location={background || location}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/createVehicle" element={<CreateVehicle />} />
          <Route path="/formVehicle/:patenteParam" element={<FormVehicle />} />
          <Route path="/services" element={<Services />}>
            <Route path="/services/billing" element={<Billing />} />
            <Route path="/services/edit" element={<Edit />} />
          </Route>
        </Routes>
        {background && (
          <Routes>
            <Route path="/services/billing" element={<Billing />} />
            <Route path="/services/edit" element={<Edit />} />
          </Routes>
        )}
    </div>
  );
}

export default App;