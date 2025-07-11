import Head from "next/head";
import NavigationBar from "@/components/navigation_bar";
import MainSection from "@/components/main_section";
import WhoWeAre from "@/components/who_we_are";
import WhyWeOpened from "@/components/why_we_opened";
import MovingFast from "@/components/moving_fast";
import { Container } from "@mui/material";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <>
      <Head>
        <title>Migo דף הבית </title>
        <meta name="description" content="Migo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/migo.png" />
      </Head>

      <Container>

      <NavigationBar />

      {/* Sections */}
      <MainSection />
      <WhoWeAre />
      <WhyWeOpened />
      <MovingFast />
      <Footer/>
      </Container>
    </>
  );
}
