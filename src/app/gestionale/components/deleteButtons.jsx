'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash  } from '@fortawesome/free-solid-svg-icons';
import { deleteMediaAction } from "../(applicativi)/gestione-menu/action/action";

const iconaCestino = <FontAwesomeIcon icon={faTrash}/>

export default function DeleteButton({ uuid }) {
  const handleDelete = async () => {
    const confirm = window.confirm('Sei sicuro di voler eliminare questo media?');
    if (!confirm) return;

    const res = await deleteMediaAction(uuid);
    if (res.success) {
      alert('Media eliminato con successo!');
      // trigger eventuale refresh, router.refresh() o altro
    } else {
      alert('Errore: ' + res.error);
    }
  };

  return (
    <button onClick={handleDelete} className="lg:text-[0.7rem] text-[0.5rem] text-white text-xs rounded-full p-1">
      {iconaCestino}
    </button>
  );
}