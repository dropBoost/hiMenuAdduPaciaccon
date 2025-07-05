'use client'

import { postMediaAction } from "../(applicativi)/gestione-menu/action/actionCaricamentoMedia"
import { navLink } from "@/app/components/infoCompany"

export default function CaricamentoMenu() {

  return (
    <div className="overflow-auto ps-3 pe-3 w-[100%] h-[100%]">
      <form action={postMediaAction} className="rounded-lg shadow-lg w-[100%] h-full" method="post">

        {/* Attivo */}
        <div className="mb-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="attivo"
            name="attivo"
            className="rounded text-rose-600 focus:ring-appColor-500"
          />
          <label htmlFor="visibile" className="text-white">Attivo</label>
        </div>
        <hr className="mb-4"/>

        {/* Categoria */}
        <div className="mb-4">
          <label htmlFor="categoria" className="block text-white text-300 mb-2">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            defaultValue=""
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-appColor-500"
            required
          >
            <option value="" disabled>Seleziona tipologia file</option>
            {navLink.filter(option => option.attivo=='true').map(option => (
              <option key={option.name} value={option.name}>{option.name}</option>
            ))}
          </select>
        </div>

        {/* Nome */}
        <div className="mb-4">
          <label htmlFor="nome" className="block text-white mb-2">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-appColor-500"
            required
          />
        </div>

        {/* Ingredienti */}
        <div className="mb-4">
          <label htmlFor="ingredienti" className="block text-white mb-2">Ingredienti</label>
          <textarea
            id="ingredienti"
            name="ingredienti"
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-appColor-500"
            required
          />
        </div>        

        {/* Prezzo */}
        <div className="mb-4">
          <label htmlFor="prezzo" className="block text-white mb-2">Prezzo</label>
          <input
            type="text"
            id="prezzo"
            name="prezzo"
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-appColor-500"
            required
          />
        </div>   

        {/* Posizione */}
        <div className="mb-4">
          <label htmlFor="posizione" className="block text-white mb-2">Posizione</label>
          <input
            type="text"
            id="posizione"
            name="posizione"
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-appColor-500"
            required
          />
        </div>

        {/* Abitudine Alimentare */}
        <div className="mb-4">
          <label htmlFor="abitudiniAlimentari" className="block text-white text-300 mb-2">Abitudine Alimentare</label>
          <select
            id="abitudiniAlimentari"
            name="abitudiniAlimentari"
            defaultValue=""
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-appColor-500"
            required
          >
            <option value="" disabled>Seleziona tipologia file</option>
            <option value="onnivoro">Onnivoro</option>
            <option value="vegetariano">Vegetariano</option>
            <option value="vegano">Vegano</option>
          </select>
        </div>

        {/* Senza Glutine */}        
        <div className="flex flex-col justify-start items-start mb-4">
          <label htmlFor="senzaGlutine" className="block text-white text-300 mb-2">Senza Glutine</label>
          <div className="flex">
            <input
              type="checkbox"
              id="senzaGlutine"
              name="senzaGlutine"
            />
            <label htmlFor="senzaGlutine" className="text-white text-xs ms-2">(attiva in senza glutine)</label>
          </div>
        </div>

        {/* File */}
        <div className="mb-4">
          <label htmlFor="file" className="block text-white mb-2">File</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*,video/*"
            className="w-full p-3 bg-neutral-900 text-white text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-appColor-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-appText-500 text-white font-semibold rounded-md hover:bg-appText-500 focus:outline-none focus:ring-2 focus:ring-appColor-500"
        >
          Invia
        </button>

      </form>
    </div>
  )
}

