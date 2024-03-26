import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ResqFeast",
  description: "Food rescue app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BSC3V07QZX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BSC3V07QZX');
</script>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
