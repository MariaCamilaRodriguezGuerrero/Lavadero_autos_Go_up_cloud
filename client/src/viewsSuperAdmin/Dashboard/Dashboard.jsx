import style from "./Dashboard.module.css";
import Chart from "../../componentsSuperAdmin/Chart/Chart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postPayroll,
  getPayrollsChart,
  getTotalInvoiced,
} from "../../redux/actions/actions";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
const Dashboard = () => {
  const dispatch = useDispatch();
  registerLocale("es", es);
  const { payrolls, totalInvoiced } = useSelector((state) => state);
  const [payrollsShow, setPayrollsShow] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    dispatch(postPayroll());
    dispatch(getPayrollsChart(startDate, endDate || startDate));
    dispatch(getTotalInvoiced());
  }, [dispatch]);

  useEffect(() => {
    setPayrollsShow({});
    dispatch(getPayrollsChart(startDate, endDate || startDate));
  }, [startDate, endDate]);

  useEffect(() => {
    Object.keys(payrolls).length &&
      setPayrollsShow({
        labels: Object.keys(payrolls),
        datasets: [
          {
            label: "Meta",
            data: Object.keys(payrolls).map((worker) => payrolls[worker].goal),
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
            data: Object.keys(payrolls).map(
              (worker) => payrolls[worker].profit
            ),
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

  const datesChangeHandler = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className={style.backgroundContainer}>
      <div className={style.mainContainer}>
        <h1 className={style.title}>Resumen</h1>
        <label className={style.label}>Seleccione una fecha o fechas</label>
        <DatePicker
          selected={startDate}
          onChange={datesChangeHandler}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat="dd/MM/yyyy"
          todayButton="Hoy"
          className={style.datePicker}
          locale="es"
        />
        <div className={style.chart}>
          {(!!Object.keys(payrollsShow).length && (
            <Chart chartData={payrollsShow} />
          )) || <p className={style.label}>Sin registros</p>}
        </div>
        <p className={style.subheading}>
          Total Facturado del Mes: ${totalInvoiced}
        </p>
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

