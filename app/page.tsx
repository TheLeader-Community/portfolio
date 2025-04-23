
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import SectionServices from "./components/ui/SectionServices";
import SectionApropos from "./components/ui/SectionApropos";
import FloatingButton from "./components/ui/FloatingButton";

const Index = () => {
  return (
    <div className={` bg-background h-full md:py-32`}>
      <Header setBackground={()=> {}} />
      <Hero />
      <SectionServices />
      <SectionApropos />
      <FloatingButton />

    </div>
  )
}

export default Index;



