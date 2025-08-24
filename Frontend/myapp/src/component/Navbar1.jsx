import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from 'react-bootstrap'
import './index.css'

export const Navbar1 = () => {
  return (
    <Nav  fixed ="top" className="bg-light py-3">
      <Container  fluid>
        <Row  className="w-100">
          <Col className="d-flex gap-3  align-items-center">
            <Nav.Item>
              <Link className="nav-link" to="/laptops">Laptops</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/desktops">Desktops</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/printers">Printers</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/monitors">Monitors</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/accesories">Accessories</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/care">Care Pack</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/sale">Sale</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/support">Support</Link>
            </Nav.Item>




          </Col>
        </Row>
      </Container>
    </Nav>
  );
};
