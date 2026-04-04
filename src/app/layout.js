import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/containers/navbar/Navbar";
import Footer from "@/components/footer";
import { ModalProvider } from "@/components/ModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Asawari Prakashan",
  description:
    "Asawari Prakashan publishes quality Marathi literature, books, and educational content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
