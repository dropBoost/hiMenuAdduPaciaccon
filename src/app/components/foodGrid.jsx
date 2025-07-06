'use client';

import { useState } from 'react';
import FoodCard from './foodCard';
import ProductPopup from './popupProduct';

export default function FoodGrid({ categoria, menu }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [query, setQuery] = useState('');

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredMenu = menu.filter((item) =>
    item.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="border-b mx-10 border-brand-400 p-5 text-md font-extrabold text-center text-brandDark-400 uppercase">
        <span className="border border-brand-400 px-5 py-1 rounded-2xl">{categoria}</span>
      </div>

      {/* 🔍 Barra di ricerca */}
      <div className="border-b mx-10 border-brand-400 p-5 text-sm text-center text-brandDark-400 uppercase">
        <input
          type="text"
          placeholder="Cerca un prodotto..."
          value={query}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
        />
      </div>

      {/* 🔎 Lista filtrata */}
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 flex-wrap gap-5 p-10">
        {filteredMenu.map((item) => {
          console.log("IMG:", item.imgUrl);
          return (
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
          );
        })}
      </div>

      <ProductPopup isOpen={isOpen} onClose={closeModal} prodotto={selectedProduct} />
    </>
  );
}
