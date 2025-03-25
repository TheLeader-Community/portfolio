import { Search } from "lucide-react";

export default function SearchBar() {
    return (
      <div className=" bg-white text-zinc-400 text-sm border flex gap-2 border-zinc-400 rounded-full p-3 w-full ">
        <Search size={18}></Search>
        <input type="text" placeholder="Entrez votre recherche" className=" w-full h-full bg-transparent" />
      </div>
    )
  }