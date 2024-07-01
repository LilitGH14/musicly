"use client";
import React, { useEffect, useState } from "react";
import ChooseUsArea from "./ChooseUsArea";
import FaqArea from "./FaqArea";
import PageHeader from "../common/page-header/PageHeader";
import aboutBgImg from "../../../public/assets/img/about/about.jpg";
import { useSelector } from "react-redux";

const AboutMainArea = () => {
  const dictSelector = useSelector((store: any) => store.dictionary);

  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    dictSelector && setDict(dictSelector.About);
    console.log(dictSelector,'dictSelector')
  }, [dictSelector]);

  return (
    <main className="pt-90">
      <PageHeader
        dict={dict}
        imageSrc={aboutBgImg.src}
        title="About_title"
        description="About_text"
      />
      <ChooseUsArea dict={dict} />
      <FaqArea dict={dict} />
    </main>
  );
};
export default AboutMainArea;
