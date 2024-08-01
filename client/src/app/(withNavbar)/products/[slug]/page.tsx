import { ProductData } from "@/interfaces/ProductData";
import DetailCarousel from "./DetailCarousel";
import formatCurrency from "@/helpers/formatCurrency";

export default async function Detail({ params }: { params: { slug: string } }) {
  async function getData(slug: string): Promise<ProductData> {
    // console.log(params.slug, "<<<<<<<< ini di page");
    const res = await fetch(
      `http://localhost:3000/api/products/${params.slug}`,
      {
        cache: "no-store",
      }
    );
    // console.log(res);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const data = await getData(params.slug);
  return (
    <main className="w-full shadow-lg rounded-md bg-gray-100 mx-20">
      <div className=" w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-5 ">
          <div className=" lg:col-span-3 h-[600px]">
            <div className="grid grid-cols-4  h-full items-center justify-center p-10">
              <div className="col-span-3 flex justify-center items-center">
                <img
                  src={data.thumbnail}
                  alt="Product"
                  className="h-[400px] rounded object-cover"
                />
              </div>

              <div className="mt-4 cols-span-1 flex flex-col justify-center gap-4 mx-auto">
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
            <h2 className="text-3xl font-semibold ">{data.name}</h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <p className=" text-4xl font-semibold">
                {formatCurrency(data.price)}
              </p>
            </div>
            <div className="inline-block w-full my-12 ">
              <button className="btn w-full mx-auto">Add to Wishlist</button>
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
