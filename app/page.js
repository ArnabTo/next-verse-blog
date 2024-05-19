import Hero from "@/components/hero/Hero";
import LadingSection from "@/components/landing-section/LadingSection";
import Nav from "@/components/navbar/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav/>
       <LadingSection/>
    </div>
  );
}
