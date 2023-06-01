import style from "./Card.module.css";

const Card = ({ cliente,
    tipoVehiculo,
    patenteParam,
    modelo,
    nombreTrabajador,
    tipoServicios,
    index }) => {
  return (
    <div className={style.card}>
      <img
        className={style.billingImg}
        src="https://www.pngkit.com/png/full/139-1394535_png-file-svg-document-icon-svg.png"
        alt=""/>
      <p className={style.pendiente}>PENDIENTE</p>
      <p className={style.text}>
        <span className={style.spanData}>{tipoVehiculo}</span>
        <span className={style.spanData}>{modelo}</span>
        <span className={style.spanData}>{patenteParam}</span>
        <span className={style.spanData}>{cliente}</span>
        <span className={style.spanData}>{nombreTrabajador}</span>
        <span className={style.spanData}>{tipoServicios}</span>
        <span className={style.spanData2}>$$$</span>
      </p>
      <img
        className={style.editImg}
        src="https://www.svgrepo.com/show/73131/edit-button.svg"
        alt=""/>
    </div>
  );
};

export default Card;
