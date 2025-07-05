import { supabaseServer } from '@/lib/supabaseServerClient'
import ListCard from '@/app/components/listcard'
import FoodCard from '@/app/components/foodCard'

export default async function CategoryPage({ params }) {

  const categoria = params.categoria;
  console.log(typeof categoria)
  const { data: menu, error } = await supabaseServer.from('menu').select('*').eq('categoria', `${categoria}`)

  if (error) {
    return <div>Errore: {error.message}</div>
  }

  if (!menu || menu.length === 0) {
    return <div className='flex justify-center items-center h-full w-full text-brand-500'>Nessun elemento trovato nel menu: {categoria}.</div>
  }

  return (
    <>
    <div className="border-b mx-10 border-brand-400 p-5 text-md font-extrabold text-center text-brandDark-400 uppercase">
      <span className='border border-brand-400 px-5 py-1 rounded-2xl'>{categoria}</span>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 flex-wrap gap-5 p-10'>
      {menu.map(burger => (
          <FoodCard key={burger.id} img={burger.imgUrl} cate={burger.categoria} nome={burger.nome} ingredienti={burger.ingredienti} prezzo={burger.prezzo} attivo={burger.attivo} />
      ))}
    </div>
    </>
  )
}