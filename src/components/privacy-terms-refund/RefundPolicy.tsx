import React from 'react';
import RefundFormSection from './RefundFormSection';

const RefundPolicy = () => {
    return (
        <>
            <div className="terms_conditions_content">
                <h2 className="warpper_title mb-25">
                    Product Refund Policy
                </h2>
                <p>
                    At musicly, we strive to provide you with high-quality products and an exceptional shopping experience. However, we understand that there may be instances where you need to return a product. We want to make the process as smooth as possible for you, so please take a moment to review our product refund policy.
                </p>
                <h2 className="info_title">
                    Eligibility for Refund
                </h2>
                <ul className="icon_list unordered_list_block">
                    <li> <span className="list_item_text">
                        To be eligible for a refund, the product must be in its original condition, unused, and in its original packaging. </span>
                    </li>
                    <li><span className="list_item_text">Returns must be initiated within [X] days of receiving the product.
                    </span></li>
                    <li><span className="list_item_text"> Personalized or customized items may not be eligible for a refund unless they arrive damaged or with a defect.</span></li>
                </ul>
                <h2 className="info_title">Initiating a Return</h2>
                <ul className="icon_list unordered_list_block">
                    <li><span className="list_item_text">To initiate a return, please contact our customer support team at [Customer Support Email] or [Customer Support Phone Number].</span></li>
                    <li><span className="list_item_text">Our customer support team will guide you through the return process and provide you with a Return Merchandise Authorization (RMA) number if required. </span></li>
                    <li> <span className="list_item_text">Personalized or customized items may not be eligible for a refund unless they arrive damaged or with a defect.</span></li>
                </ul>

                <h2 className="info_title">
                    Return Shipping
                </h2>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_text">
                            1. Customers are responsible for the cost of return shipping unless the product arrived damaged or with a defect.
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            2. We recommend using a trackable shipping service to ensure that your return reaches us safely.
                        </span>
                    </li>
                </ul>

                <h2 className="info_title">
                    Inspection and Processing
                </h2>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_text">
                            1. Once we receive your returned product, our team will inspect it to ensure it meets our eligibility criteria.
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            2. If the product qualifies for a refund, we will process the refund within [X] business days.
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            2. Refunds will be issued to the original payment method used for the purchase.
                        </span>
                    </li>
                </ul>
                <h2 className="info_title">
                    Refund Amount
                </h2>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_text">
                            The refund amount will include the cost of the product and any applicable taxes.
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            Shipping fees are non-refundable unless the return is due to a shipping error on our part.
                        </span>
                    </li>
                </ul>
                <h2 className="info_title">
                    Damaged or Defective Products
                </h2>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_text">
                            If you receive a damaged or defective product, please contact us immediately.
                        </span>
                    </li>
                    <li>
                        <span className="list_item_text">
                            We may request photos or other documentation to assess the issue and provide a replacement or refund.
                        </span>
                    </li>
                </ul>
                <h2 className="info_title">
                    Exchanges
                </h2>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_text">
                            We do not offer direct exchanges. If you need a different product, please return the original item following our refund policy guidelines and place a new order.
                        </span>
                    </li>
                </ul>
                <h2 className="info_title">
                    Non-Refundable Items
                </h2>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_text">
                            Gift cards and downloadable software or digital products are non-refundable.
                        </span>
                    </li>
                </ul>
                <h2 className="info_title">
                    Changes to this Policy
                </h2>
                <ul className="icon_list unordered_list_block">
                    <li>
                        <span className="list_item_text">
                            musicly reserves the right to update or modify this refund policy at any time without prior notice. Any changes will be effective immediately upon posting on our website.
                        </span>
                    </li>
                </ul>
                <p>If you have any questions or concerns regarding our product refund policy, please do not hesitate to contact our customer support team. We are here to assist you and ensure that you have a positive shopping experience with us.
                    Thank you for choosing musicly!</p>

            </div>
            <RefundFormSection />
        </>
    );
};

export default RefundPolicy;