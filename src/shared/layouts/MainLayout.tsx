import { Footer } from "../components/organisms/Footer/Footer";
import { HeroSectionPage } from "../../features/main/components/organisms/HeroSection";
import { BannerPage } from "../../features/main/components/organisms/Banner";
import { ProductPage } from "../../features/main/components/organisms/Product";
import { ChatButton } from "../../features/main/components/organisms/ChatButton";
import { ProductSliderPage } from "../../features/main/components/organisms/ProductSlider";
import styles from "./MainLayout.module.css";

export const MainLayout = () => {
  return (
    <main>
      {/* <Outlet /> */}
      <HeroSectionPage />
      <div
        className={`${styles.mainSection} md:pt-[120px] pt-[60px] md:pb-[120px] pb-[20px] flex flex-col md:gap-[152px] gap-[60px] relative`}
      >
        <ProductSliderPage />
        <ProductPage />
        <BannerPage />
        <ChatButton />
      </div>
      <Footer />
    </main>
  );
};
