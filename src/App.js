import React from 'react';
import {useState, useEffect} from 'react'
import Preguntas from './components/Preguntas'
import Form from './components/Form'
import Listado from './components/Listado';
import CtrlPresupuesto from './components/ControlPresupuesto';



// style bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";


function App() {

  // Declaracion de estados
  const [presupuesto, setPresupuesto] = useState(0)
  const [restanate, setRestanate] = useState(0)
  const [mostrarPregunta, setMostrarPregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [creargasto, setCrearGasto] = useState(false)

// Declaracion de UseEfect para actualizar el Restante
  useEffect(() => {
    if (creargasto) {
      setGastos([...gastos, gasto]);

      // resta del presupuesto
      const presupuestoRestante = restanate - gasto.cantidad;
      setRestanate(presupuestoRestante);

      // luego de la ejecucion de gastos
      setCrearGasto(false);
    }
  }, [gasto, gastos, creargasto, restanate]);
  

    // Agregar un nuevo gasto
   

  return (
    <div className="container">
      <header>
        <h1>Control de presupuesto</h1>

        <div className="contenido-principal contenido ">
          {/* Carga condicional de un componente */}
          {mostrarPregunta ? (
            <Preguntas
              guardarPresupuesto={setPresupuesto}
              guardarRestante={setRestanate}
              actualizarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="col-12 col-lg-6 px-5">
                {/* Form */}
                <Form 
                  setGasto={setGasto} 
                  setCrearGasto={setCrearGasto}
                 />
              </div>

              <div className="col-12 col-lg-6">
                <Listado gastos={gastos} />
                <CtrlPresupuesto
                  presupuesto={presupuesto}
                  restanate={restanate}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
