import { WishlistData } from "@/interfaces/WishlistData";
import WishlistCard from "./WishlistCard";
import { cookies } from "next/headers";

export default async function Wishlist({
  wishlist,
}: {
  wishlist: WishlistData;
}) {
  async function getData(): Promise<WishlistData[]> {
    const res = await fetch(`http://localhost:3000/api/wishlist`, {
      cache: "no-store",
      headers: {
        Cookie: cookies().toString(),
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  // useEffect(() => {
  //   getData();
  // });

  const data = await getData();
  return (
    <section className="w-full min-h-screen">
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col lg:items-center max-lg:gap-4 justify-between w-full">
          <h1 className="text-2xl text-center">Your Wishlist</h1>
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
        <div className="flex flex-col md:grid md:grid-cols-5 gap-10">
          {data.map((wishlist, index) => {
            return <WishlistCard key={index} wishlist={wishlist} />;
          })}
        </div>
      </div>
    </section>
  );
}
