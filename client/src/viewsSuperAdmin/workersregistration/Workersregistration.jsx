
import CardWorkers from "../../componentsSuperAdmin/CardWorkers/CardWorkers";
import FormWorkers from "../../componentsSuperAdmin/FormWorkersRegistration/FormWorkersRegistration";
import style from "../BillingListSuperAdmin/BillingList.module.css";
const WorkersRegistration = () => { 
  return(
    <div className={style.mainDiv}>
      {/* <FormWorkers/> */}
      <CardWorkers/>
    </div>
  ) 
  
};
export default WorkersRegistration;
