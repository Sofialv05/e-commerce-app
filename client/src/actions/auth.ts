"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const result = await fetch("http://localhost:3000" + "/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await result.json()) as { accessToken: string };

  const cookieStore = cookies();
  cookieStore.set("accessToken", data.accessToken);
  return redirect("/");
};
