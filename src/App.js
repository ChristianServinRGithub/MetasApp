import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./componets/compartidos/Layout";
import Lista from "./componets/lista/Lista";
import Detalles from "./componets/nueva/Detalles";
import NoEncontrado from "./componets/compartidos/NoEncontrado";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/nueva" element={<Detalles />} />
      </Route>
        <Route path="/*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default App;
