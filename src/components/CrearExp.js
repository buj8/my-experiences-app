import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import jsonToUser from '../logic/jsonToUser'
import Usuario from '../logic/Usuario';
import Experiencia from '../logic/Experiencia';

function CrearExp() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        const form = event.currentTarget;
        console.log(event.currentTarget.value);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        addExp(form);
        setValidated(true);
    };

    //(, descripcion, precio)

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="addELugar">
            <Form.Label>Lugar</Form.Label>
            <Form.Control required placeholder="Introduce el nombre del lugar" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="addECont">
            <Form.Label>Continente</Form.Label>
            <Form.Select required>
                <option value="">Selecciona el continente en el que se encuentra</option>
                <option value="North America">Norteamérica</option>
                <option value="South America">Sudamérica</option>
                <option value="Europe">Europa</option>
                <option value="Asia">Asia</option>
                <option value="Africa">África</option>
                <option value="Oceania">Oceanía</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="addENombre">
            <Form.Label>Subtítulo</Form.Label>
            <Form.Control required placeholder="Introduce un subtitulo para tu experiencia" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="addEPrecio" >
            <Form.Label>Precio</Form.Label>
            <Form.Select required>
                <option value="">Selecciona un rango de precio de $ a $$$</option>
                <option value="0">$</option>
                <option value="1">$$</option>
                <option value="2">$$$</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="regUser">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={4} />
        </Form.Group>

        <Button variant="dark" type="submit">
            Crear cuenta
        </Button>
    </Form>;
}

function checkAvailability(form) {
    var temp;
    var username = form[5].value;
    var email = form[6].value;

    console.log(username + " " + email);

    for (var i = 1; i < parseInt(localStorage.getItem("nUsers")) + 1; i++) {
        temp = jsonToUser(localStorage.getItem("U" + i));
        if (email === temp.email || username === temp.username) {
            return false;
        }
    }
    return true;
}

//lugar, nombre, continente, precio, descripcion
//lugar, continente, nombre, descripcion, precio)
function addExp(form) {
    var newExp = new Experiencia("E" + localStorage.getItem("nExp"), localStorage.getItem("currentUser"), form[0].value, form[1].value, form[2].value, form[4].value, form[3].value);
    newExp.saveExp();
}


export default CrearExp;