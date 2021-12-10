import Perfil from './Perfil'

function Popup(props) {
    switch (props.caso) {
        case "perfil":
            return <Perfil />;
            break;

        default:
            break;
    }
    return <div />
}


export default Popup;