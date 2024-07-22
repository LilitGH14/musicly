"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ForgetForm from "./ForgetForm";

const ForgetPasswordMainArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary?.ForgetPassword
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <section className="bb-login-area">
      <div className="container">
        <div className="bb-maxw-510 mx-auto">
          <div className="bb-login-wrap  ms-login-space ms-bg-2">
            <h3 className="bb-title4 text-center">
              {dict?.ForgetPassword_description}
            </h3>
            <ForgetForm dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPasswordMainArea;
