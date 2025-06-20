import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"


export default function SkillListe() {

    const skills = [
        {
            level: 100,
            imgSkill: "/icons/html.png",
            title: "html",
            subtitle: "Le langage irremplaçable du web, celui qui est à l'origine de tout ce qui fait le développement web aujourd'hui."
        },
        {
            level: 97,
            imgSkill: "/icons/css.png",
            title: "css",
            subtitle: "La feuille de style fidèle du HTML, utilisée pour embellir et styliser les pages web."
        },
        {
            level: 85,
            imgSkill: "/icons/js.png",
            title: "javascript",
            subtitle: "Le langage le plus utilisé dans le développement web, aussi bien côté front que back-end."
        },
        {
            level: 85,
            imgSkill: "/icons/typescript-2.png",
            title: "typescript",
            subtitle: "Une version typée de JavaScript qui améliore la robustesse et la lisibilité du code."
        },
        {
            level: 77,
            imgSkill: "/icons/python.jpg",
            title: "python",
            subtitle: "Langage incontournable pour la data science, le machine learning, le scripting et la cybersécurité."
        },
        {
            level: 65,
            imgSkill: "/icons/java.png",
            title: "java",
            subtitle: "Langage polyvalent et robuste, adapté aux applications d’entreprise à grande échelle."
        },
        {
            level: 58,
            imgSkill: "/icons/cpp.png",
            title: "c++",
            subtitle: "Toujours très utilisé pour les jeux vidéo, les systèmes embarqués et les performances critiques."
        },
        {
            level: 62,
            imgSkill: "/icons/dart-2.png",
            title: "dart",
            subtitle: "Langage principal de Flutter pour le développement mobile multiplateforme."
        },
        {
            level: 90,
            imgSkill: "/icons/php.png",
            title: "php",
            subtitle: "Langage web classique qui reste dominant grâce à ses CMS comme WordPress."
        },
        {
            level: 97,
            imgSkill: "/icons/bootsrap.png",
            title: "bootsrap",
            subtitle: "l'un des frmaework css les plus populaire offrant la possibilitée de crée de maginifique interface utilisateurs"
        },
        {
            level: 98,
            imgSkill: "/icons/tailwindcss.png",
            title: "tailwindcss",
            subtitle: "le framework css le plus puissant à ce jour, plus besoins de feuille de style avec ce framework "
        },
        {
            level: 62,
            imgSkill: "/icons/nodejs-2.png",
            title: "nodejs",
            subtitle: "la tecnologie permettant d'utiliser le langage javascrit coté serveur, puissant scalable et performant"
        },
        {
            level: 80,
            imgSkill: "/icons/react.jpg",
            title: "react",
            subtitle: "le framework front end le plus populaire, il ajoute une apporche en composant ce qui garantie une expérience confortable"
        },
        {
            level: 80,
            imgSkill: "/icons/next.jpg",
            title: "nextjs",
            subtitle: "le framework full stack pour react il ajoute une couhe de rendu ssr et de backend dans une seule base de code"
        },
        {
            level: 70,
            imgSkill: "/icons/expo.png",
            title: "expo",
            subtitle: "le framework react-native pour créer des applications mobiles plus performante et polyvalent il ajoute un ensemble de chose"
        },
        {
            level: 70,
            imgSkill: "/icons/laravel-2.png",
            title: "laravel",
            subtitle: "le frmaework qui maintient php, laravel apporte tous les outils pour créer un backend fonctionnel en moins de temps"
        },
        {
            level: 70,
            imgSkill: "/icons/django.png",
            title: "django",
            subtitle: "le frmaework python pour le web il utilise la simplicité de python pour construire des applications web rapidement et simplement"
        },
        {
            level: 70,
            imgSkill: "/icons/mysql-2.png",
            title: "mysql",
            subtitle: "l'un des gestionnaire de base de données les plus simple et efficasse très utilisé dans des applications web scalables à grande échelle"
        },
        {
            level: 70,
            imgSkill: "/icons/postgre.png",
            title: "postgreSql",
            subtitle: "l'un des gestionnaire de base de données les plus simple et efficasse très utilisé dans des applications web scalables à grande échelle"
        },
        {
            level: 70,
            imgSkill: "/icons/qt.png",
            title: "QT",
            subtitle: "le framework c++ pour créer des application ultra performante intéragissant avec des api avancée"
        },
        {
            level: 70,
            imgSkill: "/icons/socket.jpg",
            title: "socket.io",
            subtitle: "le framework c++ pour créer des application ultra performante intéragissant avec des api avancée"
        },
        {
            level: 70,
            imgSkill: "/icons/prisma.png",
            title: "prisma",
            subtitle: "un orm permettant de faciliter le transfert des données entre une base de donnée et le backend"
        },
        {
            level: 70,
            imgSkill: "/icons/cs.jpg",
            title: "c#",
            subtitle: "le langage de programmation moderne de microsoft qui utilise les avantages du c++ et du java"
        },
        {
            level: 70,
            imgSkill: "/icons/sql-2.png",
            title: "sql",
            subtitle: "le langage d'exclence pour les bases de données relationnelle  utiliser dans tous les SGBR"
        }
    ];


    return (
        <div className=" p-5 md:p-0  lg:w-full">
            <div className=" py-10 flex flex-col md:flex-row gap-5 w-full justify-around">
                <h3>Recherchez parmis les compétences</h3>
                <div className=" flex items-center gap-3">
                    <Input type="search" className=" w-full" placeholder="rechercher dans la liste" />
                    <Button className=" bg-blue-500 text-white"><Search />rechercher</Button>
                </div>
            </div>
            <div className=" w-full p-5 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    skills.map((el, index) => (
                        <SkillCard key={index} level={el.level} imgSkill={el.imgSkill} title={el.title} subtitle={el.subtitle} />
                    ))
                }
            </div>
        </div>
    )
}



function SkillCard({ imgSkill, title, subtitle, level }: { imgSkill: string, title: string, subtitle?: string, level: number }) {
    return (
        <Card className=" hover:shadow-2xl shadow-blue-500 transition-all w-72 bg-transparent flex flex-col justify-between">
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
