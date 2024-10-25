import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderFooterLayout from "@/components/headerFooter";
import ClientProvider from "@/redux/clientProvider";
const iranYekan = localFont({
  src: "./fonts/iranyekanwebbold.ttf",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${iranYekan.variable} antialiased`}>
        <ClientProvider>
          <HeaderFooterLayout>{children}</HeaderFooterLayout>
        </ClientProvider>
      </body>
    </html>
  );
}
