import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductEdit from "./Page/ProductEdit";
import ProductView from "./Page/ProductView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchProduct } from "./utils/productSlice";
import { fetchConfig } from "./utils/configSlice";
import Header from "./components/Header";
import HomePage from "./Page/HomePage";
import Sidebar from "./components/Sidebar";

function App() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const status = useSelector((state) => state.product.status);
  const configStatus = useSelector((state) => state.config.status);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchConfig());
  }, [dispatch]);

  if (status === "loading" || configStatus === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (status === "failed" || configStatus === "failed") {
    return <span className="loading loading-spinner text-error"></span>;
  }

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col w-[100%] h-[100%]">
          <Header className="sticky top-0" />
          <div className="flex flex-grow">
            <div className="hidden h-screen md:flex md:flex-shrink-0 md:w-1/4">
              <Sidebar />
            </div>
            <div className="flex-grow h-screen">
              <div className="flex h-screen">
                <div className="flex-grow h-screen">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product" element={<ProductView />} />
                    <Route
                      path="/product/edit"
                      element={<ProductEdit product={product} />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
