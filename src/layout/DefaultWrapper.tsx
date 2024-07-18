//@refresh
"use client";
import React, { useEffect, useState } from "react";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
import UseGsapAnimation from "@/hooks/use-gsap-animation";
import Header from "./desktop/header/Header";
import Footer from "./desktop/footer/Footer";
import { useSelector } from "react-redux";
import { setTranslations } from "@/redux/slices/generalSlice";
import { LanguageProvider } from "@/app/dictionaries/dictionaries";
import { useDispatch } from "react-redux";
import { isMobile } from "react-device-detect";
import MobileHeader from "./mobile/header/Header";
import MobileFooter from "./mobile/footer/Footer";
import MobileMenu from "./mobile-menu/MobileMenu";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const dispatch = useDispatch();

  const dictSelector = useSelector((store: any) => store.general.dictionary);
  const selectedLang = useSelector((store: any) => store.general.selectedLang);

  const [dict, setDict] = useState<any>({});

  useEffect(() => {
    LanguageProvider.getDictionary(selectedLang).then((res: any) => {
      dispatch(setTranslations(res));
    });
  }, [dispatch, selectedLang]);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  if (isMobile) {
    <>
      <MobileHeader dict={dict} />
      <UseGsapAnimation>{children}</UseGsapAnimation>
      <MobileFooter dict={dict?.Footer} />
      <MobileMenu />
      <BacktoTop />
    </>;
  }

  return (
    <>
      <Header dict={dict} />
      <UseGsapAnimation>{children}</UseGsapAnimation>
      <Footer dict={dict?.Footer} />
      <BacktoTop />
    </>
  );
};

export default Wrapper;
