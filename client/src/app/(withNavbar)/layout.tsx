import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen px-20">{children}</div>
    </div>
  );
}
