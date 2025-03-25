import Link from "next/link";

export default function Auth() {
    return (
        <div
            className=" relative text-white h-screen w-full flex justify-center items-center  bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(/img/food/pexels-chanwalrus-958545.jpg)" }}>
            <div className=" h-full w-full  bg-gradient-to-b from-black/30 to-black/90  backdrop-blur-xs flex justify-center items-center  ">
                <div className=" m-2 lg:bg-black/80 lg:m-0 lg:p-96 w-full p-2 text-center  flex flex-col gap-5 ">
                    <h1 className="  font-extrabold text-4xl">Food<span className=" text-red-600">App</span></h1>
                    <p className="">
                        foodApp la valeur méritée par le prix
                    </p>
                    <div className=" lg:mx-20 flex flex-col gap-5 justify-center">
                        <Link href={"/auth/login"} className=" rounded-full p-2 w-full bg-red-600 text-white">Se connecter</Link>
                        <button className=" rounded-full p-2 w-full border border-red-600 text-white">S'inscrire</button>
                    </div>
                    <p className=" mt-5 text-sm">
                        Vous avez pas de compte?
                    </p>
                </div>
            </div>
        </div>
    )
}