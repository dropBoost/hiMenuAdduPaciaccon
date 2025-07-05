'use client'

import { getOneMediaAction } from '../(applicativi)/gestione-menu/action/action';
import { useState } from 'react';

import PopUpUPDATEMedia from './popUpUpdateMedia';
import DeleteButton from './deleteButtons';
import Image from 'next/image';



export default function CardMenuItems(props) {

    const [showPopup, setShowPopup] = useState(false);

    const handleOpen = () => {
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    const linkMedia = props.linkMedia
    const posizione = props.posizione
    const categoria = props.categoria
    const dataCaricamento = props.dataCaricamento
    const id = props.id
    const uuid = props.uuid
    const attivo = props.attivo
    const prezzo = props.prezzo
    const nome = props.nome

    return (
        <>
        <div className={`rounded-xl flex flex-col shadow-lg p-4 border-2 ${ attivo=="true" ? 'border-green-700' : 'border-red-500' }`} alt={nome}>
            <div className="flex justify-center items-center m-1">
                <div className="bg-white flex rounded-full m-1 w-[20px] h-[20px] justify-center items-center text-[0.6rem] text-neutral-900 font-black" >
                    {posizione}
                </div>
                <div className={`${ attivo=="true" ? 'bg-green-700' : 'bg-red-500' } flex rounded-full m-1 mb-2 w-[50px] h-[20px] justify-center items-center text-[0.6rem]  text-neutral-900 font-black`}>
                    {attivo =="true" ? "on" : "off"}
                </div>
            </div>
            {/* <Image src={linkMedia} width={40} height={40} quality={20} layout={"responsive"} alt={nome} className='rounded-3xl'/> */}
            <div className="flex-col mb-2">
                <div className="bg-appColor-500 flex p-1 rounded-full w-full h-[20px] justify-center items-center m-1">
                    <span className="lg:text-[0.7rem] text-[0.5rem] font-bold text-neutral-900 truncate" >{nome}</span>
                </div>
                <div className="bg-appText-500 flex p-1 rounded-full w-[100%] h-[20px] justify-center items-center m-1 mb-0">
                    <span className="lg:text-[0.7rem] text-[0.5rem] text-neutral-100" >{prezzo}€</span>
                </div>
            </div>
            <div className='flex justify-center h-[30px]'>
                <div className="flex justify-e items-stretch">
                    <div className="border border-red-700 hover:bg-red-700 flex p-1 rounded-full  justify-center items-center mt-1">
                        <DeleteButton uuid={uuid}/>
                    </div>
                    <div className="border border-green-900 hover:bg-green-900 flex p-1 rounded-full justify-center items-center ms-1 mt-1">
                        <PopUpUPDATEMedia uuid={uuid} id={id} status={showPopup} onClose={handleClose} bgColore={"bg-appColor-500"} />
                    </div>
                </div>
                
                
            </div>
        </div>
        </>
    );
}                    