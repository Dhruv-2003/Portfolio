import Head from "next/head";
import Image from "next/image";
import { Inter, DM_Sans } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import {
  About,
  Footer,
  Header,
  Skills,
  Testionmials,
  Work,
} from "../container";
import { Navbar } from "../components";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sans_serif = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhruv Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`bg-[#edf2f8] ${sans_serif.className}`}>
        <div>
          <Navbar />
          <Header />
          <About />
          <Work />
          <Skills />
          <Testionmials />
          <Footer />
        </div>
      </main>
    </>
  );
}
