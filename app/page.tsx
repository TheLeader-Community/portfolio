
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import SectionServices from "./components/ui/SectionServices";
import FloatingButton from "./components/ui/FloatingButton";
import Footer from "./components/ui/Footer";
import { SectionSolde } from "./components/ui/SectionSolde";


const Index = () => {
  return (
    <div className={` bg-background h-full pb-10 md:pt-32 md:pb-10 `}>
      <Header />
      <Hero />
      <SectionServices />
      <SectionSolde />
      <FloatingButton />
      <Footer />
    </div>
  )
}

export default Index;



