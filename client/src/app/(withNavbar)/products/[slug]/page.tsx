// "use client";
import { ProductData } from "@/interfaces/ProductData";
import formatCurrency from "@/helpers/formatCurrency";
import { revalidatePath } from "next/cache";
import { handleLike } from "@/actions/addWishlist";
import type { Metadata, ResolvingMetadata } from "next";
import Recommended from "./Recommended";
import DetailImages from "./DetailImage";
import DetailImage from "./DetailImage";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // console.log(params);
  const product: ProductData = await fetch(
    `http://localhost:3000/api/products/${params.slug}`
  ).then((res) => res.json());
  // console.log(product);
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function Detail({ params }: { params: { slug: string } }) {
  async function getData() {
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
      const result = await res.json();
      return result;
    } catch (error) {
      console.error("Failed to load product data", error);
    }
  }

  const data = await getData();

  return (
    <div className="flex flex-col justify-center items-center md:px-14 lg:px-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">Product Detail</h1>
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
      </div>
      <div className="w-80 md:w-full shadow-lg rounded-md bg-gray-100 lg:mx-20">
        <div className="md:w-full">
          <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 md:h-[600px]">
              <DetailImage thumbnail={data.thumbnail} images={data.images} />
            </div>
            <div className="col-span-2 bg-gray-400 rounded-md p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {data.name}
              </h2>
              <div className="flex flex-wrap gap-4 mt-8">
                <p className="text-xl md:text-4xl font-semibold">
                  {formatCurrency(data.price)}
                </p>
              </div>
              <div className="inline-block w-full my-12">
                <form
                  action={async () => {
                    "use server";
                    handleLike(data._id);
                    revalidatePath("/wishlist");
                  }}
                >
                  <button className="btn w-full mx-auto">
                    Add to Wishlist
                  </button>
                </form>
              </div>
              <div className="mt-8">
                <div className="space-y-3 mt-4 pl-4 text-sm text-white">
                  <h3 className="text-xl font-semibold text-white">
                    About the product
                  </h3>
                  <p>{data.excerpt}</p>
                  <p className="text-justify">{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 flex flex-col justify-center items-center">
        <h1 className="text-2xl">Products You May Like</h1>
        <Recommended />
      </div>
    </div>
  );
}
