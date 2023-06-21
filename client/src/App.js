import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import Admin from "./UserRoutes/indexAdmin";
import SuperAdmin from "./UserRoutes/indexSuperAdmin";
import axios from "axios";
axios.defaults.baseURL = "http://lavadero_autos_api.test/";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/ad/*" element={<Admin />} />
        <Route path="/su/*" element={<SuperAdmin />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;