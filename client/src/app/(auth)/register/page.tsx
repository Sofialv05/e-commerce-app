"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

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

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        // console.log(data);
        router.push("/login");
      });
  };

  return (
    <div>
      <div className=" card bg-base-100 w-96 h-auto p-10 shadow-xl justify-center items-center">
        <div className="card-title ">
          <h1>Create an account</h1>
        </div>
        <form className="card-body justify-center" onSubmit={submitHandler}>
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="name"
            className="input input-bordered w-full max-w-xs"
            onChange={inputHandler}
          />
          <input
            type="text"
            value={form.username}
            name="username"
            placeholder="username"
            className="input input-bordered w-full max-w-xs"
            onChange={inputHandler}
          />
          <input
            type="email"
            value={form.email}
            name="email"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
            onChange={inputHandler}
          />
          <input
            type="password"
            value={form.password}
            name="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
            onChange={inputHandler}
          />
          <button type="submit" className="btn">
            Create an account
          </button>
        </form>
        <div>
          <Link href={"/login"} className="ext-sm font-light text-gray-500 ">
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
