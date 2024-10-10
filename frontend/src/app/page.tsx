"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "./nav.tsx";
import Hero from "./hero.tsx";

const YourComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
};

export default function Home() {
  return (
    <div className="front dark:bg-[url('./img/dark.jpg')] h-64 scroll-smooth">
      <Nav />
      <Hero />
    </div>
  );
}
