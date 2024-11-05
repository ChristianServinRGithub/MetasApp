import estilos from "./Detalles.module.css";

function Detalles() {
  const opcionesDeFrecuencia = ["día", "semana", "mes", "año"];
  const opcionesDeIconos = ["📚", "✈️", "🏃🏻‍♂️", "💻​", "💵"];
  return (
    <div className="tarjeta">
      <form className="p-4">
        <label className="label">
          Describe tu meta:
          <input className="input" placeholder="Ej. 52 caminatas" />
        </label>
        <label className="label">
          ¿Con que frecuencia deseas cumplir esta meta?{" "}
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input className="input mr-6" type="number" />
            <select>
              {opcionesDeFrecuencia.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input className="input" type="number" />
        </label>
        <label className="label">
          ¿Tienes una fecha limite?
          <input className="input" type="date" />
        </label>
        <label className="label">
          ¿Cuantas veces has completado esta meta?
          <input className="input" type="number" />
        </label>
        <label className="label">
          Escoge un icono para tu meta
          <select className="input">
            {opcionesDeIconos.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </label>
      </form>
      <div className={estilos.botones}>
        <button className="boton boton--negro">Crear</button>
        <button className="boton boton--gris">Cancelar</button>
      </div>
    </div>
  );
}

export default Detalles;
