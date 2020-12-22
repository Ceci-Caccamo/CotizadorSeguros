import React, { useState } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Resumen from "./componentes/Resumen";
import styles from "@emotion/styled";
import Resultado from "./componentes/Resultado";
import Spinner from "./componentes/Spinner";

const Contenedor = styles.div`
max-width:600px;
margin:0 auto
`;
const ContenedorFormulario = styles.div`
background-color:#FFF;
padding:3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, guardarCargando] = useState(false);

  //extraer Datos
  const { cotizacion, datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : <Resumen datos={datos} />}

        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
