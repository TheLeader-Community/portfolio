
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"


export default function Header({ setBackground }: { setBackground: Dispatch<SetStateAction<string>> }) {
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
                    <ul className='menu menu-horizontal px-1'>
                        <NavListe />
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className=" flex gap-3">
                        <div className=" hidden md:flex items-center gap-2">
                            <Search />
                            <Input placeholder="Rechercher depuis le site" />
                        </div>
                        {/* <Button className=" hidden md:flex" variant={"outline"}>  <LogIn />S'inscrire</Button> */}
                        <Button className="bg-blue-500 text-white hover:bg-blue-500/60 transition-all">Se connecter</Button>
                        <label className="swap swap-rotate">
                            <input type="checkbox" onChange={() => {
                                setBackground(curr => curr == "dark" ? "light" : "dark")
                            }} />
                            <svg className="swap-on fill-current size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg className="swap-off fill-current size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </Card>
    )
}



function NavListe() {
    return (
        <>
            <li><button className=" text-blue-500 font-bold">Accueil</button></li>
            <li>
                <details>
                    <summary className="">Nos Services</summary>
                    <ul className='p-2 bg-background w-40'>
                        <li><button className="">Développement web</button></li>
                        <li><button className="">Développement mobile</button></li>
                        <li><button className="">Développement cross platforme</button></li>
                        <li><button className="">Marketing Digital</button></li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary className="">A propos de moi</summary>
                    <ul className='p-2 bg-background w-40'>
                        <li><button className=""><Link href={"/portfolio"}>Mon portofolio</Link></button></li>
                        <li><button className="">Mon blog</button></li>
                    </ul>
                </details>
            </li>
            <li><button className="">Aide</button></li>
        </>
    )
}