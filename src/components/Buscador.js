import React from 'react';
import { BsSearch } from 'react-icons/bs';

class Buscador extends React.Component {
    render() {
        return <div id="busq">
            <h2>Aquí empieza tu experiencia</h2>
            <h5><br />Usa nuestro buscador para encontrar experiencias específicas o busca por continente con nuestro mapa</h5>
            <div className="divBusqueda field" id="searchform">
                <input type="text" id="searchterm" placeholder="¿Qué estás buscando?" />
                <button type="button" id="search"><BsSearch /></button>
            </div>

            <div id="mapsearch" className="divBusqueda">
                <img src="images/map.png" usemap="#image-map" />
                <map name="image-map">
                    <area target="" alt="norteamerica" title="norteamerica" href="" coords="110,191,171,151,210,98,264,90,298,17,209,9,164,2,54,15,23,26,10,51,3,77,3,89,51,151" shape="poly" />
                    <area target="" alt="sudamerica" title="sudamerica" href="" coords="145,339,203,340,246,224,209,180,160,168,130,179,111,207" shape="poly" />
                    <area target="" alt="africa" title="africa" href="" coords="341,300,418,261,425,191,402,171,391,173,379,157,361,125,330,122,322,112,267,131,251,171,305,280" shape="poly" />
                    <area target="" alt="oceania" title="oceania" href="" coords="559,321,663,310,648,217,611,204,589,220,506,258,515,286" shape="poly" />
                    <area target="" alt="asia" title="asia" href="" coords="363,116,378,109,395,110,419,60,414,25,477,11,546,23,609,35,645,70,645,143,616,196,598,208,525,238,434,189,384,165" shape="poly" />
                    <area target="" alt="" title="" href="" coords="271,97,316,2,393,15,422,49,399,109,267,124" shape="poly" />
                </map>
            </div>
        </div>
    }
}

function Experiencias() { }

export default Buscador;