import Chatbot from "../../../../assets/images/chatbot.png";

export const ChatButton = () => {
  return (
    <div className="md:bg-[#FAE100] md:p-[15px] pr-5 flex justify-end md:absolute md:bottom-[74px] md:right-[-115px] md:w-[110px] md:h-[110px] md:rounded-full overflow-hidden md:shadow-[1.75px_1.75px_4.36px_0px_#FAE10033]">
      <img
        src={Chatbot}
        alt="Chatbot"
        className="md:w-full w-12 md:h-full h-12 rounded-full"
      />
    </div>
  );
};
