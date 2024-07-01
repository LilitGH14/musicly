//@refresh
"use client";
import React, { useEffect } from "react";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import UseGsapAnimation from "@/hooks/use-gsap-animation";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useAppDispatch } from "@/redux/hooks";
import { getDictionary } from "@/dictionaries/dictionaries";
import { setTranslations } from "@/redux/slices/generalSlice";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getDictionary("en").then((res) => {
      // dispatch(setTranslations(res));
    });
  }, []);

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
