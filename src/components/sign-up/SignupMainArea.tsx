"use client";
import React, { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import { useSelector } from "react-redux";

const SignupMainArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary?.Registration
  );

  const [dict, setDict] = useState<{ [key: string]: string } | null>(null);

  useEffect(() => {
    dictSelector && setDict(dictSelector);
  }, [dictSelector]);

  return (
    <main className="pt-90">
      <section className="ms-login-area pb-30 pt-30">
        <div className="container">
          <div className="ms-maxw-510 mx-auto">
            <div className="ms-login-wrap  ms-login-space ms-bg-2">
              <h3 className="ms-title4 mb-50 text-center">
                {dict?.Signup_description}
              </h3>
              <RegisterForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupMainArea;
