import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CoverImage from "../assets/cover_image.png";
import Breadcrumbs from "../components/Breadcrumbs";
import PatentButton from "../components/PatentButton";
import UserSection from "../components/UserSection";
import ShimmerCard from "../components/ShimmerCard";
import Dev from "../assets/dev.svg";
import Stratergy from "../assets/strategy.svg";
import Clock from "../assets/clock.svg";
import Money from "../assets/investor.svg";

function ProductView() {
  const product = useSelector((state) => state.product.product);
  const config = useSelector((state) => state.config.config);

  return (
    <div className="sm:ml-20 md:ml-0">
      <Breadcrumbs />
      <div className="grid grid-cols-1 gap-0 mt-3 md:grid-cols-2">
        {/* Card - 1 : Product View Card */}
        <div className="border border-gray-400 rounded">
          <div className="container">
            <div className="relative w-full h-0 pb-[40%] overflow-hidden">
              <Link to="/">
                <img
                  src={product?.picture || CoverImage}
                  alt="Cover Image"
                  className="absolute top-0 left-0 object-cover w-full h-full"
                />
              </Link>
              <PatentButton />
            </div>
            <h5 className="ml-3 mt-3 text-[#374151] text-base">
              {product?.name} ({product?.type?.name || "Software"})
            </h5>
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="px-3 py-3 border border-gray-100 rounded-md"
            />
          </div>
        </div>
        {/* Card - 2:  User Section Card */}
        {config?.hasUserSection === true ? <UserSection /> : <ShimmerCard />}
      </div>

      <div className="mt-2 mr-20">
        {/* Card - 3 : Video Card */}
        <div className="relative p-3 mb-1 overflow-hidden border border-gray-400 rounded">
          <div className="px-3 pb-3">
            <h2 className="mb-2 text-lg">Video</h2>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ height: "400px" }}
          >
            <iframe
              className="absolute  rounded-md w-full md:w-[715px] h-full"
              style={{ width: "715px", height: "400px" }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Card - 4 : Categorie, Business Model, TRL, Costs */}
        <div className="pt-3 pb-0 pl-3 pr-3 mb-5 overflow-hidden border border-gray-400 rounded">
          <h5 className="text-base text-[#374151]">Offer Details</h5>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="flex items-center gap-2 p-3 border border-gray-400 border-none">
              <img src={Dev} alt="Technology" />
              <div>
                <h3 className="text-lg font-normal text-[#6B7280]">
                  Technology
                </h3>
                {product?.categories?.map((category) => (
                  <span
                    key={category.id}
                    className="inline-block px-2 py-1 text-sm font-semibold mr-1 text-[#6B7280] bg-[#E5E7EB] rounded-full"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 border border-gray-400 border-none rounded">
              <img src={Stratergy} alt="Stratergy" />
              <div>
                <h3 className="text-lg font-normal text-[#6B7280]">
                  Business Model
                </h3>
                {product?.businessModels?.map((model) => (
                  <span
                    key={model.id}
                    className="inline-block px-2 py-1 text-sm font-semibold mr-1 text-[#6B7280] bg-[#E5E7EB] rounded-full mt-2"
                  >
                    {model.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 border border-gray-400 border-none rounded">
              <img src={Clock} alt="Clock Icon" />
              <div>
                <h3 className="text-lg font-normal text-[#6B7280]">TRL</h3>
                <span className="inline-block px-2 py-1 text-sm font-semibold text-[#6B7280] bg-[#E5E7EB] rounded-lg">
                  {product?.trl?.name}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 border border-gray-400 border-none rounded">
              <img src={Money} alt="Money Icon" />
              <div>
                <h3 className="text-lg  text-[#6B7280] font-normal">Costs</h3>
                <span className="inline-block px-2 py-1 text-sm font-semibold text-[#6B7280] bg-[#E5E7EB] rounded-full">
                  {product?.investmentEffort}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
