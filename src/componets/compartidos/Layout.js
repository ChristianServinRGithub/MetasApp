import Pie from "./Pie";
import Principal from "./Principal";
import Encabezado from "./Encabezado";
import { Outlet } from "react-router-dom";

function Leyout() {
  return (
    <>
      <Encabezado></Encabezado>
      <Principal>
        <Outlet></Outlet>
      </Principal>
      <Pie></Pie>
    </>
  );
}

export default Leyout;
