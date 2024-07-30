// import Card from "@/components/Card";
// import { ProductData } from "@/interfaces/ProductData";
// import FilterCard from "./FilterCard";

// async function getData(): Promise<ProductData[]> {
//   const res = await fetch("http://localhost:3001/products", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Products({ product }: { product: ProductData }) {
//   const data = await getData();
//   return (
//     <section className="w-full">
//       <div className="w-full px-4 md:px-8">
//         <div className="flex flex-col lg:items-center max-lg:gap-4 justify-between w-full">
//           <h1 className="text-2xl text-center">Products</h1>
//         </div>
//         <svg
//           className="my-7 w-full"
//           xmlns="http://www.w3.org/2000/svg"
//           width={1216}
//           height={2}
//           viewBox="0 0 1216 2"
//           fill="none"
//         >
//           <path d="M0 1H1216" stroke="#E5E7EB" />
//         </svg>
//         <div className="grid grid-cols-12 gap-20">
//           {/*  */}
//           <FilterCard />
//           {/*  */}
//           <div className="col-span-9">
//             <div className="grid grid-cols-4 gap-5">
//               {data.map((product, index) => {
//                 return <Card key={index} />;
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
