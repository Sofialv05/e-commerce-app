import Carousel from "./Carousel";
import Hero from "./Hero";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="h-max pb-20">
      <Hero />
      <div className="relative font-sans my-10 before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src="https://images.unsplash.com/photo-1488901512066-cd403111aeb2?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6 ">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6">
            Discover Our New Furniture Collections
          </h2>
          <p className="sm:text-lg text-base text-center text-gray-200">
            Transform Your Space, Elevate Your Lifestyle – Dream Home Furniture
            Awaits!
          </p>

          <Link
            href={"/products"}
            className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="md:mt-28">
        <h1 className="text-center text-xl md:text-2xl  font-bold">
          Featured Products
        </h1>
      </div>
      <div className=" mt-5">
        <hr className="border-gray-500 border-2" />
        <hr />
      </div>

      <div className="">
        <Carousel />
      </div>
    </main>
  );
}
