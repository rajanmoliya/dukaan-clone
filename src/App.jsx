import "./App.css";
import AmountProcessed from "./components/AmountProcessed";
import Header from "./components/Header";
import NextPayout from "./components/NextPayout";
import Overview from "./components/Overview";
import RevenueCard from "./components/RevenueCard";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ">
        <div className="col-span-1 bg-slate-900 text-white border-b">
          <div className="flex justify-between p-5">
            <div>Profile</div>
            <div>username</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <Overview />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        <div className="col-span-1">
          <SideMenu />
        </div>
        <div className="p-4">
          <NextPayout
            title={"Next Payout"}
            orderCount={23}
            amount={"2,312.23"}
          />
        </div>
        <div className="p-4">
          <RevenueCard
            title={"Amount pending"}
            orderCount={13}
            amount={"89,342.65"}
          />
        </div>
        <div className="p-4">
          <AmountProcessed title={"Amount Processed"} amount={"23,92,312.19"} />
        </div>
      </div>
    </>
  );
}

export default App;
