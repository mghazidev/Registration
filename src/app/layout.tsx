import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tamara",
  description: "Registration Process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fustat.variable} font-customHelveticaNeue antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
