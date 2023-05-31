
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
      <div >
        <Link to="/CreateVehicle">
            <button>
                Ingresar Vehiculo
            </button>
        </Link>
        <Link to="/services">
            <button>
                Servicios En Curso
            </button>
        </Link>
      </div>
    );
  }; 

export default HomePage;