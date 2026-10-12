import { useEffect } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

function InicioView({ cambiarVista }) {
  useEffect(() => {
    document.title = "Inicio | UVM Shop";
  }, []);

  return (
    <Container className="py-5">
      <Card className="shadow-sm border-0 mb-5">
        <Card.Body className="p-5 text-center">
          <p className="text-primary fw-semibold mb-2">Bienvenido</p>
          <h1 className="display-5 fw-bold mb-3">Inventario y tienda UVM</h1>
          <p className="text-muted mx-auto mb-4" style={{ maxWidth: 700 }}>
            Explora productos, revisa promociones y ponte en contacto con nosotros para
            resolver dudas sobre pedidos, envíos o atención personalizada.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button variant="primary" onClick={() => cambiarVista("tienda")}>
              Ver tienda
            </Button>
            <Button variant="outline-primary" onClick={() => cambiarVista("contacto")}>
              Entrar a contacto
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <h4>Productos destacados</h4>
              <p className="text-muted mb-0">
                Encuentra artículos con buena variedad, calidad y disponibilidad para tu negocio o uso personal.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <h4>Atención rápida</h4>
              <p className="text-muted mb-0">
                Nuestro equipo responde preguntas sobre pedidos, precios y opciones de compra en tiempo real.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <h4>Compra segura</h4>
              <p className="text-muted mb-0">
                Todo el proceso está pensado para que sea claro, directo y confiable desde la tienda hasta la entrega.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default InicioView;
