"use client";

import { useEffect, useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "./Card";
import { ProductData, ProductResult } from "@/interfaces/ProductData";
import FilterCard from "./FilterCard";
import Loading from "./loading";

export default function Products() {
  const [data, setData] = useState<ProductData[]>([]);
  const [search, setSearch] = useState("");
  const [limitPage, setLimitPage] = useState("8");
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getData = useCallback(
    async (pageNumber: number, limitPage: string, search: string) => {
      const apiUrl = new URL(
        process.env.NEXT_PUBLIC_BASE_URL + `/api/products`
      );

      apiUrl.searchParams.append("page", pageNumber.toString());
      apiUrl.searchParams.append("size", limitPage);
      if (search) {
        apiUrl.searchParams.append("search", search);
      }

      const res = await fetch(apiUrl.toString(), { cache: "no-store" });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    },
    []
  );

  const loadMoreData = useCallback(async () => {
    try {
      const newData: ProductResult = await getData(
        pageNumber,
        limitPage,
        search
      );
      const result = newData.result;

      setData((prevData) => [...prevData, ...result]);

      if (result.length === 0) {
        setHasMore(false);
      } else {
        handlePageNumber();
      }
    } catch (error) {
      console.error(error);
      setHasMore(false);
    }
  }, [pageNumber, limitPage, search, getData]);

  useEffect(() => {
    setData([]);
    setPageNumber(1);
    setHasMore(true);
  }, [limitPage, search]);

  useEffect(() => {
    loadMoreData();
  }, [pageNumber, loadMoreData]);

  const handlePageNumber = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  return (
    <section className="w-full">
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col xl:items-center max-lg:gap-4 justify-between w-full">
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
        <div className="flex flex-col xl:grid xl:grid-cols-12 xl:gap-20">
          <FilterCard
            setLimit={setLimitPage}
            setData={setData}
            setPageNumber={setPageNumber}
            setSearch={setSearch}
          />
          <div className="mt-10 md:col-span-9">
            <div id="scrollableDiv" style={{ height: 800, overflow: "auto" }}>
              <InfiniteScroll
                dataLength={data.length}
                next={handlePageNumber}
                hasMore={hasMore}
                loader={<Loading />}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                scrollableTarget="scrollableDiv"
              >
                <div className="flex flex-col md:grid-cols-2 gap-10 md:grid xl:grid-cols-4 md:p-10 md:gap-5">
                  {data.map((product, index) => {
                    return <Card key={index} product={product} />;
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
