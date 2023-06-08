import React, { useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const username1 = "usuario1";
    const password1 = "contraseña1";

    const username2 = "usuario2";
    const password2 = "contraseña2";

    if ((username === username1 && password === password1) || (username === username2 && password === password2)) {
      navigate("/services");
    } else {
      setError("Nombre de usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={style.mainDiv}>
      <h1 className={style.title}>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>Usuario</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        {error && <p className={style.error}>{error}</p>}
        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className={style.error}>{error}</p>}
        <button type="submit" className={style.submit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Login;