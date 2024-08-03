import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex flex-col">
      <div className="navbar bg-base-100 shadow-md px-6">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Furnitures
        </Link>
      </div>
      <div className="flex flex-grow justify-center items-center bg-gray-400">
        {children}
      </div>
    </div>
  );
}
