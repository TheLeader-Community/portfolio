import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Code2, DatabaseBackup } from "lucide-react"
import SkillListe from "./SkillListe"
import ProjetListe from "./ProjetListe"

export default function SectionPortfolio() {
  return (
    <div className=" flex justify-center items-center w-full h-full">
        <Tabs defaultValue="competence" className="w-full flex justify-center items-center">
          <TabsList className=" bg-background border ">
            <TabsTrigger value="competence" className="md:p-5 text-sm"> <Code2/> Compétences</TabsTrigger>
            <TabsTrigger value="projet" className="md:p-5 text-sm"> <Briefcase/> Projets</TabsTrigger>
            <TabsTrigger value="experience" className="md:p-5 text-sm"> <DatabaseBackup/> Expèrience</TabsTrigger>
          </TabsList>
          <TabsContent value="competence" className=" overflow-x-hidden">
            <SkillListe/>
          </TabsContent>
          <TabsContent value="projet" className=" overflow-x-hidden">
            <ProjetListe />
          </TabsContent>
          <TabsContent value="experience">Hé shadow your exp here</TabsContent>
        </Tabs>
    </div>
  )
}
