import React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import App from "./_app";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Snapshawt",
  description: "Experience Seamless Face Swapping Online with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* call app only for the aos access */}
        <App />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
