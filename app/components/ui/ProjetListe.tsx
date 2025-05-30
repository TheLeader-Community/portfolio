import React from 'react'
import ProjetCard from './ProjetCard'
import { Card } from '@/components/ui/card'



export default function ProjetListe() {

    const ListeProjets = [
        {
            linkName: 'shadowflix.com',
            imgMockup: '/projet/netflix-movie.mp4',
            title: "J'ai crée une app de streaming vidéo",
            isVideo: true
        },
        {
            linkName: 'multiapp.com',
            imgMockup: '/projet/multiapp.mp4',
            title: "J'ai crée une app de jeux multi joueur",
            isVideo: true
        },
        {
            linkName: 'colasbApp.com',
            imgMockup: '/projet/colabs.mp4',
            title: "J'ai crée une app de colaboration en temps réel",
            isVideo: true
        },
        {
            linkName: 'hexashop.com',
            imgMockup: '/taf/ecommerce-1.png',
            title: "J'ai crée un site web de ecommerce",
            isVideo: false,
        },
        {
            linkName: 'gestion.com',
            imgMockup: '/taf/scolaire.png',
            title: "J'ai crée une platforme de gestion scolaire",
            isVideo: false
        },
        {
            linkName: 'insta-clone.com',
            imgMockup: '/taf/instagram.png',
            title: "j'ai crée un clone d'instagram",
            isVideo: false
        },
        {
            linkName: 'tiktok.com',
            imgMockup: '/taf/tiktok.mp4',
            title: "j'ai crée un clone de tiktok",
            isVideo: true
        },
        {
            linkName: 'community.com',
            imgMockup: '/taf/community-mobile.png',
            title: "j'ai crée une app d'orientation d'étudiant",
            isVideo: false
        },
        {
            linkName: 'foodApp.com',
            imgMockup: '/taf/food-app-2.png',
            title: "j'ai crée une app de restaurant",
            isVideo: false
        },
        {
            linkName: 'touladjo.com',
            imgMockup: '/taf/index-5.png',
            title: "j'ai crée une template de site web de rencontre en ligne",
            isVideo: false
        }


    ]


    return (
        <div className=" py-5 p-4 md:p-5 lg:p-10">

            {/* <div className=' relative py-28'>
                <ProjectSlide />
            </div> */}
            <div className=' mt-5 md:mt-20  flex flex-col gap-20'>
                {
                    ListeProjets.map((el, index) => (
                        <ProjetCard key={index} linkName={el.linkName} imgMockup={el.imgMockup} title={el.title} isVideo={el.isVideo}  >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                        </ProjetCard>
                    ))
                }

                <Card>
                    <p className=' text-xs text-zinc-200'>
                        Pour l&lsquo;instant cette platforme est en pleine construction et certains des projets n&lsquo;y sont pas encore
                    </p>
                </Card>
            </div>
        </div>
    )
}
