import React from "react";
import BradcrumbTwo from "../common/breadcrumb/BradcrumbTwo";
import EnquiryListArea from "./EnquiryListArea";
import FaqArea from "../about/FaqArea";
import EnquireForm from "./EnquireForm";
import PartnerAreaMain from "../common/PartnerArea/PartnerAreaMain";

const EnquiryMainArea = () => {
  return (
    <>
      <BradcrumbTwo teamTitle="My Enquiry List" />
      <EnquiryListArea />
      <FaqArea wrapperBgClass="ms-bg-2" />
      <EnquireForm />
      <PartnerAreaMain borderWrapperClass="ms-border5" spacingClass="pt-130" />
    </>
  );
};

export default EnquiryMainArea;
