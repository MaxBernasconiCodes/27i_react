import React from "react";
import { Card as Tarjeta, Button} from "react-bootstrap";

const Card = (props) => {
  return (
  <>
  <Tarjeta style={{ color:'black', width: '18rem' }}>
  <Tarjeta.Img variant="top" src="holder.js/100px180" />
  <Tarjeta.Body>
    <Tarjeta.Title>Tarjeta: {props.id + 1}</Tarjeta.Title>
    <Tarjeta.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Tarjeta.Text>
    <Button variant="primary">Go somewhere</Button>
  </Tarjeta.Body>
</Tarjeta>
  </>
  );
};

export default Card;
