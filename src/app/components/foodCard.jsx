import Image from "next/image"
import Link from "next/link"
import { companyName } from "./infoCompany"

export default function FoodCard(props) {
  const { nome, ingredienti, prezzo, uuid, attivo, cate, img, onClick } = props;

  return (
    <div className="flex flex-col w-full justify-between items-start bg-white p-6 rounded-3xl">
      {img && (
        <div className="flex flex-col items-start justify-start w-full">
          <Image src={img} quality={20} height={150} width={150} alt={`${nome} - ${companyName}`} className="rounded-xl mt-4 mb-2 border border-neutral-200" />
        </div>
      )}
      <div className="flex flex-col items-start justify-start h-full w-full pt-2 pb-2 bg-white">
        <h2 className="text-brandDark-400 text-lg uppercase font-bold">{nome}</h2>
        <p className="text-neutral-500 text-sm">{ingredienti}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <span className="bg-brand-400 text-white font-bold ps-2 pe-3 text-sm rounded-md">{prezzo}€</span>
        <button onClick={onClick} className="ml-auto text-sm underline text-brandDark-400">
          Dettagli
        </button>
      </div>
    </div>
  );
}