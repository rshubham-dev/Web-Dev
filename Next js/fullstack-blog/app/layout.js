import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog - Building Design Co.",
  description: "Explore our blog posts on architecture, design, and construction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Blog - Building Design Co.</title>
        <meta name="description" content="Explore our blog posts on architecture, design, and construction." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog - Building Design Co." />
        <meta property="og:description" content="Explore our blog posts on architecture, design, and construction." />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://your-site.com/blog" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
