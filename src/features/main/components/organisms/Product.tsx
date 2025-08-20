import ProductImg from '../../../../assets/images/product-image.jpg'

export const ProductPage = () => {
  return (
    <div className='flex flex-col md:gap-[120px] gap-[60px]'>

      <div className="section-two flex flex-col">
        <div className='text-[22px] font-semibold leading-[34px] text-center'>상품진열이 타이틀이 들어갑니다.</div>
        <div className='md:text-lg md:font-normal text-[15px] font-medium md:text-black text-[#333333] text md:pt-5 pt-2 text-center'>부타이틀이 필요할 경우 텍스트가 들어갑니다.</div>
        <div className="product-category-section w-full flex flex-wrap gap-2 md:gap-5 md:px-[15px] px-5 md:pt-[60px] pt-[30px]">
          <div className="product-card w-[calc(50%-4px)] md:w-[calc(25%-15px)]">
            <img src={ProductImg} alt="ProductImg" className='md:h-[420px] object-cover' />
            <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
              <ul className='flex items-center justify-between'>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
              </ul>
              <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
              <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
              <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                <div className='md:text-lg font-semibold'>000,000원</div>
              </div>
            </div>
          </div>
          <div className="product-card w-[calc(50%-4px)] md:w-[calc(25%-15px)]">
            <img src={ProductImg} alt="ProductImg" className='md:h-[420px] object-cover' />
            <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
              <ul className='flex items-center justify-between'>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
              </ul>
              <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
              <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
              <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                <div className='md:text-lg font-semibold'>000,000원</div>
              </div>
            </div>
          </div>
          <div className="product-card w-[calc(50%-4px)] md:w-[calc(25%-15px)]">
            <img src={ProductImg} alt="ProductImg" className='md:h-[420px] object-cover' />
            <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
              <ul className='flex items-center justify-between'>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
              </ul>
              <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
              <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
              <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                <div className='md:text-lg font-semibold'>000,000원</div>
              </div>
            </div>
          </div>
          <div className="product-card w-[calc(50%-4px)] md:w-[calc(25%-15px)]">
            <img src={ProductImg} alt="ProductImg" className='md:h-[420px] object-cover' />
            <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
              <ul className='flex items-center justify-between'>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
              </ul>
              <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
              <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
              <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                <div className='md:text-lg font-semibold'>000,000원</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-two flex flex-col">
        <div className='text-[22px] font-semibold leading-[34px] text-center'>상품진열이 타이틀이 들어갑니다.</div>
        <div className='md:text-lg md:font-normal text-[15px] font-medium md:text-black text-[#333333] text md:pt-5 pt-2 text-center'>부타이틀이 필요할 경우 텍스트가 들어갑니다.</div>
        <div className="product-category-section w-full flex flex-wrap gap-2 md:gap-5 md:px-[15px] px-5 md:pt-[60px] pt-[30px]">
          <div className="product-card w-[calc(50%-4px)] md:w-[calc(25%-15px)]">
            <img src={ProductImg} alt="ProductImg" className='md:h-[420px] object-cover' />
            <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
              <ul className='flex items-center justify-between'>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
              </ul>
              <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
              <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
              <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                <div className='md:text-lg font-semibold'>000,000원</div>
              </div>
            </div>
          </div>
          <div className="product-card w-[calc(50%-4px)] md:w-[calc(25%-15px)]">
            <img src={ProductImg} alt="ProductImg" className='md:h-[420px] object-cover' />
            <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
              <ul className='flex items-center justify-between'>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
              </ul>
              <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
              <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
              <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                <div className='md:text-lg font-semibold'>000,000원</div>
              </div>
            </div>
          </div>
          <div className="product-card w-[calc(50%-4px)] md:w-[calc(25%-15px)]">
            <img src={ProductImg} alt="ProductImg" className='md:h-[420px] object-cover' />
            <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
              <ul className='flex items-center justify-between'>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
              </ul>
              <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
              <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
              <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                <div className='md:text-lg font-semibold'>000,000원</div>
              </div>
            </div>
          </div>
          <div className="product-card w-[calc(50%-4px)] md:w-[calc(25%-15px)]">
            <img src={ProductImg} alt="ProductImg" className='md:h-[420px] object-cover' />
            <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
              <ul className='flex items-center justify-between'>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
              </ul>
              <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
              <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
              <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                <div className='md:text-lg font-semibold'>000,000원</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section-two flex flex-col">
                        <div className='text-[22px] font-semibold leading-[34px] text-center'>상품진열이 타이틀이 들어갑니다.</div>
                        <div className='md:text-lg md:font-normal md:pt-5 text-center'>부타이틀이 필요할 경우 텍스트가 들어갑니다.</div>
                        <div className="product-category-section flex flex-wrap md:px-[15px] md:pt-[60px]">
                            <div className="product-card md:w-1/4 w-2/4">
                                <img src={ProductImg} alt="ProductImg" className='w-full md:h-[420px] object-cover' />
                                <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
                                    <ul className='flex items-center justify-between'>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                    </ul>
                                    <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
                                    <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
                                    <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                                        <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                                        <div className='md:text-lg font-semibold'>000,000원</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card md:w-1/4 w-2/4">
                                <img src={ProductImg} alt="ProductImg" className='w-full md:h-[420px] object-cover' />
                                <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
                                    <ul className='flex items-center justify-between'>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                    </ul>
                                    <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
                                    <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
                                    <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                                        <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                                        <div className='md:text-lg font-semibold'>000,000원</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card md:w-1/4 w-2/4">
                                <img src={ProductImg} alt="ProductImg" className='w-full md:h-[420px] object-cover' />
                                <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
                                    <ul className='flex items-center justify-between'>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                    </ul>
                                    <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
                                    <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
                                    <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                                        <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                                        <div className='md:text-lg font-semibold'>000,000원</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card md:w-1/4 w-2/4">
                                <img src={ProductImg} alt="ProductImg" className='w-full md:h-[420px] object-cover' />
                                <div className='md:pt-5 pt-[18px] md:pb-5 pb-2.5 md:px-5 px-2.5 flex flex-col'>
                                    <ul className='flex items-center justify-between'>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#594504]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#404041]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-transparent border-[0.46px] border-solid border-b-black'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                        <li className='product-color-block md:w-5 w-[11px] md:h-5 h-[11px] rounded-full bg-[#FFC40B]'></li>
                                    </ul>
                                    <div className='md:pt-4 pt-2.5 md:text-lg text-sm md:font-semibold font-medium w-full text-ellipsis whitespace-nowrap overflow-hidden'>상품명이 노출 됩니다.상품명이 노출 됩니...</div>
                                    <div className='md:text-base text-xs font-normal md:pt-[14px] pt-1.5'>{'브랜드명'} 그룹코드-색상명</div>
                                    <div className='md:pt-[14px] pt-1.5 flex items-center md:gap-[14px] gap-1.5'>
                                        <div className='product-tag w-fit md:h-[32px] h-5 px-1.5 md:py-1.5 py-[1px] bg-[#FFFCF3] md:rounded-[10px] rounded-[5px] text-sm md:font-medium text-[#594504] border-[0.74px] border-[#FFEDB3]'>창고명 6자</div>
                                        <div className='md:text-lg font-semibold'>000,000원</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
    </div>
  );
};
