import Logo from "../../../../assets/images/logo.svg";
import Basket from "../../../../assets/images/basket-fill.svg";
import User from "../../../../assets/images/user.svg";
import Search from "../../../../assets/images/search.svg";
import List from "../../../../assets/images/list-icon.svg";

export const Header = () => {
  const menuItems = [
    "SS",
    "FW",
    "PANTS",
    "T-Shirt",
    "SALE",
    "COLLECTION",
    "COMMUNITY",
  ];

  return (
    <header className="w-full md:h-[84px] h-[72px] md:px-[137px] px-5 flex md:justify-center justify-end items-center md:gap-[60px] gap-[26px] bg-black fixed top-0 z-10">
      <img
        src={Logo}
        alt="Logo"
        className="md:w-[130px] w-[108px] md:h-6 h-5"
      />
      <ul className="h-full md:flex flex-1 items-center hidden">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="h-full flex flex-1 justify-center items-center font-bold text-lg text-white"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center md:gap-5 gap-2">
        <img
          src={Basket}
          alt="Basket"
          className="md:w-[28px] w-6 md:h-[28px] h-6"
        />
        <img
          src={User}
          alt="User"
          className="md:w-[28px] w-6 md:h-[28px] h-6 md:block hidden"
        />
        <img
          src={Search}
          alt="Search"
          className="md:w-[28px] w-6 md:h-[28px] h-6"
        />
        <img
          src={List}
          alt="List"
          className="md:w-[28px] w-6 md:h-[28px] h-6 md:hidden block"
        />
        <span className="text-[15px] text-[#fafafa] md:flex hidden">
          로그아웃
        </span>
      </div>
    </header>
  );
};
