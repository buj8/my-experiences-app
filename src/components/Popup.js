import React from 'react';

import Perfil from './Perfil'
import Login from './Login'
import Registro from './Registro';
import Mensajes from './Mensajes';
import Cerrar from './Cerrar';
import PagExperiencia from './PagExperiencia';
import CrearExp from './CrearExp';
import Ranking from './Ranking';
import Colecciones from './Colecciones';

function Popup(props) {

    switch (props.caso) {
        case "Colecciones":
            return <Colecciones />;
        case "Experiencia":
            return <PagExperiencia experiencia={props.experiencia} />;
        case "Perfil":
            return <Perfil />;
        case "Login":
            return <Login />;
        case "Registro":
            return <Registro />;
        case "Ranking":
            return <Ranking />;
        case "FAQ":
            return template;
        case "Contacto":
            return template;
        case "Crear nueva experiencia":
            return <CrearExp />;
        case "Cerrar sesión":
            return <Cerrar />;

        default:
            break;
    }
}



var template = <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus. Etiam sit amet nisl purus in mollis nunc sed id. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Odio facilisis mauris sit amet massa vitae. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Arcu odio ut sem nulla pharetra diam sit. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Auctor urna nunc id cursus metus. Elit duis tristique sollicitudin nibh sit amet. Mattis pellentesque id nibh tortor id aliquet lectus proin. Diam sollicitudin tempor id eu. In ornare quam viverra orci sagittis eu volutpat odio. Libero justo laoreet sit amet cursus. Fermentum odio eu feugiat pretium nibh ipsum. Ultrices gravida dictum fusce ut placerat. Viverra maecenas accumsan lacus vel facilisis volutpat.

    Vitae nunc sed velit dignissim sodales. Neque sodales ut etiam sit amet nisl purus. Arcu dictum varius duis at. Consectetur libero id faucibus nisl tincidunt. Enim sed faucibus turpis in eu mi bibendum neque egestas. Quam pellentesque nec nam aliquam sem et tortor. Tempor orci dapibus ultrices in. Neque convallis a cras semper auctor neque vitae tempus quam. Odio facilisis mauris sit amet massa vitae. Scelerisque eleifend donec pretium vulputate sapien. Facilisis sed odio morbi quis commodo odio aenean sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Est placerat in egestas erat imperdiet sed euismod nisi porta.

    Sed tempus urna et pharetra pharetra. Augue neque gravida in fermentum et sollicitudin ac orci. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Aliquet enim tortor at auctor urna nunc id cursus. Semper quis lectus nulla at volutpat diam ut venenatis. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Et malesuada fames ac turpis egestas integer. Etiam erat velit scelerisque in. Purus in massa tempor nec. Volutpat est velit egestas dui id ornare arcu odio. Dui faucibus in ornare quam. Faucibus vitae aliquet nec ullamcorper sit amet. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Consectetur libero id faucibus nisl tincidunt eget. Non tellus orci ac auctor augue. Vivamus arcu felis bibendum ut tristique. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Pharetra et ultrices neque ornare aenean euismod. Dignissim cras tincidunt lobortis feugiat.</>;

export default Popup;