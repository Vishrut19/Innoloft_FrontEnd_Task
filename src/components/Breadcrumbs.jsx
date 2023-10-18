import HomeIcon from "../assets/home.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  const config = useSelector((state) => state.config.config);
  const navigate = useNavigate();

  const goToEditPage = () => {
    navigate("/product/edit");
  };

  return (
    <div className="text-sm text-[#6B7280] breadcrumbs md:flex">
      <ul className="flex flex-wrap">
        <li className="mr-2">
          <a>
            <img src={HomeIcon} alt="Home Icon" className="filter invert" />
          </a>
        </li>
        <li className="mr-2">
          <a>Offers</a>
        </li>
        <li className="flex flex-wrap items-center">
          <a className="mr-2">LoftOS</a>
        </li>
      </ul>
      <div className="mt-2 ml-5 md:ml-auto md:mr-14 md:justify-end md:flex sm:justify-start sm:flex sm:mt-0 md:mt-0">
        <button
          onClick={() => goToEditPage()}
          className="px-8 py-2 text-sm font-medium text-white rounded  sm:ml-9 md:ml-[480px] mr-[31px]"
          style={{ backgroundColor: config?.mainColor }}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Breadcrumbs;
