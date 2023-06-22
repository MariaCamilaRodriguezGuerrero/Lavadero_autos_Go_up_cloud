import style from "./EditServices.module.css";
import FormEditServices from "../../componentsSuperAdmin/FormEditServices/FormEditServices";
import { Link } from "react-router-dom";

const EditServices = () => {
  return (
    <div>
      <Link to={"/su/services"}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""
        />
      </Link>
      <FormEditServices />
    </div>
  )

};
export default EditServices;