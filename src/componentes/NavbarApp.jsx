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
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand
          href="#"
          onClick={(e) => {
            e.preventDefault();
            cambiarVista("inicio");
          }}
          className="text-white fw-bold text-lg"
        >
          UVM Shop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-app" className="border-0" />
        <Navbar.Collapse id="navbar-app">
          <Nav className="me-auto gap-2">
            {menuItems.map((item) => (
              <Nav.Link
                key={item.id}
                href="#"
                active={vistaActual === item.id}
                onClick={(e) => {
                  e.preventDefault();
                  cambiarVista(item.id);
                }}
                className={
                  vistaActual === item.id
                    ? "text-white fw-semibold"
                    : "text-slate-300 hover:text-white"
                }
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
