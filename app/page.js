import AdsSection from "@/components/ads-section/AdsSection";
import Hero from "@/components/hero/Hero";
import LadingSection from "@/components/landing-section/LadingSection";
import Nav from "@/components/navbar/Nav";
import TopBlogs from "@/components/top-blog-section/TopBlogs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Nav/>
       <LadingSection/>
       <TopBlogs/>
       <AdsSection/>
    </div>
  );
}
