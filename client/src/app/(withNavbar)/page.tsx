import Card from "@/components/Card";
import Carousel from "./Carousel";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="h-max pb-20">
      <Hero />
      <div className="relative font-sans my-10 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6">
            Explore the World
          </h2>
          <p className="sm:text-lg text-base text-center text-gray-200">
            Embark on unforgettable journeys. Book your dream vacation today!
          </p>

          <button
            type="button"
            className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center text-xl font-bold">Featured Products</h1>
      </div>
      <div className="mb-10 mt-5">
        <hr className="w-5" />
        <hr />
      </div>

      <div className="grid grid-cols-5 gap-5"></div>
      <div className="w-full bg-gray-500 my-10 py-10 h-30">
        <h1 className="text-xl text-center">About Us</h1>
      </div>
    </main>
  );
}
