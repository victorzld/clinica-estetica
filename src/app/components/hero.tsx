import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section id='hero' className="relative h-screen bg-hero bg-cover bg-center max-sm:bg-center">

            <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

            <div className="relative z-20 flex flex-col gap-10 items-center justify-center h-full text-white text-center px-4">

                <Image
                    src='/assets/logo.png'
                    alt='Logo Gabrielly Capelini'
                    height={200}
                    width={200}
                />

                <div className='flex flex-col items-center justify-center gap-5'>
                    <h1 className="text-5xl font-bold mb-4 max-sm:text-2xl">Gabrielly Capelini | Estética facial e corporal</h1>
                    <p className="text-xl max-w-2xl max-sm:text-lg">
                        Aqui o cuidado é essência, o relaxamento a assinatura, e a confiança o resultado que você merece!
                    </p>
                </div>

                <button className="mt-8 bg-slate-50 text-zinc-950 font-bold py-3 px-8 rounded-2xl 
                text-lg hover:scale-105 transition duration-300 max-sm:py-2 max-sm:px-5">
                    <Link href={'#procedures'}>
                        Clique e veja mais!
                    </Link>
                </button>
            </div>
        </section>
    )
}

