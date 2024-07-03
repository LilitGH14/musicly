"use client";
import LoginForm from "@/form/login-form";
import WorkBg from "../../../public/assets/img/bg/main-bg.jpg";
import PageHeader from "../common/page-header/PageHeader";
import { useEffect, useState } from "react";
import { getDictionary } from "@/app/dictionaries/dictionaries";

const LoginArea = () => {
  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    getDictionary("en").then((res) => {
      setDict(res);
    });
  }, []);

  return (
    <main className="pt-90">
      <PageHeader dict={dict} imageSrc={WorkBg.src} title="Login_title" />
      <section className="ms-login-area pb-20 pt-130">
        <div className="container">
          <div className="ms-maxw-510 mx-auto">
            <div className="ms-login-wrap  ms-login-space ms-bg-2">
              <h3 className="ms-title4 mb-50 text-center">
                {dict.Login_description}
              </h3>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginArea;
