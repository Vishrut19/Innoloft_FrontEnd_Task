import ProfileCard from "./ProfileCard";
import Location from "../assets/location.svg";
import { useSelector } from "react-redux";

const UserSection = () => {
  const product = useSelector((state) => state.product.product);
  const config = useSelector((state) => state.config.config);
  return (
    <>
      <div
        className="p-3 mr-20 border border-gray-400 rounded font-opensans"
        style={{ borderColor: config?.mainColor }}
      >
        <div className="ml-3">
          <h2 className="text-xl font-bold text-[#374151]">Offered By</h2>
          <img
            src={config?.logo}
            alt="Innoloft Logo"
            className="mt-[10px] w-[300px]"
          />
          <ProfileCard />
          <div className="flex items-center space-x-2">
            <img src={Location} alt="Location Icon" />
            <div className="mb-4 font-sans text-sm leading-5 text-gray-500 break-words">
              {product?.company?.address?.street || "Jülicher Straße"}{" "}
              {product?.company?.address?.house || "72a"}, <br />
              {product?.company?.address?.zipCode || "52070"}{" "}
              {product?.company?.address?.city?.name || "Aachen"},
              {product?.company?.address?.country?.name || "Germany"}
            </div>
          </div>
          <iframe
            className="w-full h-[250px] border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.78075150076!2d6.097925576315683!3d50.77963776360746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0995d36ff22ff%3A0x3a4248b50ce934de!2sJ%C3%BClicher%20Str.%2072a%2C%2052070%20Aachen%2C%20Germany!5e0!3m2!1sen!2sin!4v1689597649368!5m2!1sen!2sin"
            title="Google Maps Embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default UserSection;
