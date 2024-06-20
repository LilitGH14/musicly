import React from "react";
import BrandSectionOne from "../SliderElements/BrandSlider/BrandSectionOne";
import HeroOne from "./HeroOne";
import TextScrollArea from "../SliderElements/TextScrollSlider/TextScrollArea";
import PopularAreaOne from "../SliderElements/PopularSlider/PopularAreaOne";
import WorkArea from "./WorkArea";
import TestimonialSliderOne from "../SliderElements/TestimonialSlider/TestimonialSliderOne";
import InspiredSongsSection from "./FunctionBandsSectionOne";

const HomeMainArea = () => {
  return (
    <>
      <BrandSectionOne />
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
