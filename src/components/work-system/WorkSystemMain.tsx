"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import { getDictionary } from "@/dictionaries/dictionaries";
import WorkSystemArea from "./WorkSystemArea";

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
      <WorkSystemArea dict={dict} />
    </>
  );
};

export default WorkSystemMain;
