import { Navbar, Nav, Container, Button, ButtonGroup } from "react-bootstrap";

function NavbarApp({
  vistaActual,
  cambiarVista,
  usuarioAutenticado,
  cerrarSesion,
  abrirModalLogin,
  abrirModalRegistro,
}) {
  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "tienda", label: "Tienda" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={(e) => {
            e.preventDefault();
            cambiarVista("inicio");
          }}
          style={{ cursor: "pointer" }}
        >
          UVM Shop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-app" />
        <Navbar.Collapse id="navbar-app">
          <Nav className="me-auto">
            {menuItems.map((item) => (
              <Nav.Link
                key={item.id}
                href="#"
                active={vistaActual === item.id}
                onClick={(e) => {
                  e.preventDefault();
                  cambiarVista(item.id);
                }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          {usuarioAutenticado ? (
            <Button
              variant="outline-light"
              onClick={() => {
                cerrarSesion();
                cambiarVista("inicio");
              }}
            >
              Cerrar sesión
            </Button>
          ) : (
            <ButtonGroup>
              <Button variant="primary" onClick={abrirModalLogin}>
                Iniciar sesión
              </Button>
              <Button variant="outline-light" onClick={abrirModalRegistro}>
                Registrarse
              </Button>
            </ButtonGroup>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
