function SideMenu() {
  return (
    <div className=" bg-slate-900 text-white ">
      <ul className="p-4 ">
        <li className="mb-5 hover:bg-slate-700 p-4 ">Home</li>
        <li className="mb-5 hover:bg-slate-700 p-4 ">Orders</li>
        <li className="mb-5 hover:bg-slate-700 p-4 ">Products</li>
        <li className="mb-5 hover:bg-slate-700 p-4">Delivery</li>
        <li className="mb-5 hover:bg-slate-700 p-4">Marketing</li>
        <li className="mb-5 hover:bg-slate-700 p-4">Analytics</li>
        <li className="mb-5 hover:bg-slate-700 p-4">Payouts</li>
        <li className="mb-5 hover:bg-slate-700 p-4">Discounts</li>
        <li className="mb-5 hover:bg-slate-700 p-4">Audience</li>
        <li className="mb-5 hover:bg-slate-700 p-4">Appeareance</li>
        <li className="mb-5 hover:bg-slate-700 p-4">Plugins</li>
      </ul>

      <div className=" bg-slate-700 w-40 ml-20 rounded-md  h-20 ">
        <div className="flex items-center justify-between p-4">
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
                d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
              />
            </svg>
          </div>
          <div className="ml-4 ">
            <div> Credits</div>
            <div> 224.10</div>
          </div>
        </div>
      </div>

      <div className=" mt-6 text-black">.</div>
    </div>
  );
}

export default SideMenu;
