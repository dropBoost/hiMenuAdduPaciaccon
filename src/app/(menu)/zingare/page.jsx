import { supabaseServer } from '@/lib/supabaseServerClient'
import ListCard from '@/app/components/listcard'
import FoodCard from '@/app/components/foodCard'

export default async function PageTacos() {

  const { data: menu, error } = await supabaseServer.from('menu').select('*').eq('categoria', 'zingare')

  if (error) {
    return <div>Errore: {error.message}</div>
  }

  if (!menu || menu.length === 0) {
    return <div className='flex justify-center items-center h-full w-full text-brand-500'>Nessun elemento trovato nel menù.</div>
  }

  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 flex-wrap gap-5 p-10'>
      {menu.map(burger => (
          <FoodCard key={burger.id} img={burger.imgUrl} cate={burger.categoria} nome={burger.nome} ingredienti={burger.ingredienti} prezzo={burger.prezzo} attivo={burger.attivo} />
      ))}
    </div>
    </>
  )
}