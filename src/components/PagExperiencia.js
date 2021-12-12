import Experiencia from "../logic/Experiencia";
import { useState } from "react";

function PagExperiencia(props) {

    const [logged, setLogged] = useState(true);

    var poster = JSON.parse(localStorage.getItem(props.experiencia.user));
    return <><div id="pagExperiencia">
        <div id="expInfo">
            <img src={props.experiencia.imagen} alt="fotoExp" width="60%" />
            <ul id="expData">
                <li><a>{props.experiencia.descripcion} </a></li>
            </ul>
        </div>
        <div id="posterInfo">
            <img src={poster.picture} alt="fotoPerfil" width="12%%" />
            <a><strong> {" " + poster.name + " " + poster.surname}</strong>  {" (@" + poster.username + ")"}</a>
        </div>
        <CajaCom id={props.experiencia.expId} />

    </div></>

}

function CajaCom(props) {
    var coms = [];
    var temp;
    for (var i = 1; i < localStorage.getItem("nCom"); i++) {
        temp = JSON.parse(localStorage.getItem("C" + i));
        if (temp.exp === props.id) {
            console.log(temp);
            coms.push(<Comment com={temp} />);
        }
    }
    return coms;
}

function Comment(props) {
    var poster = JSON.parse(localStorage.getItem(props.com.u));
    return <div className="comment">
        <img src={poster.picture} className="commentPic" alt="fotoPerfil" />
        <div className="commentUser"><strong> {" " + poster.name + " " + poster.surname}</strong><br />{" (@" + poster.username + ")"}</div>
        <div className="commentText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

    </div>
}
export default PagExperiencia;