import React from "react";
import HeroOne from "./HeroOne";
import TextScrollArea from "../SliderElements/TextScrollSlider/TextScrollArea";
import PopularAreaOne from "../SliderElements/PopularSlider/PopularAreaOne";
import WorkArea from "./WorkArea";
import TestimonialSliderOne from "../SliderElements/TestimonialSlider/TestimonialSliderOne";
import InspiredSongsSection from "./FunctionBandsSectionOne";
import BrandSection from "../SliderElements/BrandSlider/BrandSection";

const HomeMainArea = () => {
  return (
    <>
      <BrandSection />
      <HeroOne />
      <TextScrollArea />
      <PopularAreaOne />
      <WorkArea />
      <InspiredSongsSection />
      <TestimonialSliderOne />
    </>
  );
};

export default HomeMainArea;
