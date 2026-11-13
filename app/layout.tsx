import type { Metadata, Viewport } from "next";
import { Anton, Space_Mono } from "next/font/google";
import CartProvider from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";
import Nav from "@/components/Nav";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "8AM CLUB",
  description:
    "Always showing up at 8 AM. A crew that feels like family. Training hard, partying harder, loving each other always.",
};
export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${mono.variable}`}>
      <body>
        <CartProvider>
          <Nav />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
