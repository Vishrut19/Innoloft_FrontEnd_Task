import Notifications from "../assets/notifications.svg";
import DownArrow from "../assets/accordion-down-light.svg";
import Messenger from "../assets/messenger.svg";
import Profile from "../assets/profile.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const product = useSelector((state) => state.product.product);
  const config = useSelector((state) => state.config.config);

  return (
    <div
      className="flex items-center justify-between w-full h-full px-4 font-opensans navbar"
      style={{ backgroundColor: config?.mainColor }}
    >
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={config?.logo} className="w-[130px] h-auto" alt="Logo" />
        </Link>
      </div>

      {/* Search bar (Hidden on mobile and visible on medium screens and larger) */}
      <div className="items-center justify-center hidden w-full md:flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered rounded-sm w-[60rem] focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50 focus:font-bold"
          />
        </div>
      </div>

      {/* Icons (Hidden on mobile and visible on medium screens and larger) */}
      <div className="items-center flex-none hidden ml-4 md:flex">
        <img
          src={Messenger}
          alt="Messenger"
          className="mx-2 transform hover:scale-150"
        />
        <p className="mx-2 text-white hover:scale-150">EN</p>
        <img
          src={DownArrow}
          alt="Down Arrow"
          className="mx-2 hover:scale-150"
        />
        <img
          src={Notifications}
          alt="Notifications"
          className="mx-2 hover:scale-150"
        />
        <div className="flex items-center dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-6 h-6 rounded-full">
              <img
                src={product?.user?.profilePicture || Profile}
                alt="Profile"
              />
            </div>
          </label>
          <img
            src={DownArrow}
            alt="Down Arrow"
            className="ml-2 hover:scale-150"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
