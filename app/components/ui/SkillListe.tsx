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


export default function SkillListe() {
    return (
        <div className=" p-5 lg:p-10">
            <TitleBottomBar>Tous au long de mon apprentissage j&lsquo;ai dévéloppé des compétences</TitleBottomBar>
            {/* <h1 className=" text-2xl md:text-4xl font-bold p-5"></h1> */}
            <div className=" p-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <SkillCard level={100} imgSkill={"/icons/html.png"} title="html" subtitle="Le langage iremplaçable du web, elui qui est à l'origine de tous ce qui fait le développement web de nos jours" />
                <SkillCard level={97} imgSkill={"/icons/css.png"} title="css" subtitle="la feuille de style du langage html le plus fidèle, le css est le langage pour embélire le html et le rendre unique" />
                <SkillCard level={85} imgSkill={"/icons/js.png"} title="javascript" subtitle="Le langage le plus utilisé dans le développement web tant coté front que backend" />
                <SkillCard level={77} imgSkill={"/icons/python.jpg"} title="python" subtitle="le langage incontournable dns l'analyse de donnée , le machine leaning, le scripting et la sécuritée informatique " />
                <SkillCard level={65} imgSkill={"/icons/java.png"} title="java" subtitle="un langage de programmation vieux mais éfficasse et polyvalent adapter pour les applications à grande échelle et d'entreprise" />
                <SkillCard level={65} imgSkill={"/icons/cpp.png"} title="c++" subtitle="après plusieurs décénie il est largement utilisé dans le domaine du jeu vidéo & du système embarqué" />
            </div>
        </div>
    )
}



function SkillCard({ imgSkill, title, subtitle, level }: { imgSkill: string, title: string, subtitle?: string, level: number }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className=" flex flex-col w-full justify-center items-center">
                    <Image src={imgSkill} alt="image" width="500" height={"500"} className=" border-10 border-y-transparent border-blue-500 size-60 rounded-full object-cover" />
                    <h3 className=" mt-2">{title}</h3>
                </CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Taux de maitrise {level}%</p>
                <Progress value={level} />
            </CardContent>
        </Card>
    )
}
