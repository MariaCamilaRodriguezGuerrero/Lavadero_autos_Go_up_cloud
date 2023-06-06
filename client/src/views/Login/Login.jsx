import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/home`);
  };

  return (
    <div className={style.mainDiv}>
      <h1 className={style.title}>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>Usuario</label>
        <input type="text"></input>
        <label>Contraseña</label>
        <input type="password"></input>
        <button type="submit" className={style.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Login;
