// TestimonialSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import { dummyusericon } from "../../assets/images";

const feedbacks = [
  {
    name: "Mickael Grants",
    role: "CEO",
    image: dummyusericon,
    stars: 5,
    quote:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Mickael",
    role: "CEO",
    image: dummyusericon,
    stars: 5,
    quote:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Loe Grants",
    role: "CEO",
    image: dummyusericon,
    stars: 3,
    quote:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
    {
    name: " Grants",
    role: "CEO",
    image: dummyusericon,
    stars: 5,
    quote:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "Joe",
    role: "CEO",
    image: dummyusericon,
    stars: 5,
    quote:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
  {
    name: "John",
    role: "CEO",
    image: dummyusericon,
    stars: 3,
    quote:
      "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
  },
];

const FeedBack = () => {

    const settings = {
    centerMode: true,
    centerPadding: "1px",
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    speed: 500,
    infinite: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-96 feedBackBg position-relative">
      <Container fluid className="px-56 cstmWidth">
        <Row>
          <Col md={6} className="m-auto">
            <div className="payOutBox text-center">
              <a href="javascript:void(0)" data-aos="zoom-in">Client Feedbacks</a>
              <h3 className="feedBackHead mb-4" data-aos="zoom-in" data-aos-delay="200">
                Trusted by
                <br />
                Businesses Like Yours
              </h3>
            </div>
          </Col>
          <Col md={12}>
            <div className="feedBackSlides cstmArrow ">
              <Slider {...settings}>
                {feedbacks.map((t, i) => (
                  <div className="p-2" data-aos="zoom-in-up">
                  <div className="feedBackCard" key={i}>
                    <p className="quote">{t.quote}</p>
                    <div className="slideContent">
                    <div className="author-info">
                      <div className="userIcon">  <img src={t.image} alt={t.name} className="avatar" /></div>
                    
                      <div>
                        <h6>{t.name}</h6>
                        <p>{t.role}</p>
                      </div>
                      
                    </div>
                    <div className="stars">
                        {[...Array(5)].map((_, j) => (
                          <FaStar
                            key={j}
                            color={j < t.stars ? "#6E41E2" : "#444"}
                            size={14}
                          />
                        ))}
                      </div>
                      </div>
                  </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeedBack;
