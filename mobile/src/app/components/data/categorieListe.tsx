import { View, Text } from "react-native";
import { CategorieCard } from "../ui/CategorieCard";

interface Categorie {
    img: string,
    title: string,
    nb_resultat: number
}


export default function CategorieListe() {

    const listecategorie: Categorie[] = [
        {
            img: "/img/food/bg1.jpg",
            title: "africain",
            nb_resultat: 15
        },
        {
            img: "/img/food/bg2.jpg",
            title: "sénégalais",
            nb_resultat: 10
        },
        {
            img: "/img/food/bg3.jpg",
            title: "doux",
            nb_resultat: 12
        },
        {
            img: "/img/food/bg4.jpg",
            title: "africain",
            nb_resultat: 200
        },
        {
            img: "/img/food/bg5.jpg",
            title: "europe",
            nb_resultat: 30
        }
    ]
    return (
        <View className=" p-3 w-full">
            <Text className=" p-5 ps-2 pt-0 font-semibold text-xl">Catégorie</Text>
            <View className="carousel carousel-center max-w-md space-x-3 w-full rounded-box">
                {
                    listecategorie.map((Element: Categorie, index: number) => (
                        <View className="carousel-item" key={index}>
                            <CategorieCard img={Element.img} title={Element.title} nb_resultat={Element.nb_resultat}  />
                        </View>

                    ))
                }
            </View>
        </View>
    )
}
