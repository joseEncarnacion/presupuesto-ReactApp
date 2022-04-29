import React from 'react'
import PropsType from "prop-types";

const Error = ({mensaje}) => 
(
    <div>
        <p className='alert alert-danger error'> {mensaje} </p>
    </div>
);

Error.PropsType = {
    mensaje: PropsType.string.isRequired
}
 
export default Error;