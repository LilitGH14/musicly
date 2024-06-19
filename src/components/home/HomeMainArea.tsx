import React from "react";
import BrandSectionOne from "../SliderElements/BrandSlider/BrandSectionOne";
import HeroOne from "./HeroOne";
import TextScrollArea from "../SliderElements/TextScrollSlider/TextScrollArea";
import PopularAreaOne from "../SliderElements/PopularSlider/PopularAreaOne";
import WorkArea from "./WorkArea";
import FunctionBandsSectionOne from "./FunctionBandsSectionOne";
import TestimonialSliderOne from "../SliderElements/TestimonialSlider/TestimonialSliderOne";

const HomeMainArea = () => {
  return (
    <>
      <BrandSectionOne />
      <HeroOne />
      <TextScrollArea />
      <PopularAreaOne />
      <WorkArea />
      <FunctionBandsSectionOne />
      <TestimonialSliderOne />
    </>
  );
};

export default HomeMainArea;
