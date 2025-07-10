import { useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const HeroBanner = ({ heading, subtext, buttonText, subtext2}) => {
      useEffect(() => {
    if (window && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);
  return (
    <div
      className="hero-banner darkTheme d-flex align-items-start overflow-hidden"

    >
      <Container fluid className="text-center text-white position-relative cstmWidth " style={{zIndex:"2"}}>
        <Row>
          <Col className="10">
            <div className="bannerBox">
              <h1 className="fw-bold" data-aos="zoom-in">{heading}</h1>
              <p className="subPara" data-aos="fade-up" data-aos-delay="200">{subtext}</p>
              <Button className="btn1 bannerBtn" data-aos="fade-up" data-aos-delay="300"> <a><span>{buttonText}</span></a></Button>
              <p className="subText" data-aos="fade-up" data-aos-delay="400">{subtext2}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default HeroBanner;
