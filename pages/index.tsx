import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import  NavigationBar from "@/components/navigation_bar";
import MainSection from "@/components/main_section";
import WhoWeAre from "@/components/who_we_are";
import WhyWeOpened from "@/components/why_we_opened";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Migo דף הבית </title>
        <meta name="description" content="Migo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/migo.png" />
      </Head>
      <NavigationBar/>
      <MainSection/>
      <WhoWeAre/>
      <WhyWeOpened/>

    </>
  );
}
