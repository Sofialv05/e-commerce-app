import Link from "next/link";

export default function WishlistCard() {
  return (
    <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
      <div className="p-6">
        <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <img
            src="https://readymadeui.com/images/coffee8.webp"
            alt="Product 2"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="text-center bg-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800">Mocha Madness</h3>
        <h4 className="text-lg text-gray-800 font-bold mt-6">$12</h4>
        <button className="btn bg-gray-600 text-white mt-8 hover:text-gray-700 hover:bg-gray-400 text-base">
          Remove from wishlist
        </button>
      </div>
    </div>
  );
}
