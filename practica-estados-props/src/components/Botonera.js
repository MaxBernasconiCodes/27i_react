import React from "react";
import { ButtonGroup, Button} from "react-bootstrap";

const Botonera = (props) => {
  const { min, max, cuenta, setCuenta, renderizarCards } = props;

  function add() {
    cuenta + 1 <= max
      ? setCuenta(cuenta + 1)
      : console.debug("Error pasando de maximo");
    renderizarCards();
  }
  function subtract() {
    cuenta - 1 >= min
      ? setCuenta(cuenta - 1)
      : console.debug("Error pasando de minimo");
    renderizarCards();
  }

  return (
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={subtract}>-</Button>
        <Button variant="secondary" onClick={add}>+</Button>
      </ButtonGroup>
  );
};

export default Botonera;
