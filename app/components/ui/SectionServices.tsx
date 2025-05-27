"use client"

import ListeCardService from "./ListeCardService"



export default function SectionServices() {

    //304MX6
    //NAME YA CHADDY ET PHONE NUMBER

    const plans = [
        {
            name: "Standart",
            price: "100.000",
            features: [
                "création d'un site web vitrine",
                "referencement garantie",
                "obtention d'un nom de domaine"
            ]
        },
        {
            name: "Essentiel",
            price: "200.000",
            features: [
                "création d'un site web",
                "formation en autonomie de gestion web",
                "création d'une application mobile",
                "referencement garantie",
                "obtention d'un nom de domaine"
            ]
        },
        {
            name: "pro startup",
            price: "300.000",
            features: [
                "création d'un site web",
                "création d'une application mobile",
                "formation en autonomie de gestion web",
                "accompagnement ",
                "referencement garantie",
                "obtention d'un nom de domaine"
            ]
        },
    ]



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
                                                <button className='w-full  btn btn-primary duration-150 text-sm'>               Get Started
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </section>
                {/* <Card className=" bg-background">

                    <CardContent className=" flex flex-col gap-10 text-center md:text-start">
                        <Card className=" bg-background p-2 flex flex-col-reverse md:flex-row items-center gap-10 mt-10">
                            <div className=" space-y-5  text-service-1">
                                <h1 className="text-service text-3xl  md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-900">Une platforme d&lsquo;orientation scolaire</h1>
                                <p className=" text-sm text-slate-400">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                </p>
                                <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                            </div>
                            <Image src={"/illustrations/graduation hats-rafiki.png"} alt="" width={"500"} height={"500"} className="w-full h-96 img-service-1 object-cover" ></Image>
                        </Card>

                        <Card className=" bg-background p-2 flex flex-col-reverse md:flex-row-reverse items-center gap-10 mt-10">
                            <div className=" space-y-5  text-service-1">
                                <h1 className="text-service text-3xl  md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-900">Une aide dans la digitalisation de vos entreprises</h1>
                                <p className=" text-sm text-slate-400">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                </p>
                                <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                            </div>
                            <Image src={"/illustrations/Sentiment analysis-rafiki.png"} alt="" width={"500"} height={"500"} className="w-full h-96 img-service-1 object-cover" ></Image>
                        </Card>


                        <Card className=" bg-background p-2 flex flex-col-reverse md:flex-row items-center gap-10 mt-10">
                            <div className=" space-y-5  text-service-1">
                                <h1 className="text-service text-3xl  md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-900">Une platforme d&lsquo;intégration aux métiers</h1>
                                <p className=" text-sm text-slate-400">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                </p>
                                <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                            </div>
                            <Image src={"/illustrations/Company-rafiki.png"} alt="" width={"500"} height={"500"} className="w-full h-96 img-service-1 object-cover" ></Image>
                        </Card>
                        <Card className=" bg-background p-2 flex flex-col-reverse md:flex-row-reverse items-center gap-10 mt-10">
                            <div className=" space-y-5  text-service-1">
                                <h1 className="text-service text-3xl  md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-900">Un guide & un espace pour tous les passionnés d&lsquo;informatique</h1>
                                <p className=" text-sm text-slate-400">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis earum, iusto doloribus assumenda soluta minus nostrum incidunt ab dicta possimus adipisci animi saepe distinctio nulla sit rerum consequatur nisi.
                                </p>
                                <Button className=" bg-blue-500 text-white">En savoir plus <ArrowRight></ArrowRight></Button>
                            </div>
                            <Image src={"/illustrations/college entrance exam-rafiki.png"} alt="" width={"500"} height={"500"} className="w-full h-96 img-service-1 object-cover" ></Image>
                        </Card>



                    </CardContent>
                </Card> */}
            </div>
        </>
    )
}

