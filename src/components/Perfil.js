import React from 'react';

import GetCurrentUser from '../data/currentUser'


function Perfil() {

    var currentUser = GetCurrentUser();

    console.log(currentUser);
    return <div id="popup">
        <div id="datosPerfil">
            <h1>Tu perfil</h1>
            <img src={currentUser.picture} />
            <ul>
                <li><b>Nombre: </b>{currentUser.name} {currentUser.surname}</li>
                <li><b>Usuario: </b>{currentUser.username}</li>
                <li><b>Email: </b>{currentUser.email}</li>
                <li><b>Fecha de nacimiento: </b>{currentUser.bdate.toLocaleDateString()}</li>
                <li><b>Interés:</b> {currentUser.interest}</li>
            </ul>
        </div>
    </div>
}


export default Perfil;