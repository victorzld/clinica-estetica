import Link from 'next/link'

export default function Contact() {

    const phone = 27996997969

    return (
        <section id='contact' className="py-14 bg-primary bg-zinc-950 text-white">
            <div className="container mx-auto px-4 text-center mt-5">
                <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu corpo?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Dê o primeiro passo em direção ao cuidado que seu corpo precisa.
                    Estou aqui para orientá-la e pronta para entregar o resultado que você merece.
                </p>
                <button className='hover:scale-105 transition duration-300'>
                    <Link href={`https://wa.me/${phone}`}
                        target='_blank'
                        className="bg-white text-zinc-950 font-bold py-3 px-5
                        rounded-full text-lg"
                    >
                        Entre em contato!
                    </Link>
                </button>
            </div>
        </section>
    )
}

