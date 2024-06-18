//@refresh
import Setting from "@/components/common/setting/Setting";
import HomeMainArea from "@/components/home/HomeMainArea";
import Wrapper from "@/layout/DefaultWrapper";

const Home = () => {

  return (
    <>
      <Wrapper>
        <div className="ms-all-content ms-content-mobile-space pt-130">
          <main>
            <HomeMainArea />
            <Setting />
          </main>
        </div>
      </Wrapper>
    </>
  );
}

export default Home