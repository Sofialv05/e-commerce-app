import DetailCarousel from "./DetailCarousel";

export default function Detail() {
  return (
    <main className="w-full shadow-lg rounded-md bg-gray-100 mx-20">
      <div className=" w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="w-full lg:col-span-3">
            <div className="rounded-md">
              <img
                src="https://readymadeui.com/images/coffee2.webp"
                alt="Product"
                className="w-9/12 rounded object-cover mx-auto"
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
              <div className="w-[90px] h-20 flex items-cemter justify-center  p-4 cursor-pointer">
                <img
                  src="https://readymadeui.com/images/coffee3.webp"
                  alt="Product2"
                  className="w-full object-contain"
                />
              </div>
              <div className="w-[90px] h-20 flex items-cemter justify-center  p-4 cursor-pointer">
                <img
                  src="https://readymadeui.com/images/coffee4.webp"
                  alt="Product2"
                  className="w-full object-contain"
                />
              </div>
              <div className="w-[90px] h-20 flex items-cemter justify-center  p-4 cursor-pointer">
                <img
                  src="https://readymadeui.com/images/coffee5.webp"
                  alt="Product2"
                  className="w-full object-contain"
                />
              </div>
              <div className="w-[90px] h-20 flex items-cemter justify-center  p-4 cursor-pointer">
                <img
                  src="https://readymadeui.com/images/coffee6.webp"
                  alt="Product2"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-gray-400 rounded-md p-10">
            <h2 className="text-3xl font-semibold ">Espresso Elegante</h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <p className=" text-4xl font-semibold">$12</p>
            </div>
            <div className="inline-block w-full my-12 ">
              <button className="btn w-full mx-auto">Add to Wishlist</button>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">
                About the coffee
              </h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
                <li>
                  A cup of coffee is a beverage essential because of its
                  timeless appeal
                </li>
                <li>
                  Easy to prepare. It can be brewed using various methods, from
                  drip machines to manual pour-overs.
                </li>
                <li>
                  Available in various sizes, from a standard espresso shot to a
                  large Americano, catering to different preferences.
                </li>
                <li>
                  You can customize your coffee by adding cream, sugar, or
                  flavorings to suit your taste preferences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
