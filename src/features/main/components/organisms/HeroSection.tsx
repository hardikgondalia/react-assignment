import HeroSection from "../../../../assets/images/hero-section-bg.jpg";
import { Header } from "../../../../shared/components/organisms/Header/Header";
import  styles from "./HeroSection.module.css";

export const HeroSectionPage = () => {
  return (
    <div className="w-full h-full relative">
      <div className={`${styles.heroSection} w-full h-full`}></div>
      <Header />
      <div className="w-full h-[calc(100vh-84px)] relative">
        <img
          src={HeroSection}
          alt="HeroSection"
          className="w-full h-full object-cover"
        />
        <div className="md:text-[40px] text-lg text-white absolute md:top-3/6 top-[70%] md:right-[100px] right-0 md:w-[26%] w-[55%] text-left">
          Performance-Ready Apparel for Work & Beyond
        </div>
      </div>
    </div>
  );
};
