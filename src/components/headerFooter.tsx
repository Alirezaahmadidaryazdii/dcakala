"use client"; 

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation"; 

export default function HeaderFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isLoginRoute = pathname === "/login"; 
  const isCartRoute = pathname === "/cart"; 

  return (
    <>
      {(!isLoginRoute && !isCartRoute) && <Header />}
      {children}
      {(!isLoginRoute && !isCartRoute) && <Footer />}
    </>
  );
}
