import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import jsonToUser from '../logic/jsonToUser'
import Usuario from '../logic/Usuario';

function Registro() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        const form = event.currentTarget;
        console.log(event.currentTarget.value);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (checkAvailability(form)) {
            registerUser(form);
        }
        else { console.log("taken"); }
        setValidated(true);
    };

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="regName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control required placeholder="Introduce tu nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="regLastname">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control required placeholder="Introduce tus apellidos" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="regGender">
            <Form.Label>Sexo</Form.Label>
            <Form.Select required>
                <option value="">Selecciona tu sexo</option>
                <option value="1">Hombre</option>
                <option value="2">Mujer</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="regInterest" >
            <Form.Label>Interés</Form.Label>
            <Form.Select required>
                <option value="">¿Qué te interesa?</option>
                <option value="0">Turismo cultural</option>
                <option value="1">Turismo ambiental</option>
                <option value="2">Turismo histórico</option>
                <option value="3">Turismo de negocios</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="regBdate">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control required type="date" placeholder="Introduce tu fecha de nacimiento" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="regUser">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control required placeholder="Introduce tu nombre de usuario" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="regEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Introduce tu correo electrónico" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="regPass">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control required type="password" placeholder="Introduce tu contraseña" />
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
        //console.log(temp);
        if (email === temp.email || username === temp.username) {
            return false;
        }
    }
    return true;
}


function registerUser(form) {
    var gender = "male";
    var picture = "https://randomuser.me/api/portraits/men/" + Math.floor(Math.random() * 100) + ".jpg";
    if (form[2].value == 2) {
        gender = "female";
        picture = "https://randomuser.me/api/portraits/women/" + Math.floor(Math.random() * 100) + ".jpg";
    }
    var regUser = new Usuario(form[5].value, form[7].value, form[0].value, form[1].value, form[6].value, form[4].value, parseInt(form[3].value), gender, picture);
    regUser.saveUser();
}


export default Registro;