"use client";
import React, { useEffect, useState } from "react";
import AboutVideoArea from "./AboutVideoArea";
import ChooseUsArea from "./ChooseUsArea";
import FaqArea from "./FaqArea";
import { getDictionary } from "@/app/dictionaries/dictionaries";

export default function AboutMainArea() {
  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    getDictionary("en").then((res) => {
      setDict(res);
    });
  }, []);

  return (
    <>
      <AboutVideoArea dict={dict} />
      <ChooseUsArea dict={dict} />
      <FaqArea dict={dict} />
    </>
  );
}
