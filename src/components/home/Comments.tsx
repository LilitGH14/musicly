"use client";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import { fetchComments } from "@/services/songs";
import { CommentItem } from "@/types/types";
import Modal from "../common/modal/Modal";

type HomePageCommentsType = {
  dict: { [key: string]: string } | null;
};
const Comments = ({ dict }: HomePageCommentsType) => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState<Partial<CommentItem>>({});

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    fetchComments().then((res) => {
      if (res.ResponseCode == 200) {
        setComments(res.ResponseData);
      }
    });
  }, []);

  return (
    <>
      <section className="ms-tm-area mt-30  mb-30">
        <div className="container">
          <div className="ms-tm-border">
            <div className="row align-items-center bdFadeUp">
              <div className="col-xl-12">
                <div className="ms-tm-content-wrap ms-tm-content-space">
                  <div className="section__title-wrapper mb-30 bd-title-anim">
                    <div className="section__title-wrapper-top">
                      <span className="section__subtitle">
                        {dict?.Clients_Feedback}
                      </span>
                      <button onClick={() => toggleModal()}>
                        {dict?.Leave_feedback_btn}
                      </button>
                    </div>
                    <h2 className="section__title">
                      <span className="animated-underline active">
                        {dict?.Public_Awesome}
                      </span>
                      {dict?.Comments}
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
                          delay: 1000,
                        }}
                        pagination={{
                          el: ".ms-tm-dots",
                          clickable: true,
                        }}
                        spaceBetween={0}
                        freeMode={false}
                      >
                        {comments?.map((comment: CommentItem) => (
                          <SwiperSlide key={comment.id}>
                            <div className="ms-tm-slick">
                              <div className="ms-tm-slick-item">
                                <p>{comment.description}</p>
                                <div className="ms-tm-author">
                                  <h4 className="ms-tm-author-title">
                                    {comment.authorName}
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
      <Modal
        open={modalIsOpen}
        close={toggleModal}
        title={dict?.Leave_comment as string}
      >
        <div className="comment-modal-content">
          {/* need formik */}
          <textarea value={comment.title} />
          <textarea value={comment.description} />
          <button>{dict?.Add}</button>
        </div>
      </Modal>
    </>
  );
};

export default Comments;
