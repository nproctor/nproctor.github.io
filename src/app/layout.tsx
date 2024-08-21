import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nproctor.github.io",
  description: "nproctor's digital portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <StyledComponentsRegistry>
          <Header/>
          <Navigation/>
          {children}
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
