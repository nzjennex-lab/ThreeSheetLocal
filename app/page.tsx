import Beer from "@/components/Beer";
import Hero from "@/components/Hero";
import Kombucha from "@/components/Kombucha"; 
import Motocross from "@/components/Motocross";
import Posters from "@/components/Posters";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Hero />
      <Kombucha /> 
      <Posters />
      <Motocross />
      <Beer />
      <Connect />
    </main>
  );
}