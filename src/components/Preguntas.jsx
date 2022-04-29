import React, { Fragment } from 'react'
import {useState} from 'react'
import Error from './Error'
import PropsType from "prop-types";


const Preguntas = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta
}) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseFloat(e.target.value));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    

    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // guardar validacion
    setError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="text"
          className="form-control my-4"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

       

        <div className="d-grid gap-2">
          <button className="btn btn-primary " type="submit ">
            Definir presupuesto"
          </button>
        </div>
      </form>
    </Fragment>
  );
};


Preguntas.prototype = {
  guardarPresupuesto: PropsType.func.isRequired ,
  guardarRestante: PropsType.func.isRequired,
  actualizarPregunta: PropsType.func.isRequired
};
 
export default Preguntas;