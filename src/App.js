import "./App.css";
import Encabezamiento from "./componets/compartidos/Encabezamiento";
import Pie from "./componets/compartidos/Pie";
import Principal from "./componets/compartidos/Principal";

function App() {
  return (
    <div className="App">
     <Encabezamiento></Encabezamiento>
     <Principal></Principal>
     <Pie></Pie>
    </div>
  );
}

export default App;
