import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const config = useSelector((state) => state.config.config);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-center bg-cover font-opensans">
      <div className="flex items-center justify-center w-full h-full bg-gray-400 bg-opacity-50 backdrop-blur-md">
        <button
          className="px-4 py-2 m-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          style={{ backgroundColor: config?.mainColor }}
          onClick={() => {
            navigate("/product");
          }}
        >
          View Product
        </button>
        <button
          className="px-4 py-2 m-4 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          style={{ backgroundColor: config?.mainColor }}
          onClick={() => {
            navigate("/product/edit");
          }}
        >
          Edit Product
        </button>
      </div>
    </div>
  );
};

export default HomePage;
