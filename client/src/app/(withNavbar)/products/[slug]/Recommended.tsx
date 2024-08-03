"use client";
import { ProductData } from "@/interfaces/ProductData";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

export default function Recommended() {
  const [firstHalf, setFirstHalf] = useState<ProductData[]>([]);
  const [secondHalf, setSecondHalf] = useState<ProductData[]>([]);
  const [isShowingFirstHalf, setIsShowingFirstHalf] = useState(true);

  const getData = async (): Promise<ProductData[]> => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/featured`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data: ProductData[] = await getData();
      const middleIndex = Math.ceil(data.length / 2);
      setFirstHalf(data.slice(0, middleIndex));
      setSecondHalf(data.slice(middleIndex));
    };

    fetchData();
  }, []);

  const handleNext = () => {
    if (!isShowingFirstHalf) {
      setIsShowingFirstHalf(true);
    } else {
      setIsShowingFirstHalf(false);
    }
  };

  const displayedData = isShowingFirstHalf ? firstHalf : secondHalf;

  return (
    <>
      <div className="lg:hidden">
        <div
          id="indicators-carousel h-auto "
          className="relative w-full "
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="md:px-20 relative overflow-hidden rounded-lg h-full py-10">
            <div className="">
              {displayedData.map((product, index) => (
                <div key={index} className="my-10">
                  <FeaturedCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <div
          id="indicators-carousel h-auto "
          className="relative w-full "
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="px-20 relative h-64 overflow-hidden rounded-lg md:h-full py-10">
            <div className=" grid grid-cols-5 gap-5">
              {displayedData.map((product, index) => (
                <div key={index} className="col-span-1">
                  <FeaturedCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  bg-black dark:bg-gray-800/30 group-hover:bg-gray-600 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-gray-600 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
