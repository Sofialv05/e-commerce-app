import Link from "next/link";

export default function Register() {
  return (
    <div>
      <div className=" card bg-base-100 w-96 h-auto p-10 shadow-xl justify-center items-center">
        <div className="card-title ">
          <h1>Create an account</h1>
        </div>
        <form className="card-body justify-center">
          <input
            type="text"
            placeholder="username"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="password"
            className="input input-bordered w-full max-w-xs"
          />
          <Link href={"/login"} type="submit" className="btn">
            Create an account
          </Link>
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
