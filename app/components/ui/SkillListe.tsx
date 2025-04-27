import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import TitleBottomBar from "./TitleBottomBar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"


export default function SkillListe() {
    return (
        <div className=" p-5 md:p-0 lg:p-10  lg:w-full">
            <TitleBottomBar>Liste des compétences</TitleBottomBar>
            {/* <h1 className=" text-2xl md:text-4xl font-bold p-5"></h1> */}
            
            <div className=" py-10 md:p-10 flex gap-5 w-full justify-center">
                <Input type="search" className=" w-full" placeholder="rechercher dans la liste" />
                <Button className=" bg-blue-500 text-white"><Search/>rechercher</Button>
            </div>
            <div className=" w-full p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <SkillCard level={100} imgSkill={"/icons/html.png"} title="html" subtitle="Le langage iremplaçable du web, elui qui est à l'origine de tous ce qui fait le développement web de nos jours" />
                <SkillCard level={97} imgSkill={"/icons/css.png"} title="css" subtitle="la feuille de style du langage html le plus fidèle, le css est le langage pour embélire le html et le rendre unique" />
                <SkillCard level={85} imgSkill={"/icons/js.png"} title="javascript" subtitle="Le langage le plus utilisé dans le développement web tant coté front que backend" />
                <SkillCard level={85} imgSkill={"/icons/typescript-2.png"} title="typescript" subtitle="une alternative moderne à javascript qui améliore la sécurité et le typage des données" />
                <SkillCard level={77} imgSkill={"/icons/python.jpg"} title="python" subtitle="le langage incontournable dns l'analyse de donnée , le machine leaning, le scripting et la sécuritée informatique " />
                <SkillCard level={65} imgSkill={"/icons/java.png"} title="java" subtitle="un langage de programmation vieux mais éfficasse et polyvalent adapter pour les applications à grande échelle et d'entreprise" />
                <SkillCard level={58} imgSkill={"/icons/cpp.png"} title="c++" subtitle="après plusieurs décénie il est largement utilisé dans le domaine du jeu vidéo & du système embarqué" />
                <SkillCard level={62} imgSkill={"/icons/dart-2.png"} title="dart" subtitle="le principale langage de flutter utilisé pour le développement d'application mobile cross platform" />
                <SkillCard level={90} imgSkill={"/icons/php.png"} title="php" subtitle="un ancien mais qui domine le développement web avec ces nombreux cms, le php couvrent plusieurs site sur internet " />
                <SkillCard level={97} imgSkill={"/icons/bootsrap.png"} title="bootsrap" subtitle="l'un des frmaework css les plus populaire offrant la possibilitée de crée de maginifique interface utilisateurs" />
                <SkillCard level={98} imgSkill={"/icons/tailwindcss.png"} title="tailwindcss" subtitle="le framework css le plus puissant à ce jour, plus besoins de feuille de style avec ce framework " />
                <SkillCard level={62} imgSkill={"/icons/nodejs-2.png"} title="nodejs" subtitle="la tecnologie permettant d'utiliser le langage javascrit coté serveur, puissant scalable et performant" />    
                <SkillCard level={80} imgSkill={"/icons/react.jpg"} title="react" subtitle="le framework front end le plus populaire, il ajoute une apporche en composant ce qui garantie une expérience confortable" />    
                <SkillCard level={80} imgSkill={"/icons/next.jpg"} title="nextjs" subtitle="le framework full stack pour react il ajoute une couhe de rendu ssr et de backend dans une seule base de code" />    
                <SkillCard level={70} imgSkill={"/icons/expo.png"} title="expo" subtitle="le framework react-native pour créer des applications mobiles plus performante et polyvalent il ajoute un ensemble de chose" />    
                <SkillCard level={70} imgSkill={"/icons/laravel-2.png"} title="laravel" subtitle="le frmaework qui maintient php, laravel apporte tous les outils pour créer un backend fonctionnel en moins de temps" />    
                <SkillCard level={70} imgSkill={"/icons/django.png"} title="django" subtitle="le frmaework python pour le web il utilise la simplicité de python pour construire des applications web rapidement et simplement" />    
                <SkillCard level={70} imgSkill={"/icons/mysql-2.png"} title="mysql" subtitle="l'un des gestionnaire de base de données les plus simple et efficasse très utilisé dans des applications web scalables à grande échelle" />    
                <SkillCard level={70} imgSkill={"/icons/postgre.png"} title="postgreSql" subtitle="l'un des gestionnaire de base de données les plus simple et efficasse très utilisé dans des applications web scalables à grande échelle" />    
                <SkillCard level={70} imgSkill={"/icons/qt.png"} title="QT" subtitle="le framework c++ pour créer des application ultra performante intéragissant avec des api avancée" />    
                <SkillCard level={70} imgSkill={"/icons/socket.jpg"} title="socket.io" subtitle="le framework c++ pour créer des application ultra performante intéragissant avec des api avancée" />    
                <SkillCard level={70} imgSkill={"/icons/prisma.png"} title="prisma" subtitle="un orm permettant de faciliter le transfert des données entre une base de donnée et le backend" />    
                <SkillCard level={70} imgSkill={"/icons/cs.jpg"} title="c#" subtitle="le langage de programmation moderne de microsoft qui utilise les avantages du c++ et du java" />    
                <SkillCard level={70} imgSkill={"/icons/sql-2.png"} title="sql" subtitle="le langage d'exclence pour les bases de données relationnelle  utiliser dans tous les SGBR" />    
            </div>
        </div>
    )
}



function SkillCard({ imgSkill, title, subtitle, level }: { imgSkill: string, title: string, subtitle?: string, level: number }) {
    return (
        <Card className=" w-72 flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="  flex flex-col w-full justify-center items-center">
                    <Image src={imgSkill} alt="image" width="500" height={"500"} className=" border-10 border-y-transparent border-blue-500 size-60 rounded-full object-cover" />
                    <h3 className=" mt-2">{title}</h3>
                </CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Taux de maitrise</p>
                <Progress value={level} />
            </CardContent>
        </Card>
    )
}
