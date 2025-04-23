import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2 } from "lucide-react"
import SkillListe from "./SkillListe"
import ProjetListe from "./ProjetListe"

export default function SectionPortfolio() {
  return (
    <div className=" flex justify-center items-center w-full h-full">
        <Tabs defaultValue="competence" className="w-full flex justify-center items-center">
          <TabsList className=" bg-background border ">
            <TabsTrigger value="competence" className="p-5 text-sm"> <Code2/> Compétences</TabsTrigger>
            <TabsTrigger value="projet" className="p-5 text-sm">Projets</TabsTrigger>
            <TabsTrigger value="experience" className="p-5 text-sm">Expèrience</TabsTrigger>
          </TabsList>
          <TabsContent value="competence">
            <SkillListe/>
          </TabsContent>
          <TabsContent value="projet" className=" overflow-x-hidden">
            <ProjetListe />
          </TabsContent>
          <TabsContent value="experience">Change your exp here.</TabsContent>
        </Tabs>
    </div>
  )
}
