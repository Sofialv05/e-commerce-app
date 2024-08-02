"use client";
import Link from "next/link";
import { ProductData } from "@/interfaces/ProductData";
import formatCurrency from "@/helpers/formatCurrency";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

export default function Card({ product }: { product: ProductData }) {
  const router = useRouter();
  const handleLike = (productId: string) => {
    // console.log(productId);
    fetch("http://localhost:3000/api/wishlist", {
      method: "POST",
      body: JSON.stringify(productId),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        // console.log(data);
      });
    router.refresh();
    // revalidatePath("/wishlist");
    // redirect("/wishlist");
  };
  return (
    <main className="bg-gray-200 h-[400px] rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
      <div className="p-6">
        <div
          className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4"
          onClick={() => handleLike(product._id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            />
          </svg>
        </div>
      </div>
      <Link href={`/products/${product.slug}`}>
        <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src={product.thumbnail}
            alt="Product 2"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="grid grid-rows-2 h-[135px] text-center bg-gray-100 p-5">
          <h3 className="row-span-1 text-md self-center font-bold text-gray-800">
            {product.name}
          </h3>
          <h4 className="text-sm self-center row-span-1 text-gray-800 font-md mt-5">
            {formatCurrency(product.price)}
          </h4>
        </div>
      </Link>
    </main>
  );
}
