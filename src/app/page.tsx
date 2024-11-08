"use client";

import { Hero, Header, CarouselComp, FullAlbumDisplay } from "@/app/components";

import { useAppContext } from "@/AppContext";

export default function Home() {
  const { selectedAlbum } = useAppContext();
  return (
    <main className="font-Orbitron flex min-h-screen flex-col items-center justify-between bg-backgroundGrey text-white">
      <Header />
      <Hero />
      <CarouselComp />
      {selectedAlbum ? <FullAlbumDisplay id={selectedAlbum} /> : null}
      <div className="bg-red-500 h-screen"></div>
    </main>
  );
}
