import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import GetCurrentUser from '../data/currentUser'

function Header() {

    var navbarRight = <ul id="navbar-right" className="navbar">
        <li><a href="#">Iniciar sesión</a></li>
        <li><a href="#">Registro</a></li>
    </ul >;

    if (localStorage.getItem("currentUser")) {
        var currentUser = GetCurrentUser();
        navbarRight = <button id="botonHeader">
            <img id="fotoHeader" src={currentUser.picture} />
            <div id="userHeader"></div>
        </button>


    }

    return <>
        <Navbar collapseOnSelect id="header" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img className="navbar-logo" src="images/web_logo.png" alt="Logo_web"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Inicio</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title={"@" + currentUser.username} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#">Experiencias</NavDropdown.Item>
                            <NavDropdown.Item href="#">Ránking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Mensajes</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>


}


function choosePopup(popupName) {
    localStorage.setItem("casoPopup", popupName);
}

export default Header;