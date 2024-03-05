import HomePage from "@/components/homepage";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Head from "next/head";
export default function Home() {
  return (
    <main className="">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <HomePage />
      <Testimonials/>
      <Gallery/>
      <Contact/>
    </main>
  );
}
