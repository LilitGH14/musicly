"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { LanguageProvider } from "@/app/dictionaries/dictionaries";
import WorkSystemArea from "./WorkSystemArea";

const WorkSystemMain = () => {
  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    LanguageProvider.getDictionary().then((res) => {
      setDict(res);
    });
  }, []);

  return (
    <>
      <Breadcrumb title={dict.How_it_works_title??"How it works"} />
      <WorkSystemArea dict={dict} />
    </>
  );
};

export default WorkSystemMain;
