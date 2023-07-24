import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductEdit from "./Page/ProductEdit";
import ProductView from "./Page/ProductView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchProduct } from "./Redux/productSlice";
import { fetchConfig } from "./Redux/configSlice";
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
        <h1 className="text-5xl text-green-600 animate-pulse font-opensans">
          Loading......
        </h1>
      </div>
    );
  }

  if (status === "failed" || configStatus === "failed") {
    return (
      <div className="text-5xl text-red-600 font-opensans animate-pulse">
        Error loading data
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col w-[100%] h-[100%] font-opensans">
          <Header className="sticky top-0" />
          <div className="grid flex-grow grid-cols-4">
            <div className="hidden h-screen col-span-1 md:block">
              <Sidebar />
            </div>
            <div className="h-screen col-span-3">
              <div className="grid h-screen grid-cols-2">
                <div className="h-screen col-span-2">
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
