"use client";
import { useState, useEffect } from "react";
import { ProductData } from "@/interfaces/ProductData";
import DetailCarousel from "./DetailCarousel";
import formatCurrency from "@/helpers/formatCurrency";
import { useRouter } from "next/navigation";

export default function Detail({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [data, setData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `http://localhost:3000/api/products/${params.slug}`,
          {
            cache: "no-store",
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const productData: ProductData = await res.json();
        setData(productData);
      } catch (error) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [params.slug]);

  const handleLike = async (productId: string) => {
    try {
      const res = await fetch("http://localhost:3000/api/wishlist", {
        method: "POST",
        body: JSON.stringify(productId),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to add the product to wishlist");
      }
      await res.json();
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No product found</p>;

  return (
    <main className="w-full shadow-lg rounded-md bg-gray-100 mx-20">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3 h-[600px]">
            <div className="grid grid-cols-4 h-full items-center justify-center p-10">
              <div className="col-span-3 flex justify-center items-center">
                <img
                  src={data.thumbnail}
                  alt="Product"
                  className="h-[400px] rounded object-cover"
                />
              </div>
              <div className="mt-4 col-span-1 flex flex-col justify-center gap-4 mx-auto">
                {data.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-[120px] h-[120px] flex items-center justify-center p-4 cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-gray-400 rounded-md p-10">
            <h2 className="text-3xl font-semibold">{data.name}</h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <p className="text-4xl font-semibold">
                {formatCurrency(data.price)}
              </p>
            </div>
            <div className="inline-block w-full my-12">
              <button
                onClick={() => handleLike(data._id)}
                className="btn w-full mx-auto"
              >
                Add to Wishlist
              </button>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">
                About the product
              </h3>
              <div className="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
                <p>{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
