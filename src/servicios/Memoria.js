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

const estadoInicial = {
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
      return nuevoEstado;
    }
    case "crear": {
      const id = /* accion.meta.id */ Math.random();
      const nuevoEstado = {
        orden: [...estado.orden, id],
        objetos: {
            ...estado.objetos,
            [id]: accion.meta,
        },
      };
      return nuevoEstado;
    }
  }
}

const metas = reductor(estadoInicial, { tipo: "colocar", metas: listaMock });

function Memoria({ children }) {
  const [estado, enviar] = useReducer(reductor, metas);
  return (
    <Contexto.Provider value={[estado, enviar]}>{children}</Contexto.Provider>
  );
}

export default Memoria;
