
import PlatListe from "../components/data/platListe"
import FloatinfButton from "../components/ui/FloatingButton"
import Header from "../components/ui/Header"

export default function Page() {


    return (
        <div >
            <Header returnbutton />
            <div className=" h-full bg-white w-full p-5 py-20 pb-28 text-black">
                <PlatListe />
                <FloatinfButton href="/plat/add" />
            </div>
        </div>
    )
}