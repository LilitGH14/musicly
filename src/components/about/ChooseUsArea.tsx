import { fetchChooseUsData } from "@/services/about";
import { ChooseUsDataType } from "@/types/types";
import React, { useEffect, useState } from "react";

const ChooseUsArea = ({ dict }: { dict: any }) => {
  const [chooseData, setChooseData] = useState<ChooseUsDataType[]>([]);
  
  useEffect(() => {
    fetchChooseUsData().then((res) => {
      if (res.ResponseCode == 200) {
        setChooseData(res.ResponseData);
      }
    });
  }, []);

  return (
    <div className="container pt-50">
      <div className="row align-items-end mb-25 bdFadeUp">
        <div className="col-lg-7">
          <div className="mb-40">
            <h2 className="section__title mb-35 bd-title-anim">
              {dict?.Why_choose_us_title}
            </h2>
            <p className="section__text">{dict?.Why_choose_us_text}</p>
          </div>
        </div>
      </div>
      <div className="row mb-45 bdFadeUp">
        {chooseData.map((item: ChooseUsDataType) => (
          <div className="col-xl-4 col-md-6" key={item.id}>
            <div className="bt-choose-item mb-25">
              <div className="d-flex align-items-center">
                <div className="bt-choose-icon d-inline-block p-relative">
                  <i className={item.icon}></i>
                </div>
                <h3 className="bt-choose-title">{dict?.[item.title]}</h3>
              </div>
              <h3 className="bt-choose-text">{dict?.[item.text]}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUsArea;
