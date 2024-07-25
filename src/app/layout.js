import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Simple portfolio",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en" data-theme="nord">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
        <Footer />
    </html>
    </>
  );
}
