export default function ProductPopup ({ isOpen, onClose, prodotto }) {
  if (!isOpen || !prodotto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl">×</button>
        <h2 className="text-xl font-bold mb-2 uppercase">{prodotto.nome}</h2>
        <p className="text-sm text-gray-700 mb-2">{prodotto.ingredienti}</p>
        <p className="text-sm text-brandDark-400 font-semibold">Prezzo: {prodotto.prezzo}€</p>
        <p className="text-sm text-gray-500 mt-2">Categoria: {prodotto.cate}</p>
      </div>
    </div>
  );
}
