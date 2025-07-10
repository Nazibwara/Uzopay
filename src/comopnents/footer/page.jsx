import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { fb, insta, twi, upArrow, uzopay } from "../../assets/images";

const Footer = () => {
  return (
    <>
      <footer className="text-white py-96">
        <Container fluid className="px-96 cstmWidth">
          <Row className="mb-4 justify-content-between">
            <Col md={5} className="mb-4">
              <div className="footerLog">
                <img src={uzopay} className="" alt="IRHN Logo" />
              </div>
              <p className="footerPara">
                Our payment gateway simplifies transactions for e-commerce
                businesses, delivering fast and secure processing. With smooth
                integration, we enhance your store's payment capabilities.
                Optimize your checkout process and boost customer satisfaction
                easily.
              </p>
              <div className="d-flex gap-3">
                <div className="footer-icon">
                  <img src={fb} alt="" />
                </div>
                <div className="footer-icon">
                  <img src={twi} alt="" />
                </div>
                <div className="footer-icon">
                  <img src={insta} alt="" />
                </div>
              </div>
            </Col>
            
            <Col md={7}>
           
            <div className="rightFoot">
              <Col md={2} className="mb-4">
                <h6 className="navHead">Payment</h6>
                <ul className="list-unstyled footerNav">
                  <li>
                    <a>Payment Gateway</a>
                  </li>
                  <li>
                    <a>Payment Links</a>
                  </li>
                  <li>
                    <a>Payment Methods</a>
                  </li>
                  <li>
                    <a>Bulk Payment</a>
                  </li>
                  <li>
                    <a>Invoice</a>
                  </li>
                </ul>
              </Col>

              <Col md={2} className="mb-4">
                <h6 className="navHead">AI Banking</h6>
                <ul className="list-unstyled footerNav">
                  <li>
                    <a>Current Account</a>
                  </li>
                  <li>
                    <a>Accounting</a>
                  </li>
                  <li>
                    <a>API Banking</a>
                  </li>
                  <li>
                    <a>UPI Autopay</a>
                  </li>
                  <li>
                    <a>Tax Payment</a>
                  </li>
                </ul>
              </Col>

              <Col md={2} className="mb-4">
                <h6 className="navHead">Company</h6>
                <ul className="list-unstyled footerNav">
                  <li>
                    <a>Cards</a>
                  </li>
                  <li>
                    <a>CMS</a>
                  </li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>Contact us</a>
                  </li>
                </ul>
              </Col>
            </div>
             </Col>
          </Row>
        </Container>
      </footer>
      <div className="bottomFooter">
        <Container fluid className="px-96 cstmWidth">
          <div className="d-flex justify-content-between align-items-center">
            <span className="">© 2025 UzOPay</span>
            <div className="d-flex align-items-center gap-3">
              <span className="">Terms of Service</span>
              <span className="">Privacy Policy</span>
              <button
                className="btn btn-outline-light rounded-circle p-2"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img src={upArrow} alt="" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
