import HeroSlide from "./sections/HeroSlides";
import OurLegacy from "./sections/OurLegacy";
import Projects from "./sections/Projects";
import HomeOwner from "./sections/HomeOwner";
import ImageBanner from "../../components/ImageBanner";
import StayConnected from "./sections/StayConnected";
import "./index.scss";

const Home = ({ setSecLocation }) => {
  return (
    <>
      <HeroSlide />
      <OurLegacy {...{ setSecLocation }} />
      <Projects {...{ setSecLocation }} />
      <HomeOwner {...{ setSecLocation }} />
      <ImageBanner {...{ setSecLocation }} />
      <StayConnected {...{ setSecLocation }} />
    </>
  );
};

export default Home;
