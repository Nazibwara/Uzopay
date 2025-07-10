import React, {useEffect}from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import {
  arrow,
  guard,
  linearline,
  slide1,
  slide2,
  slide3,
  slide4,
} from "../../assets/images";

const testimonials = [
  {
    image: slide1,
    quote: "UPI Autopay",
    title:
      "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
  },
  {
    image: slide2,
    quote: "API Banking",
    title:
      "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
  },
  {
    image: slide3,
    quote: "Payouts",
    title:
      "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
  },
  {
    image: slide4,
    quote: "Bulk Payments",
    title:
      "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
  },
  {
    image: slide2,
    quote: "UPI Autopay",
    title:
      "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
  },
];

const TestimonialSlider = () => {
        useEffect(() => {
      if (window && window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
        });
      }
    }, []);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
        {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-60 darkTheme">
      <Container fluid className="px-35 cstmWidth">
        <div className="headArea position-relative" data-aos="zoom-in">
          <div className="line">
            <img src={linearline} alt="" />
          </div>
          <h2 className="secHead text-center"> Our Expertise</h2>
        </div>

        <p className="midPara text-center" data-aos="zoom-in" data-aos-delay="200">
          Redefining Payment Processing for You
        </p>

        <Slider {...settings} className="cstmArrow mt-3" >
          {testimonials.map((item, index) => (
            <div key={index} className="p-3 "  data-aos="zoom-in">
              <div className="testimonialCards position-relative ">
                <div className="innerCards garediantBorder">
                  <div className="glow"></div>
                  <div className="guardIcon">
                    <img src={guard} alt="" />
                  </div>
                  <div className="sliderImg">
                    <img src={item.image} alt={item.name} className="" />
                  </div>
                  <div className="sliderContent">
                    <h2 className="">{item.quote}</h2>
                    <p>{item.title}</p>
                  </div>
                  <div className="arrowIcon">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default TestimonialSlider;
