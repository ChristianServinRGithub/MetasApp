import estilos from "./Encabezado.module.css";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";
import { ReactComponent as PerfilSVG } from "../../img/perfil.svg";
import Vinculo from "./Vinculo";

function Encabezado() {
  return (
    <header className={estilos.encabezado}>
      <div className={estilos.titulo}>
        <LogoSVG className={estilos.logo} />
        <a className={estilos.app}>Metas App</a>
      </div>
      <nav>
        <Vinculo href="/perfin" Icono={PerfilSVG} />
      </nav>
    </header>
  );
}

export default Encabezado;
