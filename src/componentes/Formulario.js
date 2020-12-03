import React, {useState} from "react";
import styles from "@emotion/styled";

const Campo = styles.div`
display:flex;
margin-bottom:1rem;
align-items:center;
`;

const Label = styles.label`
flex:0 0 100px
`;
const Select = styles.select`
display:block;
width:100%;
padding:1rem;
border:1x solid #E1E1E1;
-webkit-appearance:none;
`;

const InputRadio = styles.input`
margin:0 1rem;
`;

const Boton = styles.button`
background-color:#00838F;
font-size:16px;
width:100%;
padding:1rem;
color:#FFF;
text-transform:uppercase;
font-weight:bold;
border:none;
transition:background-color .3s ease;
margin-top: 2rem;

&:hover{  
    background-color:#26C6DA;
    cursor:pointer
}
`;

const Formulario = () => {
  return (
    <form>
      <Campo>
        <Label>Marca</Label>
        <Select>
          <option value="">--Seleccione--</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio type="radio" name="plan" value="basico" />
        Basico
        <InputRadio type="radio" name="plan" value="completo" />
        Completo
      </Campo>
      <Boton type="button">Cotizar</Boton>
    </form>
  );
};

export default Formulario;
