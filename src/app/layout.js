import "./globals.css";
import { Roboto } from "next/font/google";

export const ROBOTO = Roboto({
  subsets: ["latin"],
  weight: ["100", "300"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ROBOTO.className}`}>
        <div>{children}</div>
      </body>
    </html>
  );
}