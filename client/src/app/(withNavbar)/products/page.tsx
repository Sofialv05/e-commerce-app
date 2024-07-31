"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "@/components/Card";
import { ProductData } from "@/interfaces/ProductData";
import FilterCard from "./FilterCard";

async function getData(page: number): Promise<ProductData[]> {
  const res = await fetch(`http://localhost:3001/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Products({ product }: { product: ProductData }) {
  const [data, setData] = useState<ProductData[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = async () => {
    try {
      const newData = await getData(page);
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full">
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col lg:items-center max-lg:gap-4 justify-between w-full">
          <h1 className="text-2xl text-center">Products</h1>
        </div>
        <svg
          className="my-7 w-full"
          xmlns="http://www.w3.org/2000/svg"
          width={1216}
          height={2}
          viewBox="0 0 1216 2"
          fill="none"
        >
          <path d="M0 1H1216" stroke="#E5E7EB" />
        </svg>
        <div className="grid grid-cols-12 gap-20">
          <FilterCard />
          <div className="col-span-9">
            <div id="scrollableDiv" style={{ height: 800, overflow: "auto" }}>
              <InfiniteScroll
                dataLength={data.length}
                next={loadMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"
                style={{ display: "flex", flexDirection: "column-reverse" }}
                inverse={true}
              >
                <div className="grid grid-cols-4 gap-5">
                  {data.map((product, index) => {
                    return <Card key={index} />;
                  })}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
