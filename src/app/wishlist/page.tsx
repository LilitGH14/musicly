import ProductActionBtn from "@/components/Shop/ProductActionBtn";
import Setting from "@/components/common/setting/Setting";
import WishlistMain from "@/components/wishlist/WishlistMain";
import Wrapper from "@/layout/DefaultWrapper";

const page = () => {
    return (
        <>
            <Wrapper>
                <div className="ms-all-content ms-all-content-space">
                    <main>
                        <WishlistMain />
                        <Setting />
                    </main>
                </div>
            </Wrapper>
            <ProductActionBtn />
        </>
    )
};

export default page;