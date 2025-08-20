import Logo from "../../../../assets/images/logo.svg";
import Instagram from "../../../../assets/images/instagram.svg";
import Facebook from "../../../../assets/images/facebook.svg";
import YouTube from "../../../../assets/images/youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-[60px] md:px-0 px-5 bg-[#1A1A1A]">
      <div className="desktop-footer md:flex hidden md:gap-5 md:max-w-[1432px] mx-auto">
        <div className="md:w-3/5 flex flex-col md:gap-10">
          <img src={Logo} alt="Logo" className="w-[180px] h-[33px]" />
          <ul className="flex flex-col md:gap-3.5">
            <li className="md:text-lg md:font-normal text-[#B2B2B2]">
              대표이사 : 장창진
            </li>
            <li className="md:text-lg md:font-normal text-[#B2B2B2]">
              사업자등록번호 : 201-86-15245
            </li>
            <li className="md:text-lg md:font-normal text-[#B2B2B2]">
              서울특별시 중구 다산로 139 (랜더스빌딩) 6층
            </li>
            <li className="md:text-lg md:font-normal text-[#B2B2B2]">
              통신판매업신고 : 중구 제0575호
            </li>
            <li className="md:text-lg md:font-normal text-[#B2B2B2]">
              개인정보보호책임자 : 최주연
            </li>
            <li className="md:text-sm md:font-medium text-[#666666]">
              Copyright © WWW.ldsb2bmall.com All right reserved
            </li>
          </ul>
        </div>
        <div className="md:w-2/5 flex md:gap-2.5">
          <div className="flex md:flex-1 flex-col md:gap-5">
            <div className="flex flex-col md:gap-2.5">
              <div className="md:text-base md:font-semibold text-white">
                대표 번호 및 AS 문의
              </div>
              <div className="md:text-2xl md:font-semibold text-white">
                1661-6244
              </div>
            </div>
            <ul className="flex flex-col md:gap-2.5">
              <li className="md:text-[15px] md:font-normal text-[#cccccc]">
                평일 : 09:00 ~ 18:00
              </li>
              <li className="md:text-[15px] md:font-normal text-[#cccccc]">
                기관 : 기업은행
              </li>
              <li className="md:text-[15px] md:font-normal text-[#cccccc]">
                계좌번호 : 213-111127-04-035
              </li>
              <li className="md:text-[15px] md:font-normal text-[#cccccc]">
                예금주 : (주)랜더스
              </li>
            </ul>
          </div>
          <div className="flex md:flex-1 flex-col md:gap-5">
            <div className="flex items-center md:gap-2.5">
              <div className="md:px-2.5 w-fit md:text-sm md:font-medium text-[#666666]">
                개인정보처리방침
              </div>
              <div className="md:px-2.5 w-fit md:text-sm md:font-medium text-[#666666]">
                이용약관
              </div>
            </div>
            <div className="flex items-center md:gap-2.5 md:px-2.5">
              <img
                src={Instagram}
                alt="Instagram"
                className="w-[24px] h-[24px]"
              />
              <img
                src={Facebook}
                alt="Facebook"
                className="w-[24px] h-[24px]"
              />
              <img src={YouTube} alt="YouTube" className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-footer md:hidden flex flex-col gap-[30px]">
        <img src={Logo} alt="Logo" className="w-[120px] h-[22px]" />
        <div className="flex flex-col">
          <div className="text-base font-semibold text-white">
            대표 번호 및 AS 문의
          </div>
          <div className="pt-[14px] text-2xl font-semibold text-white">
            1661-6244
          </div>
          <ul className="py-[30px] flex flex-col gap-2.5">
            <li className="text-[14px] font-normal text-[#B2B2B2]">
              평일 : 09:00 ~ 18:00
            </li>
            <li className="text-[14px] font-normal text-[#B2B2B2]">
              기관 : 기업은행
            </li>
            <li className="text-[14px] font-normal text-[#B2B2B2]">
              계좌번호 : 213-111127-04-035
            </li>
            <li className="text-[14px] font-normal text-[#B2B2B2]">
              예금주 : (주)랜더스
            </li>
          </ul>
          <ul className="pb-[30px] flex flex-col gap-2.5">
            <li className="text-[14px] font-normal text-[#B2B2B2]">
              대표이사 : 장창진
            </li>
            <li className="text-[14px] font-normal text-[#B2B2B2]">
              사업자등록번호 : 201-86-15245
            </li>
            <li className="text-[14px] font-normal text-[#B2B2B2]">
              서울특별시 중구 다산로 139 (랜더스빌딩) 6층
            </li>
            <li className="text-[14px] font-normal text-[#B2B2B2]">
              통신판매업신고 : 중구 제0575호
            </li>
            <li className="text-[14px] font-normal text-[#B2B2B2]">
              개인정보보호책임자 : 최주연
            </li>
          </ul>
          <div className="flex justify-center items-center gap-2.5">
            <img
              src={Instagram}
              alt="Instagram"
              className="w-[18px] h-[18px]"
            />
            <img src={Facebook} alt="Facebook" className="w-[18px] h-[18px]" />
            <img src={YouTube} alt="YouTube" className="w-[18px] h-[18px]" />
          </div>
          <div className="py-2 flex justify-center items-center gap-2.5">
            <div className="px-2.5 w-fit text-sm font-medium text-[#666666]">
              개인정보처리방침
            </div>
            <div className="px-2.5 w-fit text-sm font-medium text-[#666666]">
              이용약관
            </div>
          </div>
          <div className="text-sm font-medium text-[#666666] text-center tracking-[-0.03em]">
            Copyright © WWW.ldsb2bmall.com All right reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
