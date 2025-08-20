import CarouselOne from '../../../../assets/images/carousel-one.png'
import CarouselTwo from '../../../../assets/images/carousel-two.png'
import CarouselThree from '../../../../assets/images/carousel-three.png'
import CarouselSlider from '../../../../assets/images/carousel-slider.png'
import styles from "./ProductSlider.module.css";

export const ProductSliderPage = () => {
  return (
    <div className="section-one">
      <div className='md:text-[22px] md:font-semibold md:leading-[34px]'>스타일과 실용성을 모두 담은 시즌 셀렉션</div>
      <div className="carousel-container flex md:gap-[30px]">
        <div className="carousel md:w-3/5 md:pt-[144px] flex md:gap-[20px]">
          <div className={`${styles.carouselCard} md:w-1/3 flex flex-col relative`}>
            <div className='md:py-4 md:pl-4 md:text-lg md:font-bold'>계절에 구애받지 않고<br />편하게 입을 수 있는 아노락</div>
            <img src={CarouselOne} alt="CarouselOne" className='w-full h-full object-cover' />
            <div className={`${styles.carouselOverlay} md:h-[220px] absolute left-0 bottom-0 md:px-4 md:py-6 flex items-end md:gap-2`}>
              <div className='md:text-sm md:font-medium'>카테고리명</div>
              <div className='md:text-sm md:font-medium'>카테고리명</div>
              <div className='md:text-sm md:font-medium'>카테고리명</div>
            </div>
          </div>
          <div className={`${styles.carouselCard} md:w-1/3 flex flex-col relative`}>
            <div className='md:py-4 md:pl-4 md:text-lg md:font-bold'>가볍고 뛰어난 보온성을<br />자랑하는 방한조끼</div>
            <img src={CarouselTwo} alt="CarouselTwo" className='w-full h-full object-cover' />
            <div className={`${styles.carouselOverlay} md:h-[220px] absolute left-0 bottom-0 md:px-4 md:py-6 flex items-end md:gap-2`}>
              <div className='md:text-sm md:font-medium'>카테고리명</div>
              <div className='md:text-sm md:font-medium'>카테고리명</div>
              <div className='md:text-sm md:font-medium'>카테고리명</div>
            </div>
          </div>
          <div className={`${styles.carouselCard} md:w-1/3 flex flex-col relative`}>
            <div className='md:py-4 md:pl-4 md:text-lg md:font-bold'>포근한 따뜻함이<br />필요할 때 플리스</div>
            <img src={CarouselThree} alt="CarouselThree" className='w-full h-full object-cover' />
            <div className={`${styles.carouselOverlay} md:h-[220px] absolute left-0 bottom-0 md:px-4 md:py-6 flex items-end md:gap-2`}>
              <div className='md:text-sm md:font-medium'>카테고리명</div>
              <div className='md:text-sm md:font-medium'>카테고리명</div>
              <div className='md:text-sm md:font-medium'>카테고리명</div>
            </div>
          </div>
        </div>
        <div className='carousel md:w-2/5 flex md:gap-[20px]'>
          <div className={`${styles.carouselMaincard} w-full flex flex-col relative`}>
            <img src={CarouselSlider} alt="CarouselSlider" className='w-full h-full object-cover' />
            <div className={`${styles.carouselOverlay} md:h-[320px] absolute left-0 bottom-0 md:pt-5 md:pb-[30px] flex flex-col justify-end items-center md:gap-1.5`}>
              <div className='md:text-xl md:font-semibold'>쌀쌀한 바람이 부는</div>
              <div className='md:text-xl md:font-semibold'>가을에 입기 좋은 자켓</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
