import Card from "@/components/Card";
import Carousel from "./Carousel";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="h-max pb-20">
      <Hero />
      <div className="w-full bg-gray-500 my-10 py-10 h-40">
        <h1 className="text-xl text-center">discount banner</h1>
      </div>
      <div>
        <h1 className="text-center text-xl font-bold">Featured Products</h1>
      </div>
      <div className="mb-10 mt-5">
        <hr className="w-5" />
        <hr />
      </div>

      <div className="grid grid-cols-5 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full bg-gray-500 my-10 py-10 h-30">
        <h1 className="text-xl text-center">About Us</h1>
      </div>
    </main>
  );
}
