import { Form, Button } from 'react-bootstrap';


function Login() {


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form[1].value);


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
        <Button variant="dark" type="submit">
            Entrar
        </Button>
    </Form>;

}
export default Login;