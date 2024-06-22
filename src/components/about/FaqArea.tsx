"use client";
import React, { useEffect, useState } from "react";

const data = [
  {
    collapse_id: "collapseOne",
    id: "headingOne",
    question: "Faq_question_1",
    answer: "Faq_answer_1",
  },
  {
    collapse_id: "collapseTwo",
    id: "headingTwo",
    question: "Faq_question_2",
    answer: "Faq_answer_2",
  },
  {
    collapse_id: "collapseThree",
    id: "headingThree",
    question: "Faq_question_3",
    answer: "Faq_answer_3",
  },
  {
    collapse_id: "collapseFour",
    id: "headingFour",
    question: "Faq_question_4",
    answer: "Faq_answer_4",
  },
  {
    collapse_id: "collapseFive",
    id: "headingFive",
    question: "Faq_question_5",
    answer: "Faq_answer_5",
  },
  {
    collapse_id: "collapseSix",
    id: "headingSix",
    question: "Faq_question_6",
    answer: "Faq_answer_6",
  },
];

type TFaqItem = {
  collapse_id: string;
  id: string;
  question: string;
  answer: string;
};

type TWrapperClass = {
  wrapperBgClass?: string;
};

const FaqArea = ({ wrapperBgClass }: TWrapperClass) => {
  const [faqData, setFaqData] = useState<TFaqItem[]>([]);

  useEffect(() => {
    setFaqData(data);
  }, []);

  return (
    <section
      className={`ms-faq-area pt-50 pb-30 fix ${
        wrapperBgClass ? wrapperBgClass : ""
      }`}
    >
      <div className="bd-accordion-fix">
        <div className="container">
          <div className="row align-items-center mb-15 bdFadeUp">
            <div className="col-xl-7 col-lg-10">
              <div className="section__title-wrapper section__title-wrapper-faq mb-40">
                <h2 className="section__title mb-40 bd-title-anim">
                  {"Faq_area_title"}
                </h2>
                <p>{"Faq_area_text"} </p>
              </div>
            </div>
          </div>
          <div className="row bdFadeUp">
            <div className="col-xxl-12">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-faq-1"
                  role="tabpanel"
                  aria-labelledby="nav-faq-1-tab"
                  tabIndex={0}
                >
                  <div className="ms-faq-wrap ms-faq-2column">
                    <div className="accordion p-relative" id="accordionExample">
                      <div className="ms-faq-group">
                        {faqData
                          .slice(0, Math.floor(faqData.length / 2))
                          .map((item: any) => {
                            return (
                              <div className="accordion-item" key={item.id}>
                                <h2 className="accordion-header" id={item.id}>
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={"#" + item.collapse_id}
                                    aria-expanded="false"
                                    aria-controls={item.collapse_id}
                                  >
                                    {item.question}
                                  </button>
                                </h2>
                                <div
                                  id={item.collapse_id}
                                  className="accordion-collapse collapse"
                                  aria-labelledby={item.id}
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {item.answer}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                      <div className="ms-faq-group">
                        {faqData
                          .slice(Math.floor(faqData.length / 2))
                          .map((item: any) => {
                            return (
                              <div className="accordion-item" key={item.id}>
                                <h2 className="accordion-header" id={item.id}>
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={"#" + item.collapse_id}
                                    aria-expanded="true"
                                    aria-controls={item.collapse_id}
                                  >
                                    {item.question}
                                  </button>
                                </h2>
                                <div
                                  id={item.collapse_id}
                                  className="accordion-collapse collapse"
                                  aria-labelledby={item.id}
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {item.answer}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
