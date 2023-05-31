import "./App.css";
import { Route, Routes } from "react-router-dom";
import CreateVehicle from "./views/CreateVehicle/CreateVehicle";
import HomePage from "./views/Home/Home";
import Services from "./views/Services/Services";
import FormVehicle from "./components/FormVehicle/FormVehicle";

function App() {

  return (
    <div className="App">
      <Routes >
        <Route path="/home" element={<HomePage />} />
        <Route path="/createVehicle" element={<CreateVehicle />} />
        <Route path="/formVehicle/:patenteParam" element={<FormVehicle />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      
    </div>
  );
}

export default App;
