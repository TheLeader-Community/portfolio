
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



export default function Header() {
    return (
        <Card className=" fixed w-full top-0  bg-background  left-0 p-0 z-50">
            <div className='navbar shadow-xlrounded-box p-2 md:px-10'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h8m-8 6h16' />
                            </svg>
                        </div>
                        <ul tabIndex={0} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-background rounded-box w-52'>
                            <NavListe />
                        </ul>
                    </div>
                    <Link href={"/"}>
                        <div className=" flex items-center gap-2">
                            <Image src="/icons/logo.png" width={500} height={500} alt="logo" className=" size-7" />
                            <h1 className=' font-extrabold text-xl lg:text-2xl '>TheLeader</h1>
                        </div>
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu flex gap-2 menu-horizontal px-1'>
                        <NavListe />
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className=" flex gap-3">
                        <div className=" hidden md:flex items-center gap-2">
                            <Search />
                            <Input placeholder="Rechercher depuis le site" />
                        </div>
                        <Button className="bg-blue-500 text-white hover:bg-blue-500/60 transition-all">Se connecter</Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}



function NavListe() {
    return (
        <>
            <li><button className=""><Link href={"/"}>Accueil</Link></button></li>
            <li>
                <details>
                    <summary className="">Services</summary>
                    <ul className='p-2 bg-background w-40'>
                        <li><button className="">Développement web</button></li>
                        <li><button className="">Développement mobile</button></li>
                        <li><button className="">Développement cross platforme</button></li>
                        <li><button className="">Marketing Digital</button></li>
                    </ul>
                </details>
            </li>
            <li><button className=""><Link href={"/portfolio"}>Portofolio</Link></button></li>
            <li><button className=""><Link href={"/blog"}>Blog</Link></button></li>
            {/* <li>
                <details>
                    <summary className="">A propos de moi</summary>
                    <ul className='p-2 bg-background w-40'>
                    </ul>
                </details>
            </li> */}
            <li><button className="">Aide</button></li>
        </>
    )
}
