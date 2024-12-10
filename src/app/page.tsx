"use client";

import {
  Hero,
  Header,
  AlbumComp,
  FullAlbumDisplay,
  VideoComp,
  ContactMeComp,
} from "@/app/components";

import { useAppContext } from "@/AppContext";

export default function Home() {
  const { selectedAlbum } = useAppContext();
  return (
    <main className="font-Orbitron flex min-h-screen flex-col items-center justify-between bg-backgroundGrey text-white">
      <Header />
      <Hero />
      <AlbumComp />
      {selectedAlbum ? <FullAlbumDisplay id={selectedAlbum} /> : null}
      <VideoComp />
      <ContactMeComp />
    </main>
  );
}
