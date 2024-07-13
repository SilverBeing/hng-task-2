import Footer from "@/components/common/Footer";
import CartContextProvider from "@/providers/cartProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Timbu Cloud Shop",
  description: "Coded by Silver Idahosa. Slack Name: Silver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>
          {children}

          <Footer />
          <Toaster />
        </CartContextProvider>
      </body>
    </html>
  );
}
