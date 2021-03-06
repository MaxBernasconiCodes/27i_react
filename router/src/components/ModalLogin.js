import { useState } from "react";
import {Button, Modal, Form} from "react-bootstrap";
import { unstable_renderSubtreeIntoContainer } from "react-dom";


function ModalLogin(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const logIn = () => {
        if(true){
            props.setUsuario(
                {
                    nombre: 'Francisco',
                pass:'654',
                saludo: "Holangas",}
            )
        }
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={logIn}>
              Entrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalLogin;