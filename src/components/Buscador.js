import React from 'react';

class Buscador extends React.Component {
    render() {
        return <div className="busq">
            <h2 id="searcharea" className="titulos">Busca experiencias</h2>
            <div className="field" id="searchform">
                <input type="text" id="searchterm" placeholder="¿Qué estás buscando?" />
                <button type="button" id="search">🔎</button>
            </div>
        </div>
    }
}

export default Buscador;