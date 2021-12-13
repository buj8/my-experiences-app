import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import Popup from './Popup';

import GetCurrentUser from '../data/currentUser'

import { Modal } from 'react-bootstrap';

function Header() {

    const [popupState, setPopupState] = useState();
    const [show, setShow] = useState(false);




    function openPopup(caso) {
        setPopupState(caso);
        setShow(true);
    }

    var navbarRight = <>
        <Nav.Link href="#" onClick={() => openPopup("Login")}>Login</Nav.Link>
        <Nav.Link href="#" onClick={() => openPopup("Registro")}>Registro</Nav.Link>
    </>;


    if (localStorage.getItem("currentUser")) {
        var currentUser = GetCurrentUser();
        navbarRight = <NavDropdown title={"@" + currentUser.username} id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={() => openPopup("Perfil")} href="#">Perfil </NavDropdown.Item>
            <NavDropdown.Item onClick={() => openPopup("Colecciones")} href="#">Colecciones</NavDropdown.Item>
            <NavDropdown.Item onClick={() => openPopup("Ranking")} href="#">Ránking</NavDropdown.Item>
            <NavDropdown.Item onClick={() => openPopup("Crear nueva experiencia")} href="#">Añadir experiencia</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => openPopup("Cerrar sesión")} href="#">Cerrar sesión</NavDropdown.Item>
        </NavDropdown>
    }

    return <>
        <Navbar collapseOnSelect id="header" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#"><img className="navbar-logo" src="images/web_logo.png" alt="Logo_web"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Inicio </Nav.Link>
                        <Nav.Link href="#" onClick={() => openPopup("FAQ")}>FAQ</Nav.Link>
                        <Nav.Link href="#" onClick={() => openPopup("Contacto")}>Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        {navbarRight}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Modal
            size="xl"
            show={show}
            onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {popupState}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body><Popup caso={popupState} /></Modal.Body>
        </Modal>
    </>


}


export default Header;