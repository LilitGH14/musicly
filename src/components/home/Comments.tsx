"use client";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import { fetchComments } from "@/services/songs";
import { CommentItem } from "@/types/types";
import Modal from "../common/modal/Modal";
import ErrorMsg from "@/form/error-msg";
import { useFormik } from "formik";
import { comment_schema } from "@/utils/validation-schema";
import { addComment } from "@/services/mails";
import { useSelector } from "react-redux";
import { alertService } from "@/services/alert";

type HomePageCommentsType = {
  dict: { [key: string]: string } | null;
};
const Comments = ({ dict }: HomePageCommentsType) => {
  const { user } = useSelector((store: any) => store.auth);

  const [comments, setComments] = useState<CommentItem[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: comment_schema,
    onSubmit: (values, { resetForm }) => {
      addComment(values).then((res) => {
        if (res.ResponseCode === 200) {
          resetForm();

          fetchComments().then((res) => {
            if (res.ResponseCode == 200) {
              setComments(res.ResponseData);
            }

            closeModal();
          });
        }
      });
    },
  });

  const openModal = () => {
    if (user) {
      setIsOpen(true);
    } else {
      alertService.success(dict?.Need_login as string, {
        autoClose: false,
        keepAfterRouteChange: false,
      });
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    resetForm();
  };

  useEffect(() => {
    fetchComments().then((res) => {
      if (res.ResponseCode == 200) {
        setComments(res.ResponseData);
      }
    });

    return () => {
      resetForm();
    };
  }, [resetForm]);

  return (
    <>
      <section className="bb-comments container">
        <div className="bb-comments__item">
          <div className="row align-items-center bdFadeUp">
            <div className="col-12">
              <div>
                <div className="section__title-wrapper mb-30 bd-title-anim">
                  <div className="section__title-wrapper-top">
                    <span className="section__subtitle">
                      {dict?.Clients_Feedback}
                    </span>
                    <button onClick={() => openModal()}>
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
                <div>
                  <div className="bb-tm-active">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      speed={1000}
                      slidesPerView={1}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                      }}
                      pagination={{
                        el: ".bb-tm-dots",
                        clickable: true,
                      }}
                      spaceBetween={0}
                      freeMode={false}
                    >
                      {comments?.map((comment: CommentItem) => (
                        <SwiperSlide key={comment.id}>
                          <div className="bb-comments__item-slick">
                            <p>{comment.description}</p>
                            <div className="bb-tm-author">
                              <h4 className="bb-tm-author-title">
                                {comment.authorName}
                              </h4>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="bb-tm-dots"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        open={modalIsOpen}
        close={closeModal}
        title={dict?.Leave_comment as string}
      >
        <div className="comment-modal-content">
          <form onSubmit={handleSubmit}>
            <div className="bb-input2-box mb-25">
              <input
                id="comment_title"
                type="text"
                name="title"
                value={values.title}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={dict?.Comment_Title}
                required
              />
              {touched.title && <ErrorMsg error={errors.title} />}
            </div>
            <div className="bb-input2-box mb-50">
              <input
                id="comment_description"
                name="description"
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                placeholder={dict?.Comment_Description}
                required
              />
              {touched.description && <ErrorMsg error={errors.description} />}
            </div>
            <div className="bb-submit-btn mb-40">
              <button type="submit">{dict?.Add}</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Comments;
