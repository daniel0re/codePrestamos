import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje'
import Resultado from './componentes/Resultado'
import Spinner from './componentes/Spinner'
import Error from './componentes/Error'
// import './App.css';

function App() {

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState(0);
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);
  const [error, guardarError] = useState(false);
  let componente;
  
  if(error) {
    componente = <Error />
  } else if (cargando) {
    componente = <Spinner />
  } else if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}
    />
  }

  return (
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
        description="Utiliza un formulario y obten una informacion"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
          guardarError={guardarError}

        />
        <div className="mensajes">
          {componente}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
