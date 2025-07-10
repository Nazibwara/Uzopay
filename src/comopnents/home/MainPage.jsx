import React, { useEffect } from "react";
import HeroBanner from "../banner/HeroBanner";
import TestimonialSlider from "./Testimonial";
import { ministar } from "../../assets/images";
import PayoutPage from "./PayoutPage";
import Partner from "./Partner";
import PaymentTabs from "./PaymentTabs";
import FeedBack from "./FeedBack";

const MainPage = () => {

  return (
    <>
      <HeroBanner
        heading="New Era of Finance Solutions"
        subtext="Fast Funds, Flexible Choices: Quick Settlement & Multiple Payment Methods"
        buttonText=" Explore more"
        subtext2={
          <>
            Empowering Your Financial Future, Today and Tomorrow{" "}
            <span>
              <img src={ministar} alt="" /> One-Stop Solution
            </span>
          </>
        }
      />
      <TestimonialSlider />
      <PayoutPage />
      <Partner />
      <PaymentTabs />
      <FeedBack />
    </>
  );
};

export default MainPage;
