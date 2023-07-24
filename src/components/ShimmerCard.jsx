import { useSelector } from "react-redux";

const ShimmerCard = () => {
  const config = useSelector((state) => state.config.config);
  return (
    <div>
      <div
        className="w-full h-[500px] content-center items-center max-w-sm p-4 mx-auto mt-0 mr-56 border animate-pulse rounded-md shadow"
        style={{ borderColor: config?.mainColor }}
      >
        <div className="flex space-x-4 ">
          <div className="w-10 h-10 rounded-full bg-slate-500"></div>
          <div className="flex-1 py-1 space-y-6">
            <div className="h-2 rounded bg-slate-600"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 col-span-2 rounded bg-slate-600"></div>
                <div className="h-2 col-span-1 rounded bg-slate-600"></div>
                <div className="h-2 col-span-2 rounded bg-slate-600"></div>
                <div className="h-2 col-span-2 rounded bg-slate-600"></div>
                <div className="h-2 col-span-2 rounded bg-slate-600"></div>
                <div className="h-2 col-span-2 rounded bg-slate-600"></div>
                <div className="h-2 col-span-2 rounded bg-slate-600"></div>
              </div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
              <div className="h-2 rounded bg-slate-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
