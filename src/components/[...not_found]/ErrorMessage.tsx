"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import errorImg from "../../../public/assets/img/error/404.png";
import { getDictionary } from "@/app/dictionaries/dictionaries";

const ErrorMessage = () => {
  const [dict, setDict] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    getDictionary("en").then((res) => {
      setDict(res);
    });
  }, []);

  return (
    <main>
      <div className="header-adjustment bg-common-black">
        <div className="adjust-header-space bg-common-black"></div>
      </div>
      <div className="ms-error-area section-spacing pt-70">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12">
              <div className="ms-error-wrapper fade_bottom">
                <div className="ms-error-thumb">
                  <Image
                    src={errorImg}
                    style={{ width: "100%", height: "auto" }}
                    alt="img"
                  />
                </div>
                <div className="ms-error-content">
                  <h2 className="error-title">{dict.Error_404}</h2>
                  <h4 className="ms-error-content-subtitle">
                    {dict.Page_Not_Found}
                  </h4>
                  <div className="unfill__btn feature-unfill_btn">
                    <Link href="/" className="border-btn">
                      {dict.Back_To_Home}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorMessage;
