import React from 'react';
import Header from './components/Header'
import Buscador from './components/Buscador'
import Footer from './components/Footer'

import Usuario from './logic/Usuario';
import userList from './data/users.json';
import Experiencia from './logic/Experiencia'
import expList from './data/experiencias.json'
import Comentario from './logic/Comentario'
import comList from './data/comments.json'
import Coleccion from './logic/Coleccion'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


  function startApp() {
    localStorage.setItem("nUsers", "0");
    localStorage.setItem("nExp", "0");
    localStorage.setItem("nCom", "0");
    localStorage.setItem("currentUser", "");
    localStorage.setItem("started", "1");
    localStorage.setItem("nCol", "0")
    var coleccion = new Coleccion("U21", "Coleccion 1");
    coleccion.store();
    coleccion.addExp("E12");
    coleccion.addExp("E13");
    var coleccion = new Coleccion("U21", "Coleccion 2");
    coleccion.store();
    coleccion.addExp("E1");
    coleccion.addExp("E11");
    coleccion.update();
    for (var i = 0; i < userList.length; i++) {
      var u = userList[i]
      new Usuario(u.username, u.pass, u.name, u.surname, u.email, u.bdate, u.interest, u.gender, u.picture).saveUser();
    }

    for (i = 0; i < expList.length; i++) {
      var e = expList[i]
      new Experiencia("E" + (i + 1), "U" + Math.ceil((Math.random() * 20)), e.lugar, e.continente, e.nombre, e.descripcion, e.precio).saveExp();
    }

    for (i = 0; i < comList.length; i++) {
      var c = comList[i]
      new Comentario("C" + (i + 1), c.u, c.exp, c.txt).saveComment();
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
