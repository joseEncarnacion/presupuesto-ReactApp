import React from 'react'
import PropsType from "prop-types";


const Gasto = ({ gasto }) => {
  return (
    <li className="gastos">
      <p>
        {gasto.nombre}

        <span className="gasto">$ {gasto.cantidad}</span>
      </p>
    </li>
  );
};

Gasto.prototype = {
  gasto: PropsType.object.isRequired
}
 
export default Gasto;