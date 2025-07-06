'use client';

import { useState } from 'react';
import FoodCard from './foodCard';
import ProductPopup from './popupProduct';

export default function FoodGrid({ categoria, menu }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="border-b mx-10 border-brand-400 p-5 text-md font-extrabold text-center text-brandDark-400 uppercase">
        <span className="border border-brand-400 px-5 py-1 rounded-2xl">{categoria}</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 flex-wrap gap-5 p-10">
        {menu.map((item) => (
            <FoodCard
                key={item.id}
                nome={item.nome}
                ingredienti={item.ingredienti}
                prezzo={item.prezzo}
                uuid={item.uuid}
                attivo={item.attivo}
                cate={item.categoria}
                img={item.imgUrl}
                onClick={() => openModal(item)}
            />
        ))}
      </div>

      <ProductPopup isOpen={isOpen} onClose={closeModal} prodotto={selectedProduct} />
    </>
  );
}
