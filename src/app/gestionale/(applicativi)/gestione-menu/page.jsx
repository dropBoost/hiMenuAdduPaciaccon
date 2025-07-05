'use client'

import { useState, useEffect } from "react";
import GalleryMedia from "../../components/galleryMedia";
import CaricamentoMenu from "../../components/caricamentoMenu";
import AddElementsPopUp from "../../components/popUpAddMedia";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight  } from '@fortawesome/free-solid-svg-icons';

const iconaRicarica = <FontAwesomeIcon icon={faArrowRotateRight}/>

export default function GestioneFoto () {

   const [refreshGallery, setRefreshGallery] = useState(false);

  const handleRefresh = () => {
    setRefreshGallery((prev) => !prev);
  };

    return (
        <>
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full lg:p-5 p-7 gap-4 justify-center items-center">
          <div className="lg:col-span-9 col-span-12 col-start-1 lg:row-span-1 row-span-1 row-start-1 h-full rounded-2xl flex lg:p-5 items-center justify-start">
            <button
              onClick={handleRefresh}
              className="flex items-center justify-center bg-appText-500 text-white text-sm px-4 py-2 rounded-full m-1"
            >
              {iconaRicarica}
            </button>
            <div className="block lg:hidden" >
            <AddElementsPopUp bgColore={"bg-appColor-500"}/>
            </div>
          </div>
          <div className="lg:col-span-9 col-span-12 col-start-1 lg:row-span-11 row-span-11 row-start-2 h-full border border-1 border-appColor-500 rounded-2xl p-5 flex items-center justify-center">
            <div className="flex items-center justify-center md:h-[70vh] sm:h-[60vh] h-[60vh] w-full overflow-auto">
            <GalleryMedia refreshTrigger={refreshGallery} />
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 lg:col-start-10 col-start-1 lg:row-span-12 lg:row-start-1 row-span-9 row-start-4 h-full bg-neutral-700/50 rounded-2xl items-start justify-center p-5 hidden lg:block">
            <CaricamentoMenu/>
          </div>
        </div>
        </>
    )
}