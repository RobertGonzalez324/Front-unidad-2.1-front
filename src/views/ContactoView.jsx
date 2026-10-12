import { useContext, useEffect, useState } from "react";
import { Container, Card, Form, Button, Row, Col, Alert } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

function ContactoView() {
  const { login, usuarioAutenticado, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Contacto | UVM Shop";
  }, []);

  const manejarLogin = async (e) => {
    e.preventDefault();
    setError("");

    const respuesta = await login(email, contraseña);
    if (respuesta) {
      setError(respuesta);
      return;
    }

    setEmail("");
    setContraseña("");
  };

  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col md={5}>
          <Card className="shadow-sm border-0 h-100 rounded-4">
            <Card.Body className="p-4">
              <h3 className="mb-3 text-slate-800">Contacto</h3>
              <p className="text-muted">
                Si necesitas ayuda con pedidos, información de productos o atención personalizada, contáctanos.
              </p>
              <ul className="list-unstyled mt-4 space-y-2 text-slate-700">
                <li><strong>Email:</strong> robertagf907@gmail.com</li>
                <li><strong>Teléfono:</strong> 0424-7210667</li>
                <li><strong>Horario:</strong> Lunes a Sábado, 9:00 - 18:00</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="shadow-sm border-0 h-100 rounded-4">
            <Card.Body className="p-4">
              <h3 className="mb-3 text-slate-800">
                {usuarioAutenticado ? "Sesión activa" : "Iniciar sesión"}
              </h3>

              {usuarioAutenticado ? (
                <div>
                  <p className="text-success">Ya has iniciado sesión correctamente.</p>
                  <Button variant="outline-danger" onClick={logout}>
                    Cerrar sesión
                  </Button>
                </div>
              ) : (
                <Form onSubmit={manejarLogin} className="space-y-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="correo@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="••••••••"
                      value={contraseña}
                      onChange={(e) => setContraseña(e.target.value)}
                      required
                    />
                  </Form.Group>

                  {error && <Alert variant="danger">{error}</Alert>}

                  <Button type="submit" variant="primary">
                    Iniciar sesión
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactoView;
