'use client'

import { companyName, socialLink, logoLight, navLink } from "@/app/components/infoCompany"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from "next/navigation";

const ICONclose = <FontAwesomeIcon icon={faXmark}/>
const ICONmenu = <FontAwesomeIcon icon={faBars} className="text-xl text-brand-400"/>

export default function ContactBarMenu () {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const pathname = usePathname();

    return (
        <>
        <div className="w-full bg-brandDark-400 flex justify-between items-center p-5">
            <div className="h-full order-2 md:order-1 flex justify-center items-center">
                <Link href="/" className="text-xl font-bold text-brand-500">
                    <Image src={logoLight} width={50} height={50} alt={`logo-${companyName}`}/>
                </Link>
            </div>
            <div className="h-full order-1 md:w-full md:order-2 flex md:justify-start justify-start items-center">
                <div className="flex items-center justify-center">
                    <div className="hidden md:flex justify-center items-center gap-2 px-5">
                        {navLink.map((link, index) => (
                            <Link key={index}
                            href={link.link}
                            onClick={() => setIsOpen(false)}
                            className={`uppercase text-xs font-bold border px-4 py-1 rounded-xl transition
                                ${pathname === link.link
                                ? 'bg-brand-400 text-brandDark-400 border-2 border-neutral-100/50'
                                : 'text-neutral-100 border-brand-400 hover:text-brandDark-400 hover:bg-neutral-100 active:bg-red-500'}
                            `}>{link.name}</Link>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? ICONclose : ICONmenu}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden fixed inset-0 bg-neutral-900 z-40 flex flex-col justify-start items-center text-xl">
                        <div className="h-[40vh] bg-brand-400 w-full relative overflow-hidden">
                            <Image src="/promo.png" sizes="100vw" quality={30} fill className="object-cover" alt={`promo-${companyName}`}/>
                        </div>
                        <div className="h-[5vh] bg-brand-400 w-full flex justify-center items-center">
                            CLICCA SCOPRI LA PROMO
                        </div>
                        <div className="flex flex-col h-[45vh] w-full bg-brandDark-400 gap-3 flex-1 justify-center items-center">
                            {navLink.map((link, index) => (
                                <Link
                                key={index}
                                href={link.link}
                                onClick={() => setIsOpen(false)}
                                className={`uppercase text-xs font-bold border px-4 py-1 rounded-xl transition
                                ${pathname === link.link
                                ? 'bg-brand-400 text-brandDark-400 border-2 border-neutral-100/50'
                                : 'text-neutral-100 border-brand-400 hover:text-brandDark-400 hover:bg-neutral-100 active:bg-red-500'}
                                `}>
                                {link.name}</Link>
                            ))}
                        </div>

                        <div className="flex flex-col h-[10vh] bg-neutral-100 w-full justify-center items-center">
                            <div className="flex gap-2 justify-between items-center">
                                {socialLink.filter(icone => (icone.link !== '#')).map((icone,index) => (
                                <Link key={index} href={icone.link}>
                                <button alt={`${companyName} - ${icone.name}`} className="text-brand-400 hover:text-brandDark-400 h-4 w-4 flex items-center justify-center" key={icone.name}>
                                    {icone.icon}
                                </button>
                                </Link>
                                ))}
                            </div>
                        </div>

                        <button onClick={toggleMenu} className="absolute bg-brand-400 right-0 text-neutral-100 hover:text-brand-400 hover:bg-brandDark-400 rounded-es-xl p-2">
                            {ICONclose}
                        </button>

                    </div>
                )}
            </div>
            <div className="h-full order-3 md:order-3 flex justify-between gap-2 items-center">
                {socialLink.filter(icone => (icone.link !== '#')).map((icone,index) => (
                <Link key={index} href={icone.link}>
                <button alt={`${companyName} - ${icone.name}`} className="text-neutral-100 hover:text-brandDark-400 hover:bg-brand-400 hover:p-3 hover:rounded-md h-4 w-4 flex items-center justify-center" key={icone.name}>
                    {icone.icon}
                </button>
                </Link>
                ))}
            </div>
        </div>
        </>
    )
}