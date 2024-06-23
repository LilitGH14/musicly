"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import WorkSystemAreaFour from "./WorkSystemAreaFour";
import { getDictionary } from "@/app/dictionaries/dictionaries";

const WorkSystemMain = () => {
  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    getDictionary("en").then((res) => {
      setDict(res);
    });
  }, []);

  return (
    <>
      <Breadcrumb title={dict.How_it_works_title} />
      <WorkSystemAreaFour  dict={dict}/>
    </>
  );
};

export default WorkSystemMain;
