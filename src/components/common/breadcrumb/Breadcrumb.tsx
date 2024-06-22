import React from "react";
import WorkBg from "../../../../public/assets/img/bg/work-bg.jpg";

type TProps = {
  title: string | undefined;
};
const Breadcrumb = ({ title }: TProps) => {
  return (
    <section
      className="page-title-area page-title-spacing p-relative zindex-1 "
      style={{ backgroundImage: `url(${WorkBg.src})` }}
    >
      <div className="ms-overlay ms-overlay8 p-absolute zindex--1"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-9">
            <h3 className="ms-page-title text-center lh-1">{title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
