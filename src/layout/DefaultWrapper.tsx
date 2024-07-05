//@refresh
"use client";
import React, { useEffect, useState } from "react";
import BacktoTop from "@/components/common/backToTop/BacktoTop";
import UseGsapAnimation from "@/hooks/use-gsap-animation";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useSelector } from "react-redux";
import { setTranslations } from "@/redux/slices/generalSlice";
import { LanguageProvider } from "@/app/dictionaries/dictionaries";
import { useDispatch } from "react-redux";

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

  return (
    <>
      <Header dict={dict?.Header} />
      <UseGsapAnimation>{children}</UseGsapAnimation>
      <Footer dict={dict?.Footer} />
      <BacktoTop />
    </>
  );
};

export default Wrapper;
