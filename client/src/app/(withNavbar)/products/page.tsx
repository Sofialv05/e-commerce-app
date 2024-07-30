import { ProductData } from "@/interfaces/ProductData";

async function getData(): Promise<ProductData[]> {
  const res = await fetch("http://localhost:3001/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Products({ product }: { product: ProductData }) {
  const data = await getData();
  return (
    <div>
      {data.map((product) => {
        return <h1 key={product.slug}>This is product page</h1>;
      })}
    </div>
  );
}
