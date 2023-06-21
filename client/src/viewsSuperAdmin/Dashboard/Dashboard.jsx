import style from "./Dashboard.module.css";
import Chart from "../../componentsSuperAdmin/Chart/Chart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPayroll, getPayrolls } from "../../redux/actions/actions";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postPayroll());
    dispatch(getPayrolls());
  }, [dispatch]);

  const { payrolls } = useSelector((state) => state);
  const [payrollsShow, setPayrollsShow] = useState({});

  useEffect(() => {
    payrolls.length &&
      setPayrollsShow({
        labels: payrolls.map((data) => data.workerName),
        datasets: [
          {
            label: "Meta",
            data: payrolls.map((data) => data.goal),
            barThickness: 60,
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: {
              top: 2,
              right: 0,
              bottom: 0,
              left: 0,
            },
            grouped: false,
          },
          {
            label: "Facturación",
            data: payrolls.map((data) => data.profit),
            barThickness: 60,
            backgroundColor: "#30b4c9",
            borderRadius: 10,
          },
        ],
        animations: {
          radius: {
            duration: 400,
            easing: "linear",
            loop: (context) => context.active,
          },
        },
        font: { size: 56 },
      });
  }, [payrolls]);

  return (
    <div className={style.backgroundContainer}>
      <div className={style.mainContainer}>
        <h1 className={style.title}>Resumen</h1>
        <div className={style.chart}>
          {Object.keys(payrollsShow).length && (
            <Chart chartData={payrollsShow} />
          )}
        </div>
      </div>
      <ToastContainer
        toastStyle={{
          backgroundColor: "rgb(38, 143, 255)",
          fontSize: "20px",
          color: "#fff",
        }}
      />
    </div>
  );
};
export default Dashboard;
