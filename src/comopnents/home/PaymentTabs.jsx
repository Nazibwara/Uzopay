import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import {
  linearline,
  righarrow,
  tab1,
  tab2,
  tab3,
  tab4,
  tabBg,
  tabmin1,
  tabmin2,
  tabmin3,
} from "../../assets/images";

const PaymentTabs = () => {
  const [key, setKey] = useState("payments");
  const content = {
    payments: {
      heading: "Elevate Your Online Store's Payment Experience",
      description:
        "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities. Optimize your checkout process and boost customer satisfaction easily.",
      features: [
        {
          icon: (
            <>
              <img src={tabmin1} alt="" />
            </>
          ),
          text: "Optimize Your Checkout",
        },
        {
          icon: (
            <>
              <img src={tabmin2} alt="" />
            </>
          ),
          text: "Fast and Secure",
        },
        {
          icon: (
            <>
              <img src={tabmin3} alt="" />
            </>
          ),
          text: "Smooth Integration",
        },
      ],
    },
    payout: {
      heading: "Streamlined Payout Process",
      description:
        "Efficient payout processing for your platform. Automate and track all transactions with full transparency and speed.",
      features: [
        {
          icon: (
            <>
              <img src={tabmin1} alt="" />
            </>
          ),
          text: "Automated Transfers",
        },
        {
          icon: (
            <>
              <img src={tabmin2} alt="" />
            </>
          ),
          text: "Real-Time Reporting",
        },
        {
          icon: (
            <>
              <img src={tabmin3} alt="" />
            </>
          ),
          text: "Secure APIs",
        },
      ],
    },
    payroll: {
      heading: "Payroll Made Easy",
      description:
        "Disburse salaries, handle compliances, and manage taxes from one secure place. Everything your HR team needs.",
      features: [
        {
          icon: (
            <>
              <img src={tabmin1} alt="" />
            </>
          ),
          text: "Tax Compliant",
        },
        {
          icon: (
            <>
              <img src={tabmin2} alt="" />
            </>
          ),
          text: "Instant Salary Disbursal",
        },
        {
          icon: (
            <>
              <img src={tabmin3} alt="" />
            </>
          ),
          text: "HR Integration",
        },
      ],
    },
    aiBanking: {
      heading: "AI-Powered Banking Tools",
      description:
        "Leverage AI to automate cash flow predictions, budgeting, and spending analytics for smarter business decisions.",
      features: [
        {
          icon: (
            <>
              <img src={tabmin1} alt="" />
            </>
          ),
          text: "Cash Flow AI",
        },
        {
          icon: (
            <>
              <img src={tabmin2} alt="" />
            </>
          ),
          text: "Smart Budgeting",
        },
        {
          icon: (
            <>
              <img src={tabmin3} alt="" />
            </>
          ),
          text: "Intelligent Alerts",
        },
      ],
    },
  };

  return (
    <>
      <section className="py-60">
        <Container fluid className="px-134 cstmWidth">
          <Row>
            <Col md={12}>
              <div className="headArea position-relative" data-aos="zoom-in">
                <div className="line">
                  <img src={linearline} alt="" />
                </div>
                <h2 className="secHead text-center">Enhancing payments</h2>
              </div>

              <p className="midPara text-center mb-60" style={{ width: "50%" }} data-aos="zoom-in" data-aos-delay="200">
                Powering Payments Across Industries
              </p>
            </Col>
            <Col md={12} className="m-auto ">
              <div className="tabArea position-relative" data-aos="zoom-in-up">
                <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
                  <div
                    className=" text-white position-relative"
                    style={{ zIndex: "2" }}
                  >
                    <Nav
                      variant="pills"
                      className="justify-content-between tabHead"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="payments"
                          className={key === "payments" ? "active" : ""}
                        >
                          <div className="tabImg">
                            <img src={tab1} alt="" />
                          </div>{" "}
                          Payments
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="payout">
                          {" "}
                          <div className="tabImg">
                            <img src={tab2} alt="" />
                          </div>{" "}
                          Payout
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="payroll">
                          {" "}
                          <div className="tabImg">
                            <img src={tab3} alt="" />
                          </div>{" "}
                          Payroll
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="aiBanking">
                          {" "}
                          <div className="tabImg">
                            <img src={tab4} alt="" />
                          </div>
                          AI Banking
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content className="tabContent ">
                      {Object.entries(content).map(([keyName, tab], index) => (
                        <Tab.Pane eventKey={keyName} key={index}>
                          <h4 className="">{tab.heading}</h4>
                          <p>{tab.description}</p>
                          <div className="">
                            {tab.features.map((feat, i) => (
                              <div
                                key={i}
                                className="d-flex align-items-center tabList"
                              >
                                <span className="ms-0 text-primary">
                                  {feat.icon}
                                </span>
                                <span>{feat.text}</span>
                              </div>
                            ))}
                          </div>
                          <Button className="mt-3 grdnttBtn " variant="primary">
                            Get Started <img src={righarrow} alt="" />
                          </Button>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="">
        <Container fluid className="px-43 cstmWidth">
          <Row>
            <Col md={12}>
              <div className="cubeArea position-relative">
                <div
                  className="cudeLeft position-relative"
                  style={{ zIndex: "2" }}
                  data-aos="zoom-in"
                >
                  <h1>
                    Let’s build the <br />
                    future of finance together
                  </h1>
                </div>
                <div
                  className="cubeRight position-relative"
                  style={{ zIndex: "2" }}
                  data-aos="zoom-in"
                >
                  <Button className="mt-3 grdnttBtn " variant="primary">
                    Get Started <img src={righarrow} alt="" />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PaymentTabs;
