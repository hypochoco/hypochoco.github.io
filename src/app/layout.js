import "./globals.css";
import { Roboto } from "next/font/google";
import { siteConfig } from "@/config/site";

export const ROBOTO = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500"],
})

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon-ico-256.ico",
  },
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ROBOTO.className}`}>
        <div>{children}</div>
      </body>
    </html>
  );
}