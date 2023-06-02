import style from "./Card.module.css";

const Card = ({ cliente,
    tipoVehiculo,
    patenteParam,
    modelo,
    nombreTrabajador,
    tipoServicios
    }) => {
  return (
      <div className={style.card}>
        <img
          className={style.billingImg}
          src="https://www.pngkit.com/png/full/139-1394535_png-file-svg-document-icon-svg.png"
          alt=""/>
        <p className={style.pendiente}>PENDIENTE</p>
        <p className={style.text}>
          <span className={style.spanData2}>{tipoVehiculo}</span>
          <span className={style.spanData}>{modelo}</span>
          <span className={style.spanDataP}>{patenteParam}</span>
          <span className={style.spanData3}>{cliente}</span>
          <div className={style.divColumn}>{nombreTrabajador.map(e => <span>{e}</span>)}</div>
          <div className={style.divColumn}>{tipoServicios.map(e => <span>{e}</span>)}</div>
          <span className={style.spanData}>$$$</span>
          <span className={style.spanDataE}>
          <img
        className={style.editImg}
        src="https://www.svgrepo.com/show/73131/edit-button.svg"
        alt=""/>
        </span>
        </p>
        
      </div>
  );
};

export default Card;
