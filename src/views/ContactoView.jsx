import { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function ContactoView() {
  useEffect(() => {
    document.title = "Contacto | UVM Shop";
  }, []);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
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
      </Row>
    </Container>
  );
}

export default ContactoView;
