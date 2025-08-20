export const BannerPage = () => {
  return (
    <div className="banner-container md:px-[60px] px-5 md:py-[121px] py-[83px] flex flex-col bg-black">
      <div className="md:text-4xl text-lg md:font-black font-semibold text-white md:leading-[43px] leading-[22px]">
        B2B 전문 의류 쇼핑몰!
      </div>
      <div className="md:pt-5 pt-1.5 md:text-4xl text-lg md:font-black font-semibold text-white md:leading-[43px] leading-[22px]">
        15년 이상의 노하우로 믿고 거래 하세요
      </div>
      <div className="md:pt-[30px] pt-5 md:text-lg text-sm md:font-semibold font-normal md:text-white text-[#B2B2B2] md:leading-[21px] leading-[17px] flex md:flex-row flex-col md:gap-0 gap-1">
        <span>수많은 기업이 선택한 신뢰받는 쇼핑 소식, </span>
        <span>지금 만나보세요</span>
      </div>
    </div>
  );
};
