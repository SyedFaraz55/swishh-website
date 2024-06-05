import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=" min-h-screen rounded-lg">
        <Header />
        <HeroSection />
        <About />
      <Partners />
      <Footer />
      </div>
    </main>
  );
}
