import React from 'react';

const ProductContent = () => {
    return (
        <>
            <div className="ms-product-dcontent">
                <div className="ms-product-text mb-60">
                    <p className="mb-25">One morning, when Gregor Samsa woke from
                        troubled
                        dreams, he
                        found himself transformed in his bed into a horrible
                        vermin. He lay on his armour-like back, and if he lifted his
                        head a little he could see his brown belly, slightly domed
                        and divided by arches into stiff sections. The bedding was
                        hardly able to cover it and seemed ready to slide off any
                        moment. His many legs, pitifully thin compared with the size
                        of
                        the rest of him, waved about helplessly as he looked.
                        “What’s happened to me? ” he thought. It wasn’t a dream.</p>

                    <p className="mb-25">His room, a proper human room although a little
                        too
                        small, lay
                        peacefully between its four familiar walls. A collection
                        of textile samples lay spread out on the table – Samsa was a
                        travelling salesman – and above it there hung a picture
                        that he had recently cut out of an illustrated magazine and
                        housed in a nice, gilded frame. It showed a lady fitted out
                        with a fur hat and fur boa who sat upright, raising a heavy
                        fur
                        muff that covered the whole of her lower arm towards the
                        viewer. Gregor then turned to look out the window at the
                        dull
                        weather.</p>

                    <p className="mb-25">Drops of rain could be heard hitting the pane,
                        which made him
                        feel quite sad. “How about if I sleep a little bit longer
                        and forget all this nonsense”, he thought, but that was
                        something he was unable to do because he was used to
                        sleeping on
                        his right, and in his present state couldn’t get into that
                        position. However hard he threw himself onto his right, he
                        always rolled back to where he was. He must have tried it a
                        hundred times, shut his eyes so that he wouldn’t have to
                        look at the floundering legs, and only stopped when he began
                        to
                        feel a mild, dull pain there that he had never felt
                        before.</p>
                </div>
                <div className="ms-product-specifications mb-25">
                    <h3 className="ms-title3 white-text mb-25">Specifications</h3>
                    <div className="ms-product-stock sku d-inline-block">
                        <div className="ms-product-stock-item mb-20">
                            <span className="ms-product-sku">UPC</span> {" "}
                            <span className="ms-product-sku-text">694318025154</span>
                        </div>
                        <div className="ms-product-stock-item mb-20">
                            <span className="ms-product-sku">EAN-13</span> {" "}
                            <span className="ms-product-sku-text">0694318025154</span>
                        </div>
                        <div className="ms-product-stock-item mb-20">
                            <span className="ms-product-sku">Model</span> {" "}
                            <span className="ms-product-sku-text">LC6000PRIMEXUS</span>
                        </div>
                    </div>
                </div>
                <div className="ms-product-warranty mb-25">
                    <h3 className="ms-title3 white-text mb-25">What is included</h3>
                    <div className="ms-product-stock-item mb-20">
                        <span className="ms-product-sku">1 Year</span> {" "}
                        <span className="ms-product-sku-text">Limited Denon
                            Warranty</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductContent;