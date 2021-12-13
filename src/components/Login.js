import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';


function Login() {

    const [errorEntrada, setError] = useState("");

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (!checkLogin(form)) {
            event.preventDefault();
            setError("Usuario y/o contraseña incorrectos");
        }

    };

    return <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Introduce tu correo electrónico" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Introduce tu contraseña" />
        </Form.Group>
        {errorEntrada}
        <Button variant="dark" type="submit">
            Entrar
        </Button>
    </Form>;

}

function checkLogin(form) {
    for (var i = 1; i < parseInt(localStorage.getItem("nUsers") + 1); i++) {
        if (JSON.parse(localStorage.getItem("U" + i)).email === form[0].value && JSON.parse(localStorage.getItem("U" + i)).pass === form[1].value) {
            localStorage.setItem("currentUser", "U" + i);
            return true;
        }
    }
    return false;
}
export default Login;