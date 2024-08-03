import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="light">
        <div className="max-h-max">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
