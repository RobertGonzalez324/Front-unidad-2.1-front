import { useEffect } from "react";
import Inicio from "../paginas/Inicio";

function TiendaView() {
  useEffect(() => {
    document.title = "Tienda | UVM Shop";
  }, []);

  return <Inicio />;
}

export default TiendaView;
