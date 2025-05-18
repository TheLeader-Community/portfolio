import React from 'react'
import TitleBottomBar from './TitleBottomBar'
import ProjetCard from './ProjetCard'
import { Card } from '@/components/ui/card'



export default function ProjetListe() {


    return (
        <div className=" py-5 p-4 md:p-5 lg:p-10">
            <TitleBottomBar>Liste des projets</TitleBottomBar>
            <div className=' mt-5 md:mt-20  flex flex-col gap-20'>
                <ProjetCard linkName='shadowflix.com' imgMockup='/projet/netflix-movie.mp4' title="J'ai crée une app de streaming vidéo" isVideo  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='colasbApp.com' imgMockup='/projet/colabs.mp4' title="J'ai crée une app de colaboration en temps réel" isVideo  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='hexashop.com' imgMockup='/taf/ecommerce-1.png' title="J'ai crée un site web de ecommerce"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='insta-clone.com' imgMockup='/taf/instagram.png' title="j'ai crée un clone d'instagram"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='tiktok.com' isVideo imgMockup='/taf/tiktok.mp4' title="j'ai crée un clone de tiktok"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='community.com' imgMockup='/taf/community-mobile.png' title="j'ai crée une app d'orientation d'étudiant"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='foodApp.com' imgMockup='/taf/food-app-2.png' title="j'ai crée une app de restaurant"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='touladjo.com' imgMockup='/taf/index-5.png' title="j'ai crée une template de site web de rencontre en ligne"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='cardges.com' imgMockup='/taf/appgestioncarte.png' title="j'ai crée une template d'app de gestion de carte"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>

                <Card>
                    <p className=' text-xs text-zinc-200'>
                        Pour l&lsquo;instant cette platforme est en pleine construction et certains des projets n&lsquo;y sont pas encore
                    </p>
                </Card>
            </div>
        </div>
    )
}
