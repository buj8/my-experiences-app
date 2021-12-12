import React, { useState } from 'react';
import Header from './components/Header'
import Buscador from './components/Buscador'
import Footer from './components/Footer'
import Popup from './components/Popup';


import userList from './data/users.json';
import expList from './data/experiencias.json'
import Usuario from './logic/Usuario';
import Experiencia from './logic/Experiencia'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  function startApp() {
    localStorage.setItem("nUsers", "0");
    localStorage.setItem("nExp", "0");
    localStorage.setItem("currentUser", "U1");
    localStorage.setItem("started", "1");
    for (var i = 0; i < userList.length; i++) {
      var u = userList[i]
      new Usuario(u.username, u.pass, u.name, u.surname, u.email, u.bdate, u.interest, u.gender, u.picture).saveUser();
    }

    for (var i = 0; i < expList.length; i++) {
      var e = expList[i]
      new Experiencia("U" + Math.ceil((Math.random() * 20)), e.lugar, e.continente, e.nombre, e.descripcion, e.precio).saveExp();
    }
  }

  if (!localStorage.getItem("started")) {
    startApp();
  }


  return (
    <div>
      <Header />
      <Buscador />
      <Footer />
    </div>

  );
}




export default App;
