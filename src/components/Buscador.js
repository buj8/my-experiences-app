import { Tooltip, OverlayTrigger, Card, Col, CardGroup, Modal } from 'react-bootstrap';
import Popup from './Popup';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';

function Buscador() {

    const [busqLugar, setLugar] = useState("");
    const [busqCont, setCont] = useState("");

    const [currentExp, setExp] = useState("");
    const [show, setShow] = useState(false);




    function openExp(expId) {
        setExp(expId);
        setShow(true);
    }

    return <><div id="busq">
        <h2>Aquí empieza tu experiencia</h2>
        <h5><br />Usa nuestro buscador para encontrar experiencias específicas o busca por continente con nuestro mapa</h5>
        <div className="divBusqueda field" id="searchform">
            <input type="text" id="searchterm" placeholder="¿Qué estás buscando?" />
            <button type="button" id="search" ><BsSearch /></button>
        </div>

        <div id="mapsearch" className="divBusqueda">
            <img src="images/map.png" useMap="#image-map" />
            <map name="image-map">
                <OverlayTrigger placement="top-start" overlay={<Tooltip><strong>Norteamérica</strong> </Tooltip>}>
                    <area target="" alt="norteamerica" title="" href="#" coords="110,191,171,151,210,98,264,90,298,17,209,9,164,2,54,15,23,26,10,51,3,77,3,89,51,151" shape="poly" />
                </OverlayTrigger>
                <OverlayTrigger placement="bottom-start" overlay={<Tooltip> <strong>Sudamérica</strong> </Tooltip>}>
                    <area target="" alt="sudamerica" title="" href="#" coords="145,339,203,340,246,224,209,180,160,168,130,179,111,207" shape="poly" />
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" overlay={<Tooltip> <strong>África</strong> </Tooltip>}>
                    <area target="" alt="africa" title="" href="#" coords="341,300,418,261,425,191,402,171,391,173,379,157,361,125,330,122,322,112,267,131,251,171,305,280" shape="poly" />
                </OverlayTrigger>
                <OverlayTrigger placement="right-end" overlay={<Tooltip> <strong>Oceanía</strong> </Tooltip>}>
                    <area target="" alt="oceania" title="" href="#" coords="559,321,663,310,648,217,611,204,589,220,506,258,515,286" shape="poly" />
                </OverlayTrigger>
                <OverlayTrigger placement="right-start" overlay={<Tooltip> <strong>Asia</strong> </Tooltip>}>
                    <area target="" alt="asia" title="" href="#" coords="363,116,378,109,395,110,419,60,414,25,477,11,546,23,609,35,645,70,645,143,616,196,598,208,525,238,434,189,384,165" shape="poly" />
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip> <strong>Europa</strong> </Tooltip>}>
                    <area target="" alt="europa" title="" href="#" coords="271,97,316,2,393,15,422,49,399,109,267,124" shape="poly" />
                </OverlayTrigger>
            </map>
        </div >
    </div >
        <div id="colExperiencias">
            <ColumnaExperiencia lugar={busqLugar} />
        </div>
        <Modal
            size="xl"
            show={show}
            onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {currentExp.nombre + currentExp.lugar}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body><Popup caso={"Experiencia"} experiencia={currentExp} /></Modal.Body>
        </Modal>
    </>

    function ColumnaExperiencia(props) {
        var exps = [];
        var columna = [];
        var temp = [];
        for (var i = 1; i < localStorage.getItem("nExp"); i++) {
            exps.push(JSON.parse(localStorage.getItem("E" + i)));
        }

        if (props.lugar) {
            for (i = 0; i < exps.length; i++) {
                if (exps[i].lugar.toLowerCase().includes(props.lugar.toLowerCase())) {
                    temp.push(exps[i]);
                }
            }
            exps = temp;
        }

        for (i = 0; i < 9; i += 3) {
            columna.push(<CardGroup>
                <TarjetaExperiencia id={"exp" + i} experiencia={exps[i]} />
                <TarjetaExperiencia id={"exp" + (i + 1)} experiencia={exps[i + 1]} />
                <TarjetaExperiencia id={"exp" + (i + 2)} experiencia={exps[i + 2]} />
            </CardGroup>)
        }

        return <> {columna} </>
    }

    function TarjetaExperiencia(props) {
        if (!props.experiencia) {
            return <></>;
        }
        return <Card id={props.id}>
            <div onClick={() => openExp(props.experiencia)}>
                <Card.Img variant="top" src={props.experiencia.imagen} />
                <Card.Body>
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
}



export default Buscador;