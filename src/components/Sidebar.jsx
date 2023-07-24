import ProfileCard from "./ProfileCard";
import Home from "../assets/home.svg";
import Group from "../assets/group.svg";
import Organization from "../assets/organizations.svg";
import DownArrow from "../assets/accordion-down-light.svg";

const Sidebar = () => {
  return (
    <div className="mt-10 ml-10 w-[19rem] p-4 text-black">
      <ProfileCard />
      <ul className="ml-7">
        <li className="flex items-center my-3">
          <img src={Home} alt="Home" className="w-6 h-6 mr-2" />
          <p>Home</p>
        </li>
        <li className="flex items-center my-3">
          <img src={Group} alt="Group" className="w-6 h-6 mr-2" />
          <p>Members</p>
        </li>
        <li className="flex items-center justify-between my-3">
          <div className="flex items-center">
            <img
              src={Organization}
              alt="Organization"
              className="w-6 h-6 mr-2"
            />
            <p>Organizations</p>
          </div>
          <img src={DownArrow} alt="Down Arrow" className="filter invert" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
