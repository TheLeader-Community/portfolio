"use client"

import { useState } from "react";
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import SectionServices from "./components/ui/SectionServices";
import SectionApropos from "./components/ui/SectionApropos";
import FloatingButton from "./components/ui/FloatingButton";

const Index = () => {

  const [bg, setBg] = useState("dark")

  return (
    <div className={`${bg} bg-background h-full md:py-32`}>
      <Header setBackground={setBg} />
      <Hero />
      <SectionServices />
      <SectionApropos />
      <FloatingButton />

    </div>
  )
}

export default Index;



