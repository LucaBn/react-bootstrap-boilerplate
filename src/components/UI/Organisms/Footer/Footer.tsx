import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 border-top">
      <Container>
        <Row>
          <Col xs={12}>
            <p>Footer</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
