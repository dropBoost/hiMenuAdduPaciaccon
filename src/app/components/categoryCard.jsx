import Image from "next/image"
import Link from "next/link"

export default function CategoryCard (props) {

   const name = props.name
   const link = props.link
   const img = props.img

    return (
        <>
        <Link href={link}>
        <div className="flex flex-col w-full bg-neutral-200 p-3 rounded-xl">
            <div className="flex flex-col items-start justify-start w-full">
            <Image src={img} quality={20} height={150} width={150} sizes="100vw" className="w-full h-auto rounded-md mt-4 mb-2 border border-neutral-200 object-cover"/>
            </div>
            <div className="flex flex-col items-start justify-start h-full w-full pt-2 pb-2">
                <h2 className="text-brandDark-400 text-lg uppercase font-bold">{name}</h2>
            </div>
            <div>
            <button href={link} className="bg-brand-400 text-white font-bold ps-2 pe-3 text-sm rounded-md" > &gt; scopri </button>
            </div>
        </div>
        </Link>
        </>
    )

}