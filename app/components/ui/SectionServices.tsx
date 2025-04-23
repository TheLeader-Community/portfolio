import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Computer, Laptop2, Smartphone, Users } from "lucide-react"
import { ReactNode } from "react"

export default function SectionServices() {
    return (
        <div className=" bg-background grid md:mt-14 grid-cols-2 p-5 lg:p-2 md:grid-cols-4 gap-5 lg:gap-3  lg:px-20">
            <CardService title={"développement web"} icon={<Laptop2 size={40} />} />
            <CardService title={"développement mobile"} icon={<Smartphone size={40} />} />
            <CardService title={"développement cross platform"} icon={<Computer size={40} />} />
            <CardService title={"marketing Digital"} icon={<Users size={40} />} />
        </div>
    )
}


function CardService({ icon, title, subtitle }: { icon: ReactNode, title: string, subtitle?: string }) {
    return (
        <Card className="skeleton text-center text-foreground w-full">
            <CardHeader>
                <CardTitle className=" p-2 flex flex-col justify-center items-center">
                    {icon}
                    <h1 className=" font-bold text-sm">
                        {title}
                    </h1>
                </CardTitle>
                <CardContent>
                    <p className=" text-xs">
                        {subtitle}
                    </p>
                </CardContent>
            </CardHeader>
        </Card>
    )
}