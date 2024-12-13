import Image from 'next/image'
import { SliderImages } from '../layouts/slider'

export default function Professional() {
    const professionalInfo = [
        "Formada em biologia!",
        "Apaixonada pela área de estética!",
        "Amo cuidar de pessoas!",
        "Casada!",
        "24 anos!",
        "Mãe de pet e de um baby lindo de 1 ano!"
    ]

    return (
        <section id='about-me' className="pt-16 pb-20 bg-white">
            <div className="container mt-5 mx-auto px-4 ml-14 max-sm:flex max-sm:flex-col max-sm:-ml-5">
                <h2 className="text-4xl font-bold text-center mb-10 max-sm:text-2xl max-sm:text-center max-sm:ml-10">Conheça a Gaby </h2>

                <div className="xl:ml-20 flex items-center gap-24 py-2 pl-14 max-sm:flex max-sm:flex-col">
                    <div className="w-full md:w-1/3">
                        <SliderImages />
                    </div>

                    <div className="xl:ml-10 w-full md:w-2/3 -mr-14">
                        <h3 className="text-3xl font-semibold mb-4 max-sm:text-2xl max-sm:ml-2">Gabrielly Capelini</h3>
                        <ul className="space-y-4">
                            {professionalInfo.map((info, index) => (
                                <li key={index} className="flex items-start max-sm:-ml-12 max-sm:mt-7">
                                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>{info}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

