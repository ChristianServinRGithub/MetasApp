import estilos from "./Vinculo.module.css";

function Vinculo({ Icono, texto, href }) {
  return (
    <a href={href} className={estilos.vinculo}>
      <Icono className={estilos.icono} />
      {texto && <spa className={estilos.texto}>{texto}</spa>}
    </a>
  );
}

export default Vinculo;
