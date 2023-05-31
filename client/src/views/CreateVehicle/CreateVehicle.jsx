import { Link } from "react-router-dom";
import FormPatente from "../../components/FormPatente/FromPatente";

const CreateVehicle = () => {
    return (
      <div>
      <Link to={"/home"}>
      <button>atrás</button>
      </Link> 
      <FormPatente/>
      </div>
    );
  }; 

export default CreateVehicle;