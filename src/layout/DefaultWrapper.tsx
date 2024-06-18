//@refresh
"use client";
import React from "react";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";
import HeaderOne from "./header/HeaderOne";
import FooterOne from "./footer/FooterOne";
import HeaderTwo from "./header/HeaderTwo";
import FooterTwo from "./footer/FooterTwo";
import HeaderThree from "./header/HeaderThree";
import FooterThree from "./footer/FooterThree";
import UseGsapAnimation from "@/hooks/use-gsap-animation";



interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();

  return (
    <>
      <BacktoTop />
      {(() => {
        switch (pathName) {
          case '/home-2':
            return <HeaderTwo />
          case '/home-3':
            return <HeaderThree />
          default:
            return <HeaderOne />

        }
      })()}
      <UseGsapAnimation>{children}</UseGsapAnimation>

      {(() => {
        switch (pathName) {
          case "/":
            return <FooterOne />
          case "/home-2":
            return <FooterTwo />
          default:
            return <FooterThree />
        }
      })()}
    </>
  );
};

export default Wrapper;
