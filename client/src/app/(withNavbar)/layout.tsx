import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-max">
      <Navbar />
      <div className="flex max-h-max px-20 py-10">{children}</div>
      <Footer />
    </div>
  );
}
