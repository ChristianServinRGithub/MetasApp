function Detalles() {
  const opcionesDeFrecuencia = ["día", "semana", "mes", "año"];
  const opcionesDeIconos = ["📚", "✈️", "🏃🏻‍♂️", "💻​", "💵"];
  return (
    <div>
      <form>
        <label>
          Describe tu meta:
          <input placeholder="Ej. 52 caminatas" />
        </label>
        <label>
          ¿Con que frecuencia deseas cumplir esta meta?{" "}
          <span>(ej. 1 vez a la semana)</span>
          <div>
            <input type="number" />
            <select>
              {opcionesDeFrecuencia.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label>
          ¿Cuantas veces deseas completar esta meta?
          <input type="number" />
        </label>
        <label>
          ¿Tienes una fecha limite?
          <input type="date" />
        </label>
        <label>
          ¿Cuantas veces has completado esta meta?
          <input type="number" />
        </label>
        <label>
          Escoge un icono para tu meta
          <select>
            {opcionesDeIconos.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </label>
      </form>
      <div>
        <button>Crear</button>
        <button>Cancelar</button>
      </div>
    </div>
  );
}

export default Detalles;
