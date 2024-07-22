import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import PrivacyTermsAndRefund from "@/components/privacy-terms-refund/PrivacyTermsAndRefund";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <div className="bb-all-content ms-all-content-space">
        <main>
          <Breadcrumb title="Privacy & Policy" />
          <PrivacyTermsAndRefund policyActive="active" />
        </main>
      </div>
    </Wrapper>
  );
};

export default page;
