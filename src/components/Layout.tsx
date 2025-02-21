// components/Layout.tsx
import { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { LayoutProvider, useLayout } from "@/context/LayoutContext";
import { Poppins } from "next/font/google";
import MenuMobile from "./MenuMobile";

interface LayoutProps {
  children: ReactNode;
}

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutProvider>
      <div className={`${poppins.variable} font-sans`}>
        <Head>
          <title>Github Repos</title>
          <meta name="description" content="Website description" />
        </Head>

        <Header />
        <main>{children}</main>
        <MenuMobile />
      </div>
    </LayoutProvider>
  );
};

export default Layout;
