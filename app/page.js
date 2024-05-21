"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
