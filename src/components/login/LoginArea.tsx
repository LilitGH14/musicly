"use client";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const LoginArea = () => {
  const dictSelector = useSelector(
    (store: any) => store.general.dictionary?.Login
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
                {dict?.Login_description}
              </h3>
              <LoginForm dict={dict} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginArea;
