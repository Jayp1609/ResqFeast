import React from "react";
import Head from "next/head"; // Import Head from next/head to manage the <head> tag

import "./globals.css";

export const metadata = {
  title: "ResqFeast",
  description: "Food rescue app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BSC3V07QZX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-BSC3V07QZX');
            `,
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
