"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(process.env.BASE_URL + "/api/register", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: { message: string } = await response.json();
      toast.success(data.message);
      router.push("/login");
    } catch (err) {
      console.error(err);
      // toast.error(err.errors[0]?.message)
    }
  };

  return (
    <div>
      <div className="mx-10 card bg-base-100 md:w-96 h-auto p-10 shadow-xl justify-center items-center">
        <div className="card-title mb-8">
          <h1>Create an account</h1>
        </div>
        <form
          className="lg:card-body justify-center flex flex-col gap-2"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="name"
            className="input input-bordered w-full lg:max-w-xs"
            onChange={inputHandler}
          />
          <input
            type="text"
            value={form.username}
            name="username"
            placeholder="username"
            className="input input-bordered w-full lg:max-w-xs"
            onChange={inputHandler}
          />
          <input
            type="email"
            value={form.email}
            name="email"
            placeholder="email"
            className="input input-bordered w-full lg:max-w-xs"
            onChange={inputHandler}
          />
          <input
            type="password"
            value={form.password}
            name="password"
            placeholder="password"
            className="input input-bordered w-full lg:max-w-xs"
            onChange={inputHandler}
          />
          <button type="submit" className="btn my-6">
            Create an account
          </button>
        </form>
        <div>
          <Link href={"/login"} className="text-sm font-light text-gray-500 ">
            Already have an account?{" "}
            <span className="font-medium text-primary-600 hover:underline ">
              Log in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
