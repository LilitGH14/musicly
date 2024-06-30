"use client";
import React, { useEffect, useState } from "react";
import ChooseUsArea from "./ChooseUsArea";
import FaqArea from "./FaqArea";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import PageHeader from "../common/page-header/PageHeader";
import aboutBgImg from "../../../public/assets/img/about/about.jpg";

const AboutMainArea = () => {
  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    getDictionary("en").then((res) => {
      setDict(res);
    });
  }, []);

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
