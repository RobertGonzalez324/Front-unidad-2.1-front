import { Navbar, Container, Button, ButtonGroup } from "react-bootstrap";

function NavbarApp({
  usuarioAutenticado,
  cerrarSesion,
  abrirModalLogin,
  abrirModalRegistro,
}) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container fluid className="px-4">
        <Navbar.Brand href="#" className="text-white fw-bold text-lg">
          UVM Shop
        </Navbar.Brand>

        <div className="ms-auto">
          {usuarioAutenticado ? (
            <Button
              variant="outline-light"
              onClick={() => {
                cerrarSesion();
              }}
              className="border-slate-300 text-white hover:bg-white hover:text-slate-900"
            >
              Cerrar sesión
            </Button>
          ) : (
            <ButtonGroup>
              <Button variant="primary" onClick={abrirModalLogin} className="px-4">
                Iniciar sesión
              </Button>
              <Button variant="outline-light" onClick={abrirModalRegistro} className="px-4">
                Registrarse
              </Button>
            </ButtonGroup>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
