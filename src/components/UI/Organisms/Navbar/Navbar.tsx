import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Components
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// Locales
import { useTranslation } from "react-i18next";

// Typings
import { LanguageList } from "@/typings/i18next";

const NavbarComponent: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const { i18n } = useTranslation("common");
  const { language } = i18n;

  const { pathname } = useLocation();

  const navbarRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleNavbarDropdownStatus = () => {
    setExpanded((prevValue) => !prevValue);
  };
  const closeNavbarDropdown = () => {
    setExpanded(false);
  };

  const handleLogoClick = () => {
    const regex = new RegExp(`^/(${Object.values(LanguageList).join("|")})$`);
    if (regex.test(pathname)) {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="navbar navbar-dark bg-dark border-bottom"
        expanded={expanded}
        ref={navbarRef as React.RefObject<HTMLDivElement>}
      >
        {/*
        Use key={pathname} to force the update of the component make links have correct classes
        https://github.com/react-bootstrap/react-router-bootstrap/issues/242#issuecomment-613761912
      */}
        <Container key={pathname}>
          <LinkContainer to={`/${language}`} onClick={handleLogoClick}>
            <Navbar.Brand onClick={closeNavbarDropdown} className="py-0">
              Website Name or Logo
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            aria-controls="navbar-collpsable"
            onClick={toggleNavbarDropdownStatus}
          />
          <Navbar.Collapse onClick={closeNavbarDropdown} id="navbar-collpsable">
            <Nav className="ms-auto">
              <LinkContainer to={`/${language}/`}>
                <Nav.Link>Link One</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${language}/`}>
                <Nav.Link>Link Two</Nav.Link>
              </LinkContainer>
              <LinkContainer to={`/${language}/`}>
                <Nav.Link>Link Three</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
