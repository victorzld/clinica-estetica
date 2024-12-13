import Image from 'next/image'

const procedures = [
    {
        name: "Limpeza de Pele",
        description: "É o primeiro passo dos procedimentos estéticos. Limpa e remove impurezas, acne e cravos que impedem a pele de absorver cosméticos e demais procedimentos. Comece por ela!",
        image: "/assets/foto.png"
    },
    {
        name: "Microagulhamento - MMP",
        description: "Procedimento que envolve o uso de uma 'caneta' com pequenas agulhas finas para criar microperfurações na pele. Essas microperfurações estimulam a produção de colágeno e regeneração da pele.",
        image: "/assets/foto2.png"
    },
    {
        name: "Hydra Lips - Com Microagulhamento",
        description: "O tratamento labial Hydra Lips é um procedimento que visa hidratar, revitalizar e melhorar a aparência dos lábios.",
        image: "/assets/foto3.png"
    },
    {
        name: "Drenagem Linfática Detox",
        description: "É um método de massagem que pode ser considerado um detox corporal, auxiliando a eliminar toxinas e impurezas do organismo.",
        image: "/assets/foto4.png"
    },
]

export default function Procedures() {
    return (
        <section id='procedures' className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 mt-5">
                <div className='flex flex-col gap-3 mb-12'>
                    <h2 className="text-4xl font-bold text-center ">Quais procedimentos realizo?</h2>
                    <h3 className='text-xl font-semibold text-center'>E qual a melhor opção para você?</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {procedures.map((procedure, index) => (
                        <div key={index} className="bg-slate-100/70 rounded-lg shadow-md overflow-hidden">
                            <Image
                                src={procedure.image}
                                alt={procedure.name}
                                width={400}
                                height={300}
                                className="w-full rounded-lg h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{procedure.name}</h3>
                                <p className="text-gray-600">{procedure.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

