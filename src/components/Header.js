import React from 'react';

import GetCurrentUser from '../data/currentUser'

function Header() {

    var navbarRight = <ul id="navbar-right" className="navbar">
        <li><a href="#">Iniciar sesión</a></li>
        <li><a href="#">Registro</a></li>
    </ul>;

    if (localStorage.getItem("currentUser")) {
        var currentUser = GetCurrentUser();
        navbarRight = <button id="botonHeader">
            <img id="fotoHeader" src={currentUser.picture} />
            <div id="userHeader">@{currentUser.username} ⮟</div>
        </button>


    }

    return <nav className="header">
        <img className="navbar-logo" href="#" src="./images/web_logo.png"></img>
        <a id="navbar-x" href="#">x</a>
        <a href="#">Inicio</a>
        <a href="#">Sobre nosotros</a>
        <a href="#">Contacto</a>
        {navbarRight}
    </nav>
}


export default Header;