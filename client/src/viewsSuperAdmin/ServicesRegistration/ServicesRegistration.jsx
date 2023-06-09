import style from "./ServicesRegistration.module.css";
import FormServices from "../../componentsSuperAdmin/FormServicesRegistration/FormServicesRegistration";
import { Link } from "react-router-dom";

const ServicesRegistration = () => {
  return (
    <div>
      <Link to={"/su/services"}>
        <img
          className={style.backBtn}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Back_Arrow.svg"
          alt=""
        />
      </Link>
      <FormServices />
    </div>
  )

};
export default ServicesRegistration;