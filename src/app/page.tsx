import HomePage from "@/components/homepage";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <main className="">
      <HomePage />
      <Testimonials/>
      <Gallery/>
      <Contact/>
    </main>
  );
}
