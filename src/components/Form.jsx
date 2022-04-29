import React from 'react'
import {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropsType from "prop-types";

const Form = ({ setGasto, setCrearGasto }) => {
  const [cantidad, setCantidad] = useState(0);
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(false);

  const agregarGastos = (e) => {
    e.preventDefault();

    // validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }

    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    // pasar el gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true)

    // resetear el form
    setCantidad(0);
    setNombre("");
  };

  return (
    <form onSubmit={agregarGastos}>
      <h2>Agrega tus Gastos aqui</h2>

      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

      <div className="campo">
        <label>Gastos mensuales</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad mensual</label>
        <input
          type="number"
          className="form-control"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseFloat(e.target.value))}
        />
      </div>

      <div className='d-grid gap-2"'>
        <button type="submit" className="btn btn-primary ">
          Agregar Gastos
        </button>
      </div>
    </form>
  );
};

Form.prototype = {
  setGasto: PropsType.func.isRequired,
  setCrearGasto: PropsType.func.isRequired
}
 
export default Form;