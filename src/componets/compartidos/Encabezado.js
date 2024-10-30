import "./Encabezado.css";
import { ReactComponent as Logo} from "../../img/logo.svg";
import { ReactComponent as Perfil } from "../../img/perfil.svg";

function Encabezado() {
  return (
    <div className="encabezado">
      <div className="titulo">
        <Logo className="logo" />
        <a className="app">Metas App</a>
      </div>
      <nav>
        <a href="/perfil" className="vinculo">
          <Perfil className="icono" />``
        </a>
      </nav>
    </div>
  );
}

export default Encabezado;
