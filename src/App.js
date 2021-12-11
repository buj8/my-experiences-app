import React, { useState } from 'react';
import Header from './components/Header'
import Buscador from './components/Buscador'
import Footer from './components/Footer'
import Popup from './components/Popup';

import userList from './data/users.json';
import Usuario from './logic/Usuario';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  localStorage.setItem("nUsers", "0");
  localStorage.setItem("currentUser", "U20");
  localStorage.setItem("casoPopup", "");

  for (var i = 0; i < userList.length; i++) {
    var u = userList[i]
    new Usuario(u.username, u.pass, u.name, u.surname, u.email, u.bdate, u.interest, u.gender, u.picture).saveUser();
  }

  const [currentPopup, updatePopup] = useState(localStorage.getItem("casoPopup"));


  return (
    <div>
      <Header />
      <Popup caso={currentPopup} />
      <Buscador />
      <Footer />
    </div>

  );
}




export default App;
