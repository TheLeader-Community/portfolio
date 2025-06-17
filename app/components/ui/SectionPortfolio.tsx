import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Code2, DatabaseBackup } from "lucide-react"
import SkillListe from "./SkillListe"
import ProjetListe from "./ProjetListe"

export default function SectionPortfolio() {
  return (
    <div className=" flex justify-center items-center w-full h-full overflow-x-hidden">
        <Tabs defaultValue="competence" className="w-full flex justify-center items-center">
          <TabsList className=" bg-background border ">
            <TabsTrigger value="competence" className="md:p-5 md:text-xl font-light"> <Code2/> Compétences</TabsTrigger>
            <TabsTrigger value="projet" className="md:p-5 md:text-xl font-light"> <Briefcase/> Projets</TabsTrigger>
            <TabsTrigger value="experience" className="md:p-5 md:text-xl font-light"> <DatabaseBackup/> Expèrience</TabsTrigger>
          </TabsList>
          <TabsContent value="competence" className=" overflow-x-hidden">
            <SkillListe/>
          </TabsContent>
          <TabsContent value="projet" className=" overflow-x-hidden">
            <ProjetListe />
          </TabsContent>
          <TabsContent value="experience">En cours...</TabsContent>
        </Tabs>
    </div>
  )
}
