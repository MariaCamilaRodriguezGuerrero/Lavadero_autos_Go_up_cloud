import { Link } from "react-router-dom";
import FormPatente from "../../components/FormPatente/FormPatente";
import style from "./CreateVehicle.module.css";

const CreateVehicle = () => {
  return (
    <div className={style.mainDiv}>
      <Link to={"/home"}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
        />
      </Link>
      <div className={style.formDiv}>
        <FormPatente />
      </div>
    </div>
  );
};

export default CreateVehicle;
