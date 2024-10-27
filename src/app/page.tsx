import { Hero, Header, Presentation, CarouselComp } from "@/app/components";

export default function Home() {
  return (
    <main className="font-Orbitron flex min-h-screen flex-col items-center justify-between bg-backgroundGrey text-white">
      <Header />
      <Hero />
      <Presentation />
      <CarouselComp />
    </main>
  );
}
