import Header from "@/components/Header";
import "./globals.css";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";

const jetBrain = localFont({
  src: "../fonts/JetBrainsMono-Regular.woff2",
  display: "swap",
});

const navItems = ["html", "css", "javascript"];

export const metadata = {
  title: "codecampus",
  description: "Learning platform for everything programming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrain.className}>
        <div className="wrapper">
          <Header navigationItems={navItems} />
          <section className="middle">
            <Navigation />
            <main className="box">{children}</main>
            <aside></aside>
          </section>
        </div>
      </body>
    </html>
  );
}
