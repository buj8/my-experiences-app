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

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  function startApp() {
    localStorage.setItem("nUsers", "0");
    localStorage.setItem("nExp", "0");
    localStorage.setItem("nCom", "0");
    //localStorage.setItem("currentUser", "U1");
    localStorage.setItem("started", "1");
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
      new Comentario(c.u, c.exp, c.txt).saveComment();
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
