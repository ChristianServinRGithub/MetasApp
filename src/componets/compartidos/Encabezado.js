import "./Encabezado.css";
import { ReactComponent as LogoSVG} from "../../img/logo.svg";
import { ReactComponent as PerfilSVG } from "../../img/perfil.svg";

function Encabezado() {
  return (
    <header className="encabezado">
      <div className="titulo">
        <LogoSVG className="logo" />
        <a className="app">Metas App</a>
      </div>
      <nav>
        <a href="/perfil" className="vinculo">
          <PerfilSVG className="icono" />
        </a>
      </nav>
    </header>
  );
}

export default Encabezado;
