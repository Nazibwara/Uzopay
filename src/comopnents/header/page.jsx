import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import { uzopay } from "../../assets/images";
const Header = () => {
const angleRef = useRef(0);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef();

  useEffect(() => {
    const animate = () => {
      angleRef.current = (angleRef.current + 1) % 360;

      // Smooth gradient update without full re-render
      setBackgroundStyle({
        background: `linear-gradient(${angleRef.current}deg, rgba(0, 0, 0, 0.16) 16%, rgba(255, 255, 255, 0.72) 72%, rgba(255, 255, 255, 0.89) 89%)`,
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <Navbar expand="lg" className="custom-navbar darkTheme py-0">
      <Container fluid className="px-100 cstmWidth">
        <Row className="w-100 justify-content-between align-items-center">
          <Col md={2} sm={3}>
            <Navbar.Brand href="/" className="logoArea d-block me-0">
              <img src={uzopay} className="w-100" alt="IRHN Logo" />
            </Navbar.Brand>
          </Col>

          <Col md={7} sm={3}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="menuList justify-content-center"
            >
              <Nav className="">
                <Nav.Link href="/">Products</Nav.Link>
                <Nav.Link href="/">Ai Banking</Nav.Link>
                <Nav.Link href="/">Payments</Nav.Link>
                <Nav.Link href="/">Payouts</Nav.Link>
                <Nav.Link href="/">Contact us</Nav.Link>
              </Nav>
              <div className="headerBtns mobHead">
            <Button
                className="normalBtn logIn"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {" "}
                <span
                  className={` ${isHovered ? "animated-border" : ""}`}
                  style={backgroundStyle}
                />
                <span className="btn-text">Log In</span>
              </Button>
              <Button className="animated-btn normalBtn outLineBtn">
                <span className="animated-border" style={backgroundStyle} />
                <span className="btn-text">Sign up</span>
              </Button>
              </div>
            </Navbar.Collapse>
          </Col>
          <Col md={3} className="firstView">
            <div className="headerBtns ">
              <Button
                className="normalBtn logIn"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {" "}
                <span
                  className={` ${isHovered ? "animated-border" : ""}`}
                  style={backgroundStyle}
                />
                <span className="btn-text">Log In</span>
              </Button>
              <Button className="animated-btn normalBtn outLineBtn">
                <span className="animated-border" style={backgroundStyle} />
                <span className="btn-text">Sign up</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
