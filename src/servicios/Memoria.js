import { createContext, useReducer } from "react";

export const Contexto = createContext(null);

const listaMock = [
  {
    id: "1",
    detalles: "Correr por 30 minutos",
    periodo: "día",
    eventos: 1,
    icono: "🏃🏼",
    meta: 365,
    plazo: "2030-01-01",
    completado: 5,
  },
  {
    id: "2",
    detalles: "Leer libros",
    periodo: "Año",
    eventos: 6,
    icono: "📚",
    meta: 12,
    plazo: "2030-01-01",
    completado: 0,
  },
  {
    id: "3",
    detalles: "Viajar a parques nacionales",
    periodo: "Mes",
    eventos: 1,
    icono: "✈️",
    meta: 60,
    plazo: "2030-01-01",
    completado: 40,
  },
];
const memoria = localStorage.getItem("metas");
const estadoInicial = memoria
  ? JSON.parse(memoria)
  : {
      orden: [],
      objetos: {},
    };

function reductor(estado, accion) {
  switch (accion.tipo) {
    case "colocar": {
      const metas = accion.metas;
      const nuevoEstado = {
        orden: metas.map((meta) => meta.id),
        objetos: metas.reduce(
          (obejeto, meta) => ({ ...obejeto, [meta.id]: meta }),
          {}
        ),
      };
      localStorage.setItem("metas", JSON.stringify(nuevoEstado));
      return nuevoEstado;
    }
    case "crear": {
      const id = Math.random().toString();
      const nuevaMeta = { ...accion.meta, id }; // Asigna el id al objeto meta
    
      const nuevoEstado = {
        orden: [...estado.orden, id],
        objetos: {
          ...estado.objetos,
          [id]: nuevaMeta,
        },
      };
      localStorage.setItem("metas", JSON.stringify(nuevoEstado));
      return nuevoEstado;
    }
    case "actualizar": {
      const id = accion.meta.id;
      estado.objetos[id] = {
        ...estado.objetos[id],
        ...accion.meta,
      };
      const nuevoEstado = { ...estado };
      localStorage.setItem("metas", JSON.stringify(nuevoEstado));
      return nuevoEstado;
    }
    case "borrar": {
      const id = accion.id;
      const nuevoOrden = estado.orden.filter((item) => item !== id);
      delete estado.objetos[id];
      const nuevoEstado = {
        orden: nuevoOrden,
        objetos: estado.objetos,
      };
      localStorage.setItem("metas", JSON.stringify(nuevoEstado));
      return nuevoEstado;
    }
    default:
      throw new Error();
  }
}


function Memoria({ children }) {
  const [estado, enviar] = useReducer(reductor, estadoInicial);
  return (
    <Contexto.Provider value={[estado, enviar]}>{children}</Contexto.Provider>
  );
}

export default Memoria;
