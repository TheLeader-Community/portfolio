import Link from "next/link";

export default function Login() {
    return (
        <div
            className=" relative text-white h-screen w-full flex justify-center items-center  bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(/img/food/pexels-chanwalrus-958545.jpg)" }}>
            <div className=" h-full w-full  bg-gradient-to-b from-black/30 to-black/50  backdrop-blur-xs flex justify-center items-center  ">
                <div className=" m-2 lg:bg-black/60 lg:m-0 lg:p-96 w-full p-2 text-center  flex flex-col gap-5 ">
                    <h1 className="  font-extrabold text-4xl">Connexion</h1>
                    <div className=" flex gap-2 rounded-full border border-red-600 w-full bg-black/80 backdrop-blur-lg">
                        <Link href={"/auth/login"}  className="rounded-full p-2 w-full bg-red-600 text-white">Connexion</Link>
                        <Link href={"/auth/register"} className="rounded-full p-2 w-full  text-white">Inscription</Link>
                    </div>
                    <div className=" flex flex-col gap-5">
                        <input type="text" placeholder="votre email" className=" rounded-full w-full bg-black/90 p-3" />
                        <input type="text" placeholder="votre mot de passe" className=" rounded-full w-full bg-black/90 p-3" />
                    </div>
                    <button className="rounded-full p-2 w-full bg-red-600 mt-5  text-white">valider</button>
                    <p className=" mt-5 text-sm">
                        Vous avez pas de compte?
                    </p>
                </div>
            </div>
        </div>
    )
}