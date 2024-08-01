"use server";

export const loginAction = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const result = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
