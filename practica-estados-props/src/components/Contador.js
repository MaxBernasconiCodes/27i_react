import { ButtonGroup, Button } from "react-bootstrap";
import React, { useState } from "react";
import Botonera from "../components/Botonera";
import Card from "./Card";

const Contador = (props) => {
  let { min, max } = props;

  function sumar() {
    setCuenta(cuenta + 1);
  }

  function restar() {
    cuenta -= 1;
  }

  const [cuenta, setCuenta] = useState(min);

  function renderizarCards() {
    let tarjetas = [];

    for (let i = 0; i < cuenta; i++) {
      tarjetas.push({ id: i });
    }
    return tarjetas;
  }
  return (
    <>
      <p>Contador : {cuenta}</p>
      <Button onClick={sumar}>Sumar</Button>
      <Button onClick={restar}>Restar</Button>
      <Botonera
        min={min}
        max={max}
        cuenta={cuenta}
        setCuenta={setCuenta}
        renderizarCards={renderizarCards}
      />
      {renderizarCards().map((tarjeta) => (
        <Card id={tarjeta.id} />
      ))}
    </>
  );
};

export default Contador;
