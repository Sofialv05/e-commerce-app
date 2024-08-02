import Link from "next/link";
import ThemeController from "./ThemeController";
import Search from "./Search";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Navbar() {
  return (
    <div className="px-16 z-50 sticky top-0 shadow-sm">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <a>Products</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <Link href={"/products"}>Products</Link>
              </li>
              <li>
                <Link href={"/wishlist"}>Whishlist</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Furnitures</a>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"}>Home</Link>
              </li>

              <li>
                <Link href={"/products"}>Products</Link>
              </li>
              <li>
                <Link href={"/wishlist"}>Wishlist</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <Search />
        </div>
        <div className="navbar-end gap-10">
          <ThemeController />
          {!cookies().get("accessToken") ? (
            <Link href={"/login"} className="btn">
              Login
            </Link>
          ) : (
            <form
              action={async () => {
                "use server";
                cookies().delete("accessToken");
                redirect("/login");
              }}
            >
              <button type="submit" className="btn">
                Logout
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
