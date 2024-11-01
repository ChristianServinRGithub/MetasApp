import './Vinculo.css'

function Vinculo({children, texto, href}) {
    return (
        <a href={href} className="vinculo">
          {children}
          <spa>{texto}</spa>
        </a>
    );
}

export default Vinculo;