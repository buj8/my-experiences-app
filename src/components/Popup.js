import React, { useState } from 'react';

import Perfil from './Perfil'
import Login from './Login'

function Popup(props) {

    switch (props.caso) {
        case "perfil":
            return <Perfil />;
        case "login":
            return <Login />;
        // case "registro":
        //     return <Registro />;
        // case "login":
        //     return <Login />;
        // case "login":
        //     return <Login />;
        default:
            break;
    }
    return <div />
}


export default Popup;