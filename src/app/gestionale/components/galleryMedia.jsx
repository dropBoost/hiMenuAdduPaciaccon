'use client';

import { useState, useEffect } from 'react';
import CardMenuItems from './cardMenuItems';
import { getMediaData } from '../(applicativi)/gestione-menu/action/action';

export default function GalleryMedia({ refreshTrigger }) {
  
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const data = await getMediaData();
    setMedia(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [refreshTrigger]); // <- Ricarica quando cambia

  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-cols-auto w-full h-full ps-6 pe-6">
      {loading ? (
        <p>Caricamento...</p>
      ) : media.length > 0 ? (
        media.map((item) => (
          <CardMenuItems
            key={item.UUID}
            posizione={item.posizione}
            nome={item.nome}
            prezzo={item.prezzo}
            linkMedia={item.imgUrl}
            dataEvento={item.dataEvento}
            tipologiaFile={item.tipologia}
            uuid={item.UUID}
            attivo={item.attivo}
          />
        ))
      ) : (
        <p>Nessun media disponibile</p>
      )}
    </div>
  );
}