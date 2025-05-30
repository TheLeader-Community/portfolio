"use client"

import ListeCardService from "./ListeCardService"



export default function SectionServices() {

    //304MX6
    //NAME YA CHADDY ET PHONE NUMBER


    const plans = [
        {
            name: "Starter",
            price: "100.000 FCFA",
            features: [
                "Site vitrine professionnel",
                "Nom de domaine personnalisé (1 an)",
                "Référencement de base (SEO)",
                "Design responsive (mobile et desktop)"
            ]
        },
        {
            name: "Business",
            price: "200.000 FCFA",
            features: [
                "Site web complet (vitrine ou institutionnel)",
                "Nom de domaine + hébergement (1 an)",
                "Formation pour la gestion du site",
                "Référencement optimisé",
                "Support technique 1 mois"
            ]
        },
        {
            name: "Startup Pro",
            price: "300.000 FCFA",
            features: [
                "Site web + application mobile (Android & Ios)",
                "Nom de domaine + hébergement (1 an)",
                "Référencement avancé",
                "Formation & accompagnement personnalisé",
                "Design sur mesure + intégration réseaux sociaux",
                "Support prioritaire 3 mois"
            ]
        }
    ];



    return (
        <>
            <ListeCardService />
            <div className=" lg:p-20 pb-5 px-3">
                <section>
                    <div className='py-14'>
                        <div className='max-w-screen-xl mx-auto px-4 text-base-content md:px-8'>
                            <div className='relative max-w-xl mx-auto sm:text-center'>
                                <h3 className='text-base-content text-3xl font-bold sm:text-4xl'>
                                    un plan adapter à votre projet
                                </h3>
                                <div className='mt-3 max-w-xl'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                        efficitur consequat nunc.
                                    </p>
                                </div>
                            </div>
                            <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                                { /*-use a map loop*/}
                                {
                                    plans.map((el, index) => (
                                        <div key={index} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                            <div>
                                                <span className='text-primary font-medium'>{el.name}</span>
                                                <div className='mt-4 text-base-content text-3xl font-semibold'>
                                                    <span>{el.price} FCFA</span>
                                                    <span className='text-xl text-base-content font-normal'>/mo</span>
                                                </div>
                                            </div>
                                            <ul className='py-8 space-y-3'>
                                                { /*-use a map loop*/}
                                                {
                                                    el.features.map((feature, index) => (
                                                        <li key={index} className='flex items-center gap-5'>
                                                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-primary' viewBox='0 0 20 20' fill='currentColor'>
                                                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                                            </svg>
                                                            <span>{feature}</span>
                                                        </li>

                                                    ))
                                                }

                                            </ul>
                                            <div className='flex-1 flex items-end'>
                                                <button className='w-full  btn btn-primary duration-150 text-sm'>               Commencer
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

