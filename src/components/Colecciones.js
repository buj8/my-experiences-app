import jsonToUser from "../logic/jsonToUser";
import { Card, CardGroup } from "react-bootstrap";
import { useState } from "react"
import { AiFillLike } from 'react-icons/ai'

import Coleccion from "../logic/Coleccion";

function Colecciones() {

    const [currentExp, setExp] = useState("");
    const [show, setShow] = useState(false);
    const [nUpdates, updateCol] = useState(0);

    function forceUpdate() {
        updateCol(nUpdates + 1);
    }

    var user = jsonToUser(localStorage.getItem(localStorage.getItem("currentUser")));
    var cols = [];
    var temp;
    for (var i = 1; i < parseInt(localStorage.getItem("nCol")) + 1; i++) {

        if (JSON.parse(localStorage.getItem("COL" + i)).user === localStorage.getItem("currentUser")) {
            temp = new Coleccion(localStorage.getItem("currentUser"), JSON.parse(localStorage.getItem("COL" + i)).title)
            temp.colId = "COL" + i;
            cols.push(temp);
            cols[i - 1].addExps(JSON.parse(localStorage.getItem("COL" + i)).exps);
        }
    }

    var expList = [];
    var colList = [];
    for (i = 0; i < cols.length; i++) {
        expList = [];
        for (var j = 0; j < cols[i].exps.length; j++) {
            expList.push(JSON.parse(localStorage.getItem(cols[i].exps[j])));
        }

        colList.push(<div className="coleccion">
            <h3>{cols[i].title}</h3>
            <ColeccionExperiencia colId={cols[i]} experiencias={expList} />
        </div>)
    }



    function ColeccionExperiencia(props) {
        var exps = [];
        var columna = [];
        for (var i = props.experiencias; i > 0; i--) {
            exps.push(JSON.parse(localStorage.getItem("E" + props.experiencias[i])));
        }


        for (i = 0; i < 9; i += 3) {
            columna.push(
                <CardGroup>
                    <TarjetaExperiencia id={"exp" + i} experiencia={props.experiencias[i]} colId={props.colId} />
                    <TarjetaExperiencia id={"exp" + (i + 1)} experiencia={props.experiencias[i + 1]} colId={props.colId} />
                    <TarjetaExperiencia id={"exp" + (i + 2)} experiencia={props.experiencias[i + 2]} colId={props.colId} />
                </CardGroup>)

        }

        return <> {columna} </>
    }

    function removeExp(col, exp) {
        var coleccion = JSON.parse(localStorage.getItem(col.colId))
        coleccion.exps.splice(coleccion.exps.indexOf(exp));
        localStorage.setItem(col.colId, JSON.stringify(coleccion))
        forceUpdate();
    }

    function openExp(expId) {
        setExp(expId);
        setShow(true);
    }

    function TarjetaExperiencia(props) {
        if (!props.experiencia) {
            return <></>;
        }
        return <Card id={props.id}>
            <div onClick={() => openExp(props.experiencia)}>
                <Card.Img variant="top" src={props.experiencia.imagen} />
                <Card.Body>
                    <button className="removeExp" onClick={() => removeExp(props.colId, props.experiencia.expId)}>x</button>
                    <Card.Title>{props.experiencia.lugar}</Card.Title>
                    <Card.Text>
                        Por <strong>{JSON.parse(localStorage.getItem(props.experiencia.user)).username}</strong>
                    </Card.Text>
                    <Card.Text>
                        <strong>{props.experiencia.likes.length} </strong><AiFillLike />
                    </Card.Text>
                    <Card.Text>
                        {props.experiencia.descripcion}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    }

    return colList;



}

export default Colecciones;