import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function SectionContact() {
    return (
        <div>
            <section className="py-28 relative ">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                    <div className="max-w-xl space-y-5 md:mx-auto">
                        <p className=" font-black text-4xl md:text-6xl">
                            Rejoignez l&lsquo;élite du digital avec Le Site du Leader
                        </p>
                        <p className="text-primary/40 mt-3">
                            Nous créons des solutions  modernes, performantes et sur mesure pour ceux qui veulent impacter demain.
                        </p>
                    </div>
                    <div className="mt-6">
                        <a
                            href="#services"
                            className="inline-block py-2 px-6 text-base-content font-medium bg-base-100 duration-150 hover:bg-base-300 active:bg-base-300/90 rounded-full"
                        >
                            Découvrir nos services
                        </a>
                    </div>
                </div>
                <div
                    className="absolute top-0 w-full h-full bg-gradient-to-bl via-black from-blue-500 to-black"

                />
            </section>
            <section className='py-14'>
                <div className='max-w-screen-xl mx-auto px-4 text-base-content gap-12 md:px-8 lg:flex'>
                    <div className='max-w-md'>
                        <h3 className='text-base-content text-3xl font-semibold sm:text-4xl'>
                            Entrons en contact
                        </h3>
                        <p className='mt-3'>
                            Nous sommes là pour vous accompagner et répondre à toutes vos questions. N&lsquo;hésitez pas à nous écrire, nous serons ravis d&lsquo;échanger avec vous !
                        </p>
                    </div>

                    <div>
                        <ul className='mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0'>
                            <li className='space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none'>
                                <div className='w-12 h-12 rounded-full border flex items-center justify-center text-base-content'>
                                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418' />
                                    </svg>
                                </div>
                                <h4 className='text-base-content text-lg font-medium xl:text-xl'>
                                    Rejoignez notre communauté
                                </h4>
                                <p>
                                    Partagez, échangez et grandissez avec nous au sein d&lsquo;un réseau dynamique.
                                </p>
                                <div className='flex items-center gap-1 text-sm text-primary duration-150 hover:text-primary/85 font-medium'>
                                    Rejoignez notre Discord
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                                        <path fillRule='evenodd' d='M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z' clipRule='evenodd' />
                                    </svg>
                                </div>

                            </li>
                            <li className='space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none'>
                                <div className='w-12 h-12 rounded-full border flex items-center justify-center text-base-content'>
                                    <svg className='w-6 h-6' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_17_80)'>
                                            <path d='M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z' fill='currentColor' />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_17_80'>
                                                <rect width='48' height='48' fill='base-100' />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h4 className='text-base-content text-lg font-medium xl:text-xl'>
                                    Suivez-nous sur Twitter
                                </h4>
                                <p>
                                    Restez connectés et recevez nos dernières actualités.
                                </p>
                                <div className='flex items-center gap-1 text-sm text-primary duration-150 hover:text-primary/85 font-medium cursor-pointer'>
                                    Envoyez-nous un message
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
                                        <path fillRule='evenodd' d='M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z' clipRule='evenodd' />
                                    </svg>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className='py-14'>
                    <div className='max-w-screen-xl mx-auto px-4 text-base-content md:px-8'>
                        <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
                            <div className='max-w-lg space-y-3'>
                                <h3 className='text-primary font-semibold'>Contact</h3>
                                <p className='text-base-content text-3xl font-semibold sm:text-4xl'>
                                    Faites-nous savoir comment nous pouvons vous aider
                                </p>
                                <p>
                                    Nous sommes là pour répondre à toutes vos questions. Nous avons hâte d’avoir de vos nouvelles !
                                    Veuillez remplir le formulaire ou utiliser les informations de contact ci-dessous.
                                </p>
                                <div>
                                    <ul className='mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center'>
                                        <li className='flex items-center gap-x-3'>
                                            <div className='flex-none text-base-content'>📞</div>
                                            <p>‪+242 06 123 45 67‬</p>
                                        </li>
                                        <li className='flex items-center gap-x-3'>
                                            <div className='flex-none text-base-content'>📧</div>
                                            <p>contact@leaderagency.com</p>
                                        </li>
                                        <li className='flex items-center gap-x-3'>
                                            <div className='flex-none text-base-content'>📍</div>
                                            <p>Brazzaville, Congo</p>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md'>
                                <form className='space-y-5'>
                                    <div className=" flex flex-col  md:flex-row gap-3">
                                        <Input className=" bg-transparent rounded-lg" type="text" placeholder="Entrez votre nom complet"></Input>
                                        <Input className=" bg-transparent rounded-lg" type="email" placeholder="Entrez votre email"></Input>
                                    </div>
                                    <div>
                                        <Textarea id='message' placeholder="Entrez un message" required className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg' />
                                    </div>
                                    <Button className=" w-full bg-blue-500 text-white">Soumettre</Button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
