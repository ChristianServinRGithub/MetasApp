import "./App.css";
import Encabezamiento from "./componets/compartidos/Encabezado";
import Pie from "./componets/compartidos/Pie";
import Principal from "./componets/compartidos/Principal";
import Meta from "./componets/lista/Meta";

function App() {
  return (
    <div className="App">
      <Encabezamiento></Encabezamiento>
      <Principal>
        <Meta></Meta>
      </Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
