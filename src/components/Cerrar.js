import { Button, Form } from 'react-bootstrap';

function Cerrar() {
    const logOut = (event) => {
        localStorage.setItem("currentUser", "");
    };


    return <Form onSubmit={logOut}>
        ¿Estás seguro de que quieres cerrar sesión?<br /><br />
        <Button variant="dark" type="submit">
            Confirmar
        </Button>
    </Form >;
}

export default Cerrar;