import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({subsets:["latin"]})

export const metadata = {
  title: "ISOMETRIK 1.0",
  description: "ISOMETRIK Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  );
}
