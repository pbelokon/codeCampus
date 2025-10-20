import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Code Campus",
  description: "Programming learning platform",
};

export const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrains.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
