import { FaAward } from "react-icons/fa";
import { useSelector } from "react-redux";

const PatentButton = () => {
  const config = useSelector((state) => state.config.config);

  return (
    <>
      <div className="absolute top-0 left-0 flex justify-between w-full font-opensans">
        <div className="w-fit bg-white rounded-br-[10px] flex items-center">
          <div
            className="w-[40px] h-[40px] rounded-br-[10px] flex items-center justify-center"
            style={{ backgroundColor: config?.mainColor }}
          >
            <FaAward size={16} color="white" />
          </div>
          <div className="px-3">
            <p className="font-semibold text-[#374151]">Patent</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatentButton;
