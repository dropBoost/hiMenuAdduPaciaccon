import { companyName, socialLink } from "@/app/components/infoCompany"
import Link from "next/link";

export default function ContactBar () {

    const telefono = socialLink.find(icone => icone.name === "tel" && icone.link != "#");


    return (
        <>
        <div className="w-full bg-brand-400 flex justify-between items-center p-5">
            <div className="flex gap-2 justify-between items-center">
              {telefono && (
                <Link href={telefono.link}>
                <div className="text-neutral-100 hover:text-brandDark-400 flex justify-center items-center gap-2">
                    <div className="h-4 w-4 flex items-center justify-center">{telefono.icon}</div>
                    <div className="h-4 text-xs flex items-center justify-center font-bold">{telefono.info}</div>
                </div>
                </Link>
                )}
            </div>
            <div className="flex gap-2 justify-between items-center">
              {socialLink.filter(icone => (icone.link !== '#')).map((icone,index) => (
                <Link href={icone.link}>
                <button alt={`${companyName} - ${icone.name}`} className="text-neutral-100 hover:text-brandDark-400 h-4 w-4 flex items-center justify-center" key={icone.name}>
                  {icone.icon}
                </button>
                </Link>
              ))}
            </div>
        </div>
        </>
    )
}