import React from 'react'
import TitleBottomBar from './TitleBottomBar'

import ProjetCard from './ProjetCard'


export default function ProjetListe() {
    return (
        <div className=" p-5 lg:p-10">
            <TitleBottomBar>J&lsquo;ai eu à réaliser des projets pour appronfondire ma connaissance  en développement</TitleBottomBar>
            <div className=' mt-20  flex flex-col gap-20'>
                <ProjetCard linkName='shadowflix.com' imgMockup='/projet/netflix-movie.mp4' title="J'ai crée une app de streaming vidéo" isVideo  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='colasbApp.com' imgMockup='/projet/colabs.mp4' title="J'ai crée une app de colaboration en temps réel" isVideo  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='hexashp.com' imgMockup='/taf/ecommerce-1.png' title="J'ai crée un site web de ecommerce"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='touladjo.com' imgMockup='/taf/index-6.png' title="j'ai crée un site web de rencontre en ligne"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='insta-clone.com' imgMockup='/taf/instagram.png' title="j'ai crée un clone d'instagram"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='touladjo.com' imgMockup='/taf/community-2.png' title="j'ai crée un site web de rencontre en ligne"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='hexashp.com' imgMockup='/taf/calculator.png' title="J'ai crée une calculatrice"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
                <ProjetCard linkName='hexashp.com' imgMockup='/taf/chronometre.png' title="J'ai crée un chronometre"  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, temporibus!
                </ProjetCard>
            </div>
        </div>
    )
}
