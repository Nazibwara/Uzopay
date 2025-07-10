import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  ellipse,
  linearline,
  qucikstart,
  randmLine,
  video1,
  video2,
  video3,
  video4,
  whitearrow,
} from "../../assets/images";
const Partner = () => {
  return (
    <>
      <section
        className="py-120 darkTheme lineBg position-relative overflow-hidden"
        style={{ zIndex: "2" }}
      >
        <Container fluid className="px-100 cstmWidth">
          <Row>
            <Col md={12}>
              <div className="headArea position-relative" data-aos="zoom-in-up">
                <div className="line">
                  <img src={linearline} alt="" />
                </div>
                <h2 className="secHead text-center"> Reasons to Partner</h2>
              </div>

              <p className="midPara text-center mb-60" style={{ width: "50%" }} data-aos="zoom-in-up" data-aos-delay="200">
                Exceptional Support for Your Success
              </p>
            </Col>
            <Col md={12} className="" style={{ margin: "60px 0" }}>
              <div className="partnerCard"  data-aos="zoom-in">
                <div className="srtBox innerCard">
                  <div className="cardImg">
                    <img src={video1} alt="" />
                  </div>
                  <div className="cardContent">
                    <h5>Optimize customer journeys</h5>
                    <p>
                      Streamlined transactions enhancing efficiency and customer
                      satisfaction.
                    </p>
                    <button>
                      Explore <img src={whitearrow} alt="" />
                    </button>
                  </div>
                </div>
                <div className="LrgBox innerCard">
                  <div className="cardContent">
                    <h5>Faster Processing Time</h5>
                    <p>
                      Quick and efficient payment processing for a seamless user
                      experience.
                    </p>
                    <button>
                      Learn more <img src={whitearrow} alt="" />
                    </button>
                  </div>
                  <div className="cardImg">
                    <img src={video2} alt="" />
                  </div>
                </div>
              </div>
              <div className="partnerCard mb-0"  data-aos="zoom-in" data-aos-delay="200">
                <div className="LrgBox innerCard">
                  <div className="cardImg">
                    <img src={video3} alt="" />
                  </div>
                  <div className="cardContent">
                    <h5>Flexible Solutions</h5>
                    <p>
                      Customizable options to meet the unique needs of your
                      business.
                    </p>
                    <button>
                      Explore <img src={whitearrow} alt="" />
                    </button>
                  </div>
                </div>

                <div className="srtBox innerCard">
                  <div className="cardContent">
                    <h5>Effortless Integration</h5>
                    <p>
                      Simple API integration with your existing systems and
                      platforms.
                    </p>
                    <button>
                      Learn more <img src={whitearrow} alt="" />
                    </button>
                  </div>
                  <div className="cardImg">
                    <img src={video4} alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="py-5 position-relative quickBg"
        style={{ zIndex: "2" }}
       
      >
        <Container fluid className="px-80 cstmWidth">
          <Row>
            <Col md={6} className="position-relative mbPadding" data-aos="zoom-in">
              <div className="curveLine">
                <img src={randmLine} alt="" />
              </div>
              <div className="ellipseBg">
                <img src={ellipse} alt="" />
              </div>
              <div className="payOutBox">
                <a href="javascript:void(0)">Reliable, and Efficient</a>
                <h3 className="payOutHead mb-4">
                  Simplify the <br />
                  payments process
                </h3>
                <p className="staticPara">
                  Tools crafted to simplify and enhance your payout processes.
                </p>
              </div>
            </Col>
            <Col md={6} data-aos="zoom-in">
              <div className="sideVideo text-end">
                <img src={qucikstart} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Partner;
