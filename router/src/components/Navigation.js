import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../App.css";
import ModalLogin from "./ModalLogin";

const Navigation = (props) => {
  let activeStyle = "linkActivo";
  const { setUsuario, usuariLogeado } = props;

  function logOut(){
      setUsuario({});
  }

  function logIn(){

}

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{usuariLogeado.nombre}</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>{" "}
          |
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </Nav>
        {typeof usuariLogeado.nombre != 'undefined' ? 
            <Button
            onClick={logOut}> 
            Logout
          </Button>
        :  <ModalLogin setUsuario={setUsuario} /> }

        <p>{usuariLogeado.nombre}</p>
      </Container>
    </Navbar>
  );
};

export default Navigation;
