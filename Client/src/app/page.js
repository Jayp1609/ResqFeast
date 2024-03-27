
import "./globals.css";
//import Image from "next/image";
import StartPage from "../components/StartPage";
import { usePathname } from "next/navigation";

export default function Home() {
  return (
    <main>
      <StartPage />
    </main>
  );
}
