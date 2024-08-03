import { loginAction } from "@/actions/auth";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div className=" card bg-base-100 w-96 h-auto p-10 shadow-xl justify-center items-center">
        <div className="card-title ">
          <h1>Login</h1>
        </div>
        <form className="card-body justify-center gap-2" action={loginAction}>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn mt-6">
            Login
          </button>
        </form>
        <div>
          <Link
            href={"/register"}
            className="text-sm font-light text-gray-500 "
          >
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
