import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { hexagon, righarrow } from "../../assets/images";
 
const scrollSections = [
  {
    title: "Comprehensive Documentation",
    description:
      "Access clear, detailed documentation that simplifies integration and accelerates your payout setup.",
  },
  {
    title: "Quick Start SDKs",
    description:
      "Leverage our ready-to-use SDKs for various programming languages, enabling quick and smooth payout implementation.",
  },
  {
    title: "Sandbox Environment",
    description:
      "Test and refine your payout integration in a secure sandbox environment before going live, ensuring a seamless launch.",
  },
];
 
const PayoutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
 
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
 
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.scrollHeight;
      const windowHeight = window.innerHeight;
 
      const scrollY = window.scrollY + windowHeight * 0.5;
      const sectionOffsets = scrollSections.map((_, index) => {
        return (
          container.offsetTop +
          (index * containerHeight) / scrollSections.length
        );
      });
 
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollY >= sectionOffsets[i]) {
          setActiveIndex(i);
          break;
        }
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <section
      className="py-120 darkTheme circleBg position-relative"
      style={{ zIndex: "2" }}
      ref={containerRef}
    >
      <Container fluid className="px-35 cstmWidth">
        <Row className="align-items-start">
          {/* Sticky Left Section */}
          <Col md={6}>
            <div className="sticky-wrapper payOutBox">
              <div className="sideHead">
                <a href="javascript:void(0)">Payout Service Centric</a>
                <h3 className="payOutHead">
                  Streamlined for Payout Ease and Efficiency
                </h3>
              </div>
 
 
              <div className="slideContentWrapper position-relative">
                
              <div className="progressLine">
                <div
                  className="progressArrow"
                  style={{ top: `${activeIndex * 33.33}%` }}
                />
              </div>
                {scrollSections.map((item, index) => (
                  <div
                    key={index}
                    className={`slideArea ${
                      activeIndex === index ? "active" : "inactive"
                    }`}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
 
                 <div className="grdnttBtnBox">
                      <Button className="grdnttBtn">Get Started <img src={righarrow} alt="" /> </Button>
                </div>
            </div>
          </Col>
 
          {/* Right Section - Image */}
          <Col md={6}>
            <div className="hexaSvg text-center" data-aos="zoom-in-up">
              <img src={hexagon} alt="Hexagon" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
 
export default PayoutPage;