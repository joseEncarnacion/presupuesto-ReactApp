import React from 'react'
import Gasto from './Gasto'
import PropsType from 'prop-types'

const Listado = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>

      {gastos.map((gasto) => (
        <Gasto 
            key={gasto.id} 
            gasto={gasto} 
        />
      ))}
    </div>
  );
};

Listado.prototype = {
  gastos: PropsType.array.isRequired
}
 
export default Listado;