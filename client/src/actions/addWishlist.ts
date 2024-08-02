"use server";

import { revalidatePath } from "next/cache";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLike = async (productId: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/wishlist", {
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
    await res.json();
    revalidatePath("/wishlist");
  } catch (error) {
    console.error(error);
  }
};
