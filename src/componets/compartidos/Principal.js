import estilo from "./Principal.module.css";
import Vinculo from "./Vinculo";
import { ReactComponent as ListaSVG } from "../../img/lista.svg";
import { ReactComponent as NuevaSVG } from "../../img/nueva.svg";

function Principal({ children }) {
  return (
    <div className={estilo.principal}>
      <aside className={estilo.aside}>
        <Vinculo href="/lista" texto="Lista de Metas" Icono={ListaSVG} />

        <Vinculo href="/crear" texto="Nueva Meta" Icono={NuevaSVG} />
      </aside>
      <main className={estilo.main}>{children}</main>
    </div>
  );
}

export default Principal;
