"use client";
import { login_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import ErrorMsg from "../../form/error-msg";
import { TAG_OPTIONS } from "@/constants/constants";
import { addStory } from "@/services/stories";
import { toast } from "react-toastify";
import MultiSelect from "../common/MultiSelect/MultiSelect";

type StoryFormType = {
  dict: { [key: string]: string } | null;
};
const StoryForm = ({ dict }: StoryFormType) => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        tags: [],
      },
      validationSchema: login_schema,
      onSubmit: (values, { resetForm }) => {
        console.log(values,232323);


        addStory(values).then((res) => {
          if (res.ResponseCode === 200) {
            toast.success(dict?.Story_is_added_successfully);
            resetForm();
          }
        });
      },
    });

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-4">
        <div className="ms-input2-box mb-25">
          <label>{dict?.Story_title_label}</label>
          <input
            id="title"
            type="text"
            name="title"
            value={values.title}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={dict?.Story_title}
            required
          />
          {touched.title && <ErrorMsg error={errors.title} />}
        </div>
        <div className="ms-input2-box">
          <label>{dict?.Story_tags_label}</label>
          <MultiSelect
            values={values.tags}
            options={TAG_OPTIONS}
            onChange={handleChange}
            name="tags"
            dict={dict ?? {}}
          />
        </div>
      </div>
      <div className="col-8">
        <div className="ms-input2-box">
          <label>{dict?.Story_description_label}</label>
          <textarea
            id="description"
            name="description"
            value={values.description}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={dict?.Story_description}
            required
          />
          {touched.description && <ErrorMsg error={errors.description} />}
        </div>
        <div className="ms-submit-btn mb-40">
          <button className="unfill__btn d-block w-100" type="submit">
            {dict?.Add_new_story}
          </button>
        </div>
      </div>
    </form>
  );
};

export default StoryForm;
