/* eslint-disable react/prop-types */
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../Redux/productSlice";
import { fetchTRL } from "../Redux/trlSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import CoverImage from "../assets/cover_image.png";
import PatentButton from "../components/PatentButton";
import UserSection from "../components/UserSection";
import ShimmerCard from "../components/ShimmerCard";
import VideoSection from "../components/VideoSection";

function ProductEdit({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, setValue } = useForm();

  const trls = useSelector((state) => state.trl.trl);
  const config = useSelector((state) => state.config.config);

  const [editedCategory, setEditedCategory] = useState({});
  const [editedBusinessModel, setEditedBusinessModel] = useState({});
  const [categories, setCategories] = useState(product.categories || []);
  const [businessModels, setBusinessModels] = useState(
    product.businessModels || []
  );

  const newCategoryName = watch("newCategoryName");
  const newBusinessModelName = watch("newBusinessModelName");

  useEffect(() => {
    dispatch(fetchTRL());
  }, [dispatch]);

  const onSubmit = (data) => {
    delete data.newCategoryName;
    delete data.newBusinessModelName;
    data.categories = categories;
    data.businessModels = businessModels;
    const selectedTrl =
      trls.find((trl) => trl.id === data.trls) || product?.trl;
    data.trl = selectedTrl;
    dispatch(updateProduct(data));
    navigate("/product");
  };

  const addCategory = () => {
    if (!newCategoryName || newCategoryName.trim() === "") return;
    const updatedCategories = [
      ...categories,
      { id: Date.now(), name: newCategoryName.trim() },
    ];
    setCategories(updatedCategories);
    setValue("newCategoryName", "");
  };

  const addBusinessModel = () => {
    if (!newBusinessModelName || newBusinessModelName.trim() === "") return;
    const updatedBusinessModels = [
      ...businessModels,
      { id: Date.now(), name: newBusinessModelName.trim() },
    ];
    setBusinessModels(updatedBusinessModels);
    setValue("newBusinessModelName", "");
  };

  const removeCategory = (categoryId) => {
    const updatedCategories = categories.filter((cat) => cat.id !== categoryId);
    setCategories(updatedCategories);
  };

  const removeBusinessModel = (modelId) => {
    const updatedBusinessModels = businessModels.filter(
      (model) => model.id !== modelId
    );
    setBusinessModels(updatedBusinessModels);
  };

  if (!product) {
    return <div>No product loaded</div>;
  }

  return (
    <div className="sm:ml-20 md:ml-0">
      <div className="md:mt-1 md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">Offer Details</h2>
          <button
            type="submit"
            form="product-edit-form" // Give this form an ID
            className="px-4 py-2 mr-20 text-sm font-medium text-white rounded-md sm:mt-2"
            style={{ backgroundColor: config?.mainColor }}
          >
            View Offer
          </button>
        </div>

        <form id="product-edit-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-0 mt-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            {/* Card 1 : Cover Image Card */}
            <div className="border border-gray-400 rounded">
              <div className="container">
                <div className="relative">
                  <img
                    src={product?.picture || CoverImage}
                    alt="Cover Image"
                    className="object-cover w-full h-auto rounded max-h-64"
                  />
                  <button
                    className="absolute top-0 right-0 p-2 rounded-bl-lg"
                    style={{ backgroundColor: config?.mainColor }}
                  >
                    <RiDeleteBin6Line
                      alt="Delete Icon"
                      className="fill-white"
                    />
                  </button>
                  <PatentButton />
                  <div className="p-4">
                    <input
                      defaultValue={product?.name}
                      {...register("name")}
                      className="w-full rounded-md input input-bordered input-info"
                    />
                  </div>
                  <div>
                    <Editor
                      initialValue={product?.description}
                      onEditorChange={(content) => {
                        setValue("description", content);
                      }}
                      init={{
                        height: 150,
                        menubar: false,
                        plugins: [
                          "advlist autolink lists link charmap print preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table paste wordcount",
                        ],
                        toolbar:
                          "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link unlink | removeformat",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 : User Section Card  */}
            {config?.hasUserSection === true ? (
              <UserSection />
            ) : (
              <ShimmerCard />
            )}
          </div>

          <div className="mt-2 mb-8 mr-20">
            {/*Card 3 : Video Card */}
            <VideoSection />

            {/* Card 4 : Categories and Others Card */}
            <div className="relative -mb-4 overflow-hidden border border-gray-400 rounded">
              <div className="p-4">
                <label
                  className="block mt-2 mb-2 text-base"
                  htmlFor="categories"
                >
                  CATEGORIES
                </label>

                {/*
                 * When we click on the input of 1 category and rename/ edit it and after that move to next category
                 * then the edited value is saved.
                 */}

                {categories.map((category) => (
                  <div key={category.id}>
                    <input
                      value={editedCategory[category.id] || category.name}
                      onChange={(e) =>
                        setEditedCategory({
                          ...editedCategory,
                          [category.id]: e.target.value,
                        })
                      }
                      onBlur={() => {
                        if (editedCategory[category.id]) {
                          const updatedCategories = categories.map((cat) =>
                            cat.id === category.id
                              ? { ...cat, name: editedCategory[category.id] }
                              : cat
                          );
                          setCategories(updatedCategories);
                          // Remove the edited category from our local edits
                          const updatedEdited = { ...editedCategory };
                          delete updatedEdited[category.id];
                          setEditedCategory(updatedEdited);
                        }
                      }}
                      className="w-full max-w-xs mt-2 rounded-md input input-bordered input-info"
                    />
                    <button
                      type="button"
                      onClick={() => removeCategory(category.id)}
                      className="ml-3 text-white rounded-md btn-md"
                      style={{ backgroundColor: config?.mainColor }}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <input
                  type="text"
                  className="w-full max-w-xs mt-2 rounded-md input input-bordered input-info"
                  placeholder="Add new category"
                  {...register("newCategoryName")}
                />
                <button
                  type="button"
                  className="ml-2 text-white rounded-md btn-md"
                  style={{ backgroundColor: config?.mainColor }}
                  onClick={addCategory}
                >
                  Add Category
                </button>

                <label
                  className="block mt-2 mb-2 text-lg"
                  htmlFor="businessModels"
                >
                  BUSINESS MODELS
                </label>

                {/*
                 * When we click on the input of 1 business model and rename/ edit it and after that move to next business model
                 * then the edited value is saved.
                 */}

                {businessModels.map((model) => (
                  <div key={model.id}>
                    <input
                      value={editedBusinessModel[model.id] || model.name}
                      onChange={(e) =>
                        setEditedBusinessModel({
                          ...editedBusinessModel,
                          [model.id]: e.target.value,
                        })
                      }
                      onBlur={() => {
                        if (editedBusinessModel[model.id]) {
                          const updatedBusinessModels = businessModels.map(
                            (mod) =>
                              mod.id === model.id
                                ? {
                                    ...mod,
                                    name: editedBusinessModel[model.id],
                                  }
                                : mod
                          );
                          setBusinessModels(updatedBusinessModels);
                          // Remove the edited business model from our local edits
                          const updatedEdited = { ...editedBusinessModel };
                          delete updatedEdited[model.id];
                          setEditedBusinessModel(updatedEdited);
                        }
                      }}
                      className="w-full max-w-xs mt-2 rounded-md input input-bordered input-info"
                    />
                    <button
                      type="button"
                      onClick={() => removeBusinessModel(model.id)}
                      className="ml-3 text-white rounded-md btn-md"
                      style={{ backgroundColor: config?.mainColor }}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <input
                  type="text"
                  className="w-full max-w-xs mt-1 rounded-md input input-bordered input-info"
                  placeholder="Add new business model"
                  {...register("newBusinessModelName")}
                />
                <button
                  type="button"
                  className="ml-2 text-white rounded-md btn-md"
                  style={{ backgroundColor: config?.mainColor }}
                  onClick={addBusinessModel}
                >
                  Add Business Model
                </button>

                <label className="block mt-2 mb-2 text-lg" htmlFor="trl">
                  COST
                </label>
                <input
                  className="w-full max-w-xs rounded-md input input-bordered input-info"
                  defaultValue={product?.investmentEffort}
                  {...register("investmentEffort")}
                />

                <label className="block mt-2 mb-1 text-lg" htmlFor="trl">
                  TRL
                </label>
                <select
                  className="w-full max-w-xs select select-bordered select-primary"
                  style={{ borderColor: config?.mainColor }}
                  {...register("trls", { defaultValue: product?.trl?.id })}
                >
                  {trls.map((trl) => (
                    <option
                      key={trl.id}
                      value={trl.id}
                      selected={product?.trl?.id === trl.id}
                    >
                      {trl.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductEdit;
