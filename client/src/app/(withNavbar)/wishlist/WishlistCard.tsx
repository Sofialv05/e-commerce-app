"use client";
import formatCurrency from "@/helpers/formatCurrency";
import { WishlistData } from "@/interfaces/WishlistData";
import { cookies } from "next/headers";
import Link from "next/link";

export default function WishlistCard({ wishlist }: { wishlist: WishlistData }) {
  const removeHandler = (id: object) => {
    fetch("http://localhost:3000/api/wishlist/" + id, {
      method: "DELETE",
      // headers: {
      //   Cookie: cookies().toString(),
      // },
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <main className="bg-gray-200 h-[400px] rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
      <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
        <img
          src={wishlist.product.thumbnail}
          alt="wishlist 2"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="grid grid-rows-3 h-auto text-center bg-gray-100 p-5">
        <Link href={`/products/${wishlist.product.slug}`}>
          <h3 className="row-span-1 text-md self-center font-bold text-gray-800">
            {wishlist.product.name}
          </h3>
          <h4 className="text-sm self-center row-span-1 text-gray-800 font-md mt-5">
            {formatCurrency(wishlist.product.price)}
          </h4>
        </Link>
        <button
          onClick={() => removeHandler(wishlist._id)}
          className="btn row-span-1 bg-red-600 text-white"
        >
          Remove
        </button>
      </div>
    </main>
  );
}
