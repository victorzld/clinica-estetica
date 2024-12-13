'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [header, setHeader] = useState(false)

    const scrollHeader = () => {
        if (window.scrollY >= 0) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)

        return () => {
            window.addEventListener('scroll', scrollHeader)
        }

    }, [])

    return (
        <div className={header ? "fixed w-[100%] bg-slate-300" : "hidden z-0"}>
            <nav className="py-3 flex items-center justify-between px-20 max-xl:hidden">
                <Link href={'/'}>
                    <Image
                        src="/assets/logo1.png"
                        alt="Gabrielly Capelini"
                        width={60}
                        height={60}
                        className=""
                    />
                </Link>

                <div className="flex gap-5 font-medium text-sm">
                    <Link className="text-zinc-900 hover:text-zinc-600 transition duration-300" href={'#procedures'}>Procedimentos</Link>
                    <Link className="text-zinc-900 hover:text-zinc-600 transition duration-300" href={'#about-me'}>Sobre</Link>
                    <Link className="text-zinc-900 hover:text-zinc-600 transition duration-300" href={'#contact'}>Entre em contato</Link>
                </div>
            </nav>
        </div>
    )
}