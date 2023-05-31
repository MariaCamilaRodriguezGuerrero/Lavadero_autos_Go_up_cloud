import style from "./Card.module.css";

const Card = ({ patenteParam, modelo, tipoServicios }) => {
  return (
    <div className={style.card}>
      <img
        className={style.billingImg}
        src="https://www.pngkit.com/png/full/139-1394535_png-file-svg-document-icon-svg.png"
      />
      <p className={style.pendiente}>PENDIENTE</p>
      <p className={style.text}>
        {modelo} | {patenteParam} | {tipoServicios} | $$$
      </p>
      <img
        className={style.editImg}
        src="https://www.svgrepo.com/show/73131/edit-button.svg"
      />
    </div>
  );
};

export default Card;
