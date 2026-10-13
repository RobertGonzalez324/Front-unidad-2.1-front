import { Nav } from "react-bootstrap";

function SidebarApp({ vistaActual, cambiarVista }) {
  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "tienda", label: "Tienda" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <aside
      style={{
        width: "220px",
        minHeight: "calc(100vh - 72px)",
        background: "#f8fafc",
        borderRight: "1px solid #e2e8f0",
        padding: "1.25rem 1rem",
      }}
    >
      <div className="fw-bold text-primary mb-4" style={{ fontSize: "1.15rem" }}>
        Menú
      </div>

      <Nav className="flex-column gap-2">
        {menuItems.map((item) => (
          <Nav.Link
            key={item.id}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              cambiarVista(item.id);
            }}
            className={"px-3 py-2 rounded-3 text-decoration-none " +
              (vistaActual === item.id
                ? "bg-primary text-white fw-semibold"
                : "text-dark")}
            style={{
              transition: "all 0.2s ease",
            }}
          >
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </aside>
  );
}

export default SidebarApp;
