import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Penerbit | Optimal Untuk Negeri",
  description: "Penerbit Optimal Untuk Negeri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noodp"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
        <title>Launch - Coming Soon</title>
        <link rel="shortcut icon" href="assets/img/favicon.ico"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&amp;subset=latin-ext" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="assets/css/plugins.css"></link>
        <link rel="stylesheet" type="text/css" href="assets/css/main.css"></link>
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
