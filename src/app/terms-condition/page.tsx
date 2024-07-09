import PrivacyTermsAndRefund from "@/components/privacy-terms-refund/PrivacyTermsAndRefund";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <Wrapper>
      <main className="ms-all-content ms-all-content-space">
        <PrivacyTermsAndRefund policyActive="active" />
      </main>
    </Wrapper>
  );
};

export default page;
