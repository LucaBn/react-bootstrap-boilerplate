import React from "react";

// Components
import { Col, Container, Row } from "react-bootstrap";

// Locales
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Row>
        <Col xs={12} sm={{ span: 10, offset: 1 }} lg={{ span: 6, offset: 3 }}>
          <h1>{t("website-name")}</h1>
          <p className="white-space-pre-line lh-lg">
            {t("website-description")}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
