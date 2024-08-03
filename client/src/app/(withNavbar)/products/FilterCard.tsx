"use client";

import { ProductData } from "@/interfaces/ProductData";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function FilterCard({
  setLimit,
  setPageNumber,
  setData,
  setSearch,
}: {
  setLimit: Dispatch<SetStateAction<string>>;
  setPageNumber: Dispatch<SetStateAction<number>>;
  setData: Dispatch<SetStateAction<ProductData[]>>;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // console.log(value);
    setData([]);
    setPageNumber(1);
    setLimit(value);
  };
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };
  return (
    <div className="col-span-3 mt-10 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
      {/*  */}

      <div className=" box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
        <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
          <div className="form-control w-full h-10">
            <input
              type="search"
              placeholder="Search"
              name="search"
              className="input input-bordered w-24 md:w-auto"
              onChange={handleSearch}
            />
          </div>
        </div>
        <label
          htmlFor="Product per Page"
          className=" font-medium text-sm leading-6 text-gray-600 mb-1"
        >
          Show Products
        </label>
        <div className="relative w-full mb-7">
          <select
            name="limitPage"
            id="Product per Page"
            className=" h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
            onChange={handleSelect}
            defaultValue={8}
          >
            <option value="4">show 4 products</option>
            <option value="8">show 8 products</option>
            <option value="12">show 12 products</option>
            <option value="16">show 16 products</option>
            <option value="20">show 20 products</option>
          </select>
          {/* <svg
            className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
              stroke="#111827"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
          {/* </div>
        <p className="font-medium text-sm leading-6 text-black mb-3">
          Discount
        </p>
        <div className="box flex flex-col gap-2">
          <div className="flex items-center">
            <input
              id="checkbox-default-1"
              type="checkbox"
              defaultValue=""
              className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
            />
            <label
              htmlFor="checkbox-default-1"
              className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
            >
              20% or more
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkbox-default-2"
              type="checkbox"
              defaultValue=""
              className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
            />
            <label
              htmlFor="checkbox-default-2"
              className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
            >
              30% or more
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkbox-default-3"
              type="checkbox"
              defaultValue=""
              className="w-5 h-5 appearance-none border border-gray-300  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')]"
            />
            <label
              htmlFor="checkbox-default-3"
              className="text-xs font-normal text-gray-600 leading-4 cursor-pointer"
            >
              50% or more
            </label>
          </div>*/}
        </div>
      </div>
    </div>
  );
}
