import { useState } from "react";
import { useNavigate } from "react-router-dom";


const FormPatente = () => {
    const navigate = useNavigate();
    const [patente, setPatente] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor o procesarlos localmente
        console.log({
          patente
        });
        navigate(`/formVehicle/${patente}`);
      };

    return ( <>
        <form onSubmit={handleSubmit}>
          <label>
            INGRESAR PATENTE DEL VEHÍCULO:
            <input type="text" value={patente} onChange={(e) => setPatente(e.target.value)} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </>
    );
};

export default FormPatente;


