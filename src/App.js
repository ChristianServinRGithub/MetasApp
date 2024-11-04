import "./App.css";
import Encabezamiento from "./componets/compartidos/Encabezado";
import Pie from "./componets/compartidos/Pie";
import Principal from "./componets/compartidos/Principal";
import Lista from "./componets/lista/Lista";
import Detalles from "./componets/nueva/Detalles";

function App() {
  return (
    <div className="App">
      <Encabezamiento></Encabezamiento>
      <Principal>
        {/* <Lista></Lista> */}
        <Detalles></Detalles>
      </Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
