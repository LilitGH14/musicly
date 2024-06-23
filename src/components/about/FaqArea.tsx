import { fetchFaqData } from "@/services/about";
import { FaqItemType } from "@/types/types";
import React, { useEffect, useState } from "react";

const FaqArea = ({ dict }: { dict: any }) => {
  const [faqData, setFaqData] = useState<FaqItemType[]>([]);

  useEffect(() => {
    fetchFaqData().then((res) => {
      if (res.ResponseCode == 200) {
        setFaqData(res.ResponseData);
      }
    });
  }, []);

  return (
    <section className="ms-faq-area pt-50 pb-30 fix">
      <div className="bd-accordion-fix">
        <div className="container">
          <div className="row align-items-center mb-15 bdFadeUp">
            <div className="col-xl-7 col-lg-10">
              <div className="section__title-wrapper section__title-wrapper-faq mb-40">
                <h2 className="section__title mb-40 bd-title-anim">
                  {dict.Faq_area_title}
                </h2>
                <p>{dict.Faq_area_text}</p>
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
                          .map((item: FaqItemType) => {
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
                                    {dict[item.question]}
                                  </button>
                                </h2>
                                <div
                                  id={item.collapse_id}
                                  className="accordion-collapse collapse"
                                  aria-labelledby={item.id}
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {dict[item.answer]}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                      <div className="ms-faq-group">
                        {faqData
                          .slice(Math.floor(faqData.length / 2))
                          .map((item: FaqItemType) => {
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
                                    {dict[item.question]}
                                  </button>
                                </h2>
                                <div
                                  id={item.collapse_id}
                                  className="accordion-collapse collapse"
                                  aria-labelledby={item.id}
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {dict[item.answer]}
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
