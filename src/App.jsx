// src/App.jsx
import { useContext, useState } from "react";
import AuthContext from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";
import NavbarApp from "./componentes/NavbarApp";
import SidebarApp from "./componentes/SidebarApp";
import ModalLogin from "./componentes/ModalLogin";
import ModalRegistro from "./componentes/ModalRegistro";
import InicioView from "./views/InicioView";
import TiendaView from "./views/TiendaView";
import ContactoView from "./views/ContactoView";

function AppContent() {
  const { usuarioAutenticado, login, registrar, logout } = useContext(AuthContext);
  const [vistaActual, setVistaActual] = useState("inicio");
  const [mostrarModalLogin, setMostrarModalLogin] = useState(false);
  const [mostrarModalRegistro, setMostrarModalRegistro] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);
  const [errorRegistro, setErrorRegistro] = useState(null);

  const cambiarVista = (nuevaVista) => {
    setVistaActual(nuevaVista);
  };

  const manejarSubmitLogin = async (email, contraseña) => {
    const mensajeError = await login(email, contraseña);
    if (mensajeError) {
      setErrorLogin(mensajeError);
      return;
    }

    setMostrarModalLogin(false);
    setErrorLogin(null);
  };

  const manejarSubmitRegistro = async (e) => {
    e.preventDefault();

    const nombreUsuario = e.target.nombreUsuario.value;
    const nombreCompleto = e.target.nombreCompleto.value;
    const email = e.target.email.value;
    const contraseña = e.target.contraseña.value;
    const confirmarContraseña = e.target.confirmarContraseña.value;

    const mensajeError = await registrar({
      nombreUsuario,
      nombreCompleto,
      email,
      contraseña,
      confirmarContraseña,
    });

    if (mensajeError) {
      setErrorRegistro(mensajeError);
      return;
    }

    setMostrarModalRegistro(false);
    setErrorRegistro(null);
  };

  const renderVista = () => {
    switch (vistaActual) {
      case "inicio":
        return <InicioView cambiarVista={cambiarVista} />;
      case "tienda":
        return <TiendaView />;
      case "contacto":
        return <ContactoView cambiarVista={cambiarVista} />;
      default:
        return <InicioView cambiarVista={cambiarVista} />;
    }
  };

  return (
    <>
      <NavbarApp
        usuarioAutenticado={usuarioAutenticado}
        cerrarSesion={logout}
        abrirModalLogin={() => setMostrarModalLogin(true)}
        abrirModalRegistro={() => setMostrarModalRegistro(true)}
      />

      <div className="d-flex" style={{ minHeight: "calc(100vh - 72px)" }}>
        <SidebarApp vistaActual={vistaActual} cambiarVista={cambiarVista} />
        <div className="flex-grow-1" style={{ background: "#f8fafc" }}>
          {renderVista()}
        </div>
      </div>

      <ModalLogin
        mostrar={mostrarModalLogin}
        cerrarModal={() => {
          setMostrarModalLogin(false);
          setErrorLogin(null);
        }}
        manejarSubmitLogin={manejarSubmitLogin}
        errorLogin={errorLogin}
      />

      <ModalRegistro
        mostrar={mostrarModalRegistro}
        cerrarModal={() => {
          setMostrarModalRegistro(false);
          setErrorRegistro(null);
        }}
        manejarSubmitRegistro={manejarSubmitRegistro}
        errorRegistro={errorRegistro}
      />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
