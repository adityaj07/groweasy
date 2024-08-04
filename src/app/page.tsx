import Image from "next/image";
import Banners from ".././banners.json";
import BackgroundImage from "@/components/BackgroundImage";
import Hero from "@/components/Hero";
import BannerList from "@/components/BannerList";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <BackgroundImage />
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto mb-20">
        <Hero />
      </div>
      <BannerList />
    </main>
    </>
  );
}
