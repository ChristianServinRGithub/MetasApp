import Meta from "./Meta";

const listaMock = [{
  id: "1",
  detalles: "Correr por 30 minutos",
  periodo: "día",
  eventos: 1,
  icono: "🏃🏼",
  meta: 365,
  plazo: "2030-01-01",
  completado: 5,
}];

function Lista() {
  return (
    <>
      {listaMock.map((meta) => (
        <Meta key={meta.id} {...meta} />
      ))}
    </>
  );
}

export default Lista;
