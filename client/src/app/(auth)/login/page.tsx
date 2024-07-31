"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // fetch(apiurl,{method, body: JSON.stringify(form), headers: 'Content-Type': 'application/json'})
    // .then((res)=> {
    // res.json()})
    // .then((data)=> {
    // console.log(data)})
  };

  return (
    <div>
      <div className=" card bg-base-100 w-96 h-auto p-10 shadow-xl justify-center items-center">
        <div className="card-title ">
          <h1>Login</h1>
        </div>
        <form className="card-body justify-center" onSubmit={submitHandler}>
          <input
            type="email"
            value={form.email}
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
            onChange={inputHandler}
          />
          <input
            type="password"
            value={form.password}
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
            onChange={inputHandler}
          />
          <Link href={"/"} type="submit" className="btn">
            Login
          </Link>
        </form>
        <div>
          <Link href={"/register"} className="ext-sm font-light text-gray-500 ">
            Not Registered?{" "}
            <span className="font-medium text-primary-600 hover:underline ">
              Create an account
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
