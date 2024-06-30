import HomeMainArea from "@/components/home/HomeMainArea";
import Wrapper from "@/layout/DefaultWrapper";

const Home = () => {
  return (
    <Wrapper>
      <div className="ms-all-content ms-content-mobile-space mt-90">
        <main>
          <HomeMainArea />
        </main>
      </div>
    </Wrapper>
  );
};

export default Home;
