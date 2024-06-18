//@refresh
"use client";
import React from "react";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import UseGsapAnimation from "@/hooks/use-gsap-animation";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <UseGsapAnimation>{children}</UseGsapAnimation>
      <Footer />
      <BacktoTop />
    </>
  );
};

export default Wrapper;
