import style from "./Dashboard.module.css";
import Chart from "../../components/Chart/Chart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPayroll, getPayrolls } from "../../redux/actions/actions";
import { useEffect } from "react";
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postPayroll());
    setTimeout(() => {
      dispatch(getPayrolls());
    }, 100);
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
            borderColor: "red",
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
          {!!Object.keys(payrollsShow).length && (
            <Chart chartData={payrollsShow} />
          )}
        </div>
      </div>

      {/* <div className={style.listsDiv}>
        <h2 className={style.titleLists}>Listas</h2>
        <div className={style.linkDiv}>
          <Link to="/workers">Trabajadores</Link>
          <Link to="/billinglist">Facturación</Link>
          <Link to="/withdrawals">Retiros</Link>
        </div>
      </div> */}
    </div>
  );
};
export default Dashboard;
