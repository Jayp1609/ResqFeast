import React from "react";
import Head from "next/head"; // Import Head from next/head to manage the <head> tag
import { GoogleTagManager } from '@next/third-parties/google'

import "./globals.css";

export const metadata = {
  title: "ResqFeast",
  description: "Food rescue app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
           <GoogleTagManager gtmId="GTM-T3S8NNBP" />
      <body>{children}</body>
    </html>
  );
}
