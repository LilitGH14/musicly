"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import testimonial_data from "../../data/testimonial-data";

const Comments = () => {
  return (
    
      <section className="ms-tm-area mt-30  mb-30">
        <div className="container">
          <div className="ms-tm-border">
            <div className="row align-items-center bdFadeUp">
              <div className="col-xl-12">
                <div className="ms-tm-content-wrap ms-tm-content-space">
                  <div className="ms-tm-quotation text-end">
                    <i className="flaticon-quotation"></i>
                  </div>
                  <div className="section__title-wrapper mb-30 bd-title-anim">
                    <span className="section__subtitle">Clients Feedback</span>
                    <h2 className="section__title">
                      <span className="animated-underline active">
                        Public Awesome
                      </span>
                      Comments
                    </h2>
                  </div>
                  <div className="ms-tm-content">
                    <div className="ms-tm-active">
                      <Swiper
                        modules={[Autoplay, Pagination]}
                        speed={1000}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                          delay: 6000,
                        }}
                        pagination={{
                          el: ".ms-tm-dots",
                          clickable: true,
                        }}
                        spaceBetween={0}
                        freeMode={false}
                      >
                        {testimonial_data.slice(0, 3).map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="ms-tm-slick">
                              <div className="ms-tm-slick-item">
                                <p>{item.description}</p>
                                <div className="ms-tm-author">
                                  <h4 className="ms-tm-author-title">
                                    {item.authorName}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="ms-tm-dots"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default Comments;
