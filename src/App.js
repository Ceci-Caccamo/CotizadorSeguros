import React from "react";
import Header from "./componentes/Header";
import Formulario from './componentes/Formulario'

import styles from "@emotion/styled";

const Contenedor = styles.div`
max-width:600px;
margin:0 auto
`;
const ContenedorFormulario = styles.div`
background-color:#FFF;
padding:3rem;
`;

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario/>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
