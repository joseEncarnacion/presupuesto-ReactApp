import React, { Fragment } from 'react'
import {revisarPresupuesto} from '../helpers/Helpers'
import PropsType from "prop-types";

const CtrlPresupuesto = ({ presupuesto, restanate }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">presupuesto: $ {presupuesto}</div>

      <div className={revisarPresupuesto(presupuesto, restanate)}>
          Restante: $ {restanate}
      
      </div>
    </Fragment>
  );
};


CtrlPresupuesto.prototype = {
  presupuesto: PropsType.number.isRequired,
  restanate: PropsType.number.isRequired
}
 
export default CtrlPresupuesto;