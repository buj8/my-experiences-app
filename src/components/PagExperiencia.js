import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import GetCurrentUser from "../data/currentUser";
import Comentario from "../logic/Comentario";

import { AiFillLike } from 'react-icons/ai';

function PagExperiencia(props) {

    function GetColections(props) {
        if (localStorage.getItem("currentUser") !== "") {
            var options = []
            var col;
            for (var i = 1; i < parseInt(localStorage.getItem("nCol")) + 1; i++) {
                col = JSON.parse(localStorage.getItem("COL" + i));
                if (col.user === localStorage.getItem("currentUser") && !col.exps.includes(props.exp)) {
                    options.push(<option value={'{"col": "COL' + col.colId + '", "exp": "' + props.exp + '"}'}> {col.title}</option >)
                }
            }
        }
        return <>{options}</>;
    }

    function addToColection(event) {
        event.preventDefault();
        var form = JSON.parse(event.currentTarget[0].value)
        var col = form.col;
        var exp = form.exp;
        var coleccion = JSON.parse(localStorage.getItem(col))
        coleccion.exps.push(exp)
        console.log(coleccion);
        localStorage.setItem(col, JSON.stringify(coleccion))
        forceUpdate();
        event.preventDefault();
    }

    function likeExp(exp) {
        if (localStorage.getItem("currentUser") !== "" && exp.user !== localStorage.getItem("currentUser")) {
            if (!exp.likes.includes(localStorage.getItem("currentUser"))) {
                exp.likes.push((localStorage.getItem("currentUser")));
            }
            else {
                exp.likes.splice(exp.likes.indexOf("currentUser"), 1);
            }
            localStorage.setItem(exp.expId, JSON.stringify(exp));
            forceUpdate();
        }
    }


    function likeComment(comment) {
        if (localStorage.getItem("currentUser") !== "" && comment.poster !== localStorage.getItem("currentUser")) {
            if (!comment.likes.includes(localStorage.getItem("currentUser"))) {
                comment.likes.push((localStorage.getItem("currentUser")));
            }
            else {
                comment.likes.splice(comment.likes.indexOf("currentUser"), 1);
            }
        }
        localStorage.setItem(comment.comId, JSON.stringify(comment));
        forceUpdate();
    }

    function Comment(props) {
        var poster = JSON.parse(localStorage.getItem(props.com.u));
        return <div className="comment">
            <img src={poster.picture} className="commentPic" alt="fotoPerfil" />
            <div className="commentUser"><strong> {" " + poster.name + " " + poster.surname}</strong><br />{" (@" + poster.username + ")"}</div>
            <div className="commentText">{props.com.txt}</div>
            <button className="commentLikes" onClick={() => likeComment(props.com)}><AiFillLike />{props.com.likes.length}</button>
        </div>
    }


    const [logged, setLogged] = useState(new Boolean(localStorage.getItem("currentUser")));
    const [updatePag, setUpdatepag] = useState(0);

    function forceUpdate() {
        setUpdatepag(updatePag + 1);
    }
    var commentTooltip = "Debes estar registrado para comentar";

    if (localStorage.getItem("currentUser")) {
        commentTooltip = "Deja tu comentario";
    }

    if (logged) {
        var currentUser = GetCurrentUser();

    }

    const comentar = (event) => {
        var form = event.currentTarget;
        event.preventDefault();
        if (form[0].value != "") {
            new Comentario("C" + (parseInt(localStorage.getItem("nCom")) + 1), localStorage.getItem("currentUser"), props.experiencia.expId, form[0].value).saveComment();

        }
        form[0].value = "";
        forceUpdate();
    }

    function CajaCom(props) {
        var coms = [];
        var temp;
        for (var i = 1; i < parseInt(localStorage.getItem("nCom")) + 1; i++) {
            temp = JSON.parse(localStorage.getItem("C" + i));
            if (temp.exp === props.id) {
                coms.push(<Comment com={temp} />);
            }
        }
        return coms;
    }




    var poster = JSON.parse(localStorage.getItem(props.experiencia.user));

    return <><div id="pagExperiencia">
        <div id="expInfo">
            <img src={props.experiencia.imagen} alt="fotoExp" width="60%" />
            <ul id="expData">
                <li><h4>{props.experiencia.dolar}</h4></li>
                <li><a>{props.experiencia.descripcion} </a></li>
                <li><button className="expLikes" onClick={() => likeExp(props.experiencia)}><AiFillLike />{props.experiencia.likes.length}</button></li>
                <Form onSubmit={addToColection}>
                    <Form.Group className="mb-3" controlId="regGender" >
                        <Form.Select size="sm">
                            <GetColections exp={props.experiencia.expId} />
                        </Form.Select>
                    </Form.Group>
                    <Button variant="dark" type="submit" disabled={localStorage.getItem("currentUser") === ""}>
                        Añadir a colección
                    </Button>
                </Form>
            </ul>
        </div>
        <div id="posterInfo">
            <img src={poster.picture} alt="fotoPerfil" width="12%%" />
            <a><strong> {" " + poster.name + " " + poster.surname}</strong>  {" (@" + poster.username + ")"}</a>
        </div>
        <div className="myComment">
            <Form className="commentArea" onSubmit={comentar}>
                <Form.Group className="mb-3 commentArea" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{commentTooltip}</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="dark" type="submit" disabled={localStorage.getItem("currentUser") === ""} >
                    Enviar
                </Button>
            </Form>
        </div>
        <CajaCom id={props.experiencia.expId} />
    </div></>

}




export default PagExperiencia;