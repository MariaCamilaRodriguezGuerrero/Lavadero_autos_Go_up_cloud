import style from "./Dashboard.module.css";
import LineChart from "../../components/Chart/LineChart";
import { data1 } from "../../components/Chart/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: data1.map((data) => data.time),
    datasets: [
      {
        label: "Vehículos",
        data: data1.map((data) => data.green),
        backgroundColor: "#49C91C",
        borderColor: "#49C91C",
        borderWidth: 3,
      },
      {
        label: "Facturación",
        data: data1.map((data) => data.blue),
        backgroundColor: "#54B7FF",
        borderColor: "#54B7FF",
        borderWidth: 3,
      },
      {
        label: "Recaudado",
        data: data1.map((data) => data.red),
        backgroundColor: "#FBA703",
        borderColor: "#FBA703",
        borderWidth: 3,
      },
    ],
    animations: {
      radius: {
        duration: 400,
        easing: "linear",
        loop: (context) => context.active,
      },
    },
  });

  return (
    <div className={style.backgroundContainer}>
      <div className={style.mainContainer}>
        <h1 className={style.title}>Resumen</h1>
        <div className={style.chart}>
          <LineChart chartData={userData} />
        </div>
      </div>
      <div className={style.listsDiv}>
        <h2 className={style.titleLists}>Listas</h2>
        <div className={style.linkDiv}>
          <Link to="/workers">Trabajadores</Link>
          <Link to="/billinglist">Facturación</Link>
          <Link to="/withdrawals">Retiros</Link>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
