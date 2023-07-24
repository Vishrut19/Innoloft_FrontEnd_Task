import defaultProfile from "../assets/profile.png";
import { useSelector } from "react-redux";

const ProfileCard = () => {
  const product = useSelector((state) => state.product.product);

  return (
    <div className="flex items-center p-4 mb-5 font-opensans">
      <img
        src={product?.user?.profilePicture || defaultProfile}
        alt="Profile Picture"
        className="w-16 h-16 mr-4 rounded-full"
      />
      <div>
        <p className="text-lg font-medium">
          {product?.user?.firstName} {product?.user?.lastName}
        </p>
        <p className="font-serif text-gray-500 text-md">
          {product?.user?.position}
        </p>
        <p className="text-sm font-medium text-gray-400">
          {product?.company?.name}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
