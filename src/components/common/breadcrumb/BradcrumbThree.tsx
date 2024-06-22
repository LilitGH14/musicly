import React from "react";
import EventBg from "../../../../public/assets/img/event/event-bg-4.jpg";
import Link from "next/link";

type TProps = {
  title: string | undefined;
};
const BradcrumbThree = ({ title }: TProps) => {
  return (
    <>
      <section
        className="page-title-area page-title-spacing p-relative zindex-1 "
        style={{ backgroundImage: `url(${EventBg.src})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-9 d-flex flex-column align-items-center">
              <h3 className="ms-page-title text-center lh-1">{title}</h3>
              <Link href="/new-forum" className="add-story-btn">Leave a piece of inspiration</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BradcrumbThree;
