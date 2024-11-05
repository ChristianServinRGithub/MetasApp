import { Link } from "react-router-dom";
import estilos from "./Vinculo.module.css";

function Vinculo({ Icono, texto, to }) {
  return (
    <Link to={to} className={estilos.vinculo}>
      <Icono className={estilos.icono} />
      {texto && <spa className={estilos.texto}>{texto}</spa>}
      </Link>
  );
}

export default Vinculo;
