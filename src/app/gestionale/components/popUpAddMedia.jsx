'use client'

import { postMediaAction } from "../(applicativi)/gestione-menu/action/actionCaricamentoMedia"
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons';

const iconaAggiungi = <FontAwesomeIcon icon={faPlus}/>

export default function AddElementsPopUp (props) {

    const bgColore = props.bgColore
    const uuid = props.uuid

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    useEffect(() => {
        const fetchData = async () => {
        if (!uuid) return;
        const res = await fetch(`/api/media/${uuid}`);
        const data = await res.json();
        setMediaData(data);
        };
        fetchData();
    }, [uuid]);

    return (
        <nav>
        <div className="flex items-center justify-start">
            <button onClick={toggleMenu} className="flex items-center justify-center bg-green-700 text-white text-sm px-4 py-2 rounded-full m-1">{iconaAggiungi}</button>
        </div>

        {isOpen && (
            <div className={`fixed inset-0 ${bgColore} z-40 flex flex-col justify-center items-center space-y-4 text-xl`}>
                <div className=' border border-appColor-500 rounded-xl p-10 bg-neutral-950'>
                    <div className="overflow-auto ps-10 pe-10 lg:w-[30vw] w-[70vw] h-[80vh] bg-neutral-950">
                        <h3 className='mb-4 text-appColor-500 text-xs font-bold'>MODIFICA</h3>
                        <hr className="mb-4"/>
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
                                <option value="pizza">Pizza</option>
                                <option value="burger">Panini</option>
                                <option value="streetFood">Street Food</option>
                                <option value="antipasti">Antipasti</option>
                                <option value="bibite">Bibite</option>
                            </select>
                            </div>
                            {/* Onnivori */}
                            <div className="mb-4">
                            <label htmlFor="onnivori" className="block text-white text-300 mb-2">Onnivori</label>
                            <select
                                id="onnivori"
                                name="onnivori"
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

                        <div id="groupCheckbox" className="grid grid-cols-2 flex-row mb-4">

                            {/* Classiche */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="classiche"
                                name="classiche"
                            />
                            <label htmlFor="classiche" className="text-white text-xs ms-1">Classiche</label>
                            </div>
                            {/* Speciali */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="speciali"
                                name="speciali"
                            />
                            <label htmlFor="speciali" className="text-white text-xs ms-1">Speciali</label>
                            </div>
                            {/* ScialoEdition */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="scialoEdition"
                                name="scialoEdition"
                            />
                            <label htmlFor="scialoEdition" className="text-white text-xs ms-1 w-full">Scialò Edition</label>
                            </div>
                            {/* Smash */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="panini"
                                name="panini"
                            />
                            <label htmlFor="panini" className="text-white text-xs ms-1">Panini</label>
                            </div>
                            {/* Bibite */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="bibite"
                                name="bibite"
                            />
                            <label htmlFor="bibite" className="text-white text-xs ms-1">Bibite</label>
                            </div>
                            {/* Tacos */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="tacos"
                                name="tacos"
                            />
                            <label htmlFor="tacos" className="text-white text-xs ms-1">Tacos</label>
                            </div>
                            {/* Toast */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="toast"
                                name="toast"
                            />
                            <label htmlFor="toast" className="text-white text-xs ms-1">Toast</label>
                            </div>
                            {/* Piadina */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="piadina"
                                name="piadina"
                            />
                            <label htmlFor="piadina" className="text-white text-xs ms-1">Piadina</label>
                            </div>
                            {/* Sfizi */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="sfizi"
                                name="sfizi"
                            />
                            <label htmlFor="sfizi" className="text-white text-xs ms-1">Sfizi</label>
                            </div>
                            {/* HOTDOG */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="hotdog"
                                name="hotdog"
                            />
                            <label htmlFor="hotdog" className="text-white text-xs ms-1">Hot-Dog</label>
                            </div>
                            {/* BAO */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="bao"
                                name="bao"
                            />
                            <label htmlFor="bao" className="text-white text-xs ms-1">Bao</label>
                            </div>
                            {/* Senza Glutine */}
                            <div className="flex justify-start items-center m-4">
                            <input
                                type="checkbox"
                                id="senzaGlutine"
                                name="senzaGlutine"
                            />
                            <label htmlFor="senzaGlutine" className="text-white text-xs ms-1">Senza Glutine</label>
                            </div>
                        </div>
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

                        



                            {/* Submit */}
                            <button
                            type="submit"
                            className="w-full py-3 bg-appText-500 text-white font-semibold rounded-md hover:bg-appText-500 focus:outline-none focus:ring-2 focus:ring-appColor-500"
                            >
                            Invia
                            </button>

                        </form>
                    </div>
                </div>

                <button onClick={toggleMenu} className="absolute top-1 right-4">
                    <X size={28} />
                </button>
            </div>
        )}
        </nav>
    )
}
