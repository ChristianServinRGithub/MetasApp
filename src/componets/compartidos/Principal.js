import "./Principal.css";
import Vinculo from "./Vinculo";
import { ReactComponent as ListaSVG } from "../../img/lista.svg";
import { ReactComponent as NuevaSVG } from "../../img/nueva.svg";

function Principal({ children }) {
  return (
    <div className="principal">
      <aside className="aside">
        <Vinculo href="/lista" texto="Lista de Metas">
          <ListaSVG className="icono"/>
        </Vinculo>
        <Vinculo href="/crear" texto="Nueva Meta">
          <NuevaSVG className="icono"/>
        </Vinculo>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}

export default Principal;
