import { cookies } from "next/headers";
import toast from "react-hot-toast";

export const handleLike = async (productId: string) => {
  try {
    const res = await fetch(process.env.BASE_URL + "/api/wishlist", {
      method: "POST",
      body: JSON.stringify(productId),
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });
    if (!res.ok) {
      throw new Error("Failed to add the product to wishlist");
    }
    const data: { message: string } = await res.json();
    // console.log(data.message);
    // toast.success(data.message);
  } catch (error) {
    console.error(error);
  }
};
