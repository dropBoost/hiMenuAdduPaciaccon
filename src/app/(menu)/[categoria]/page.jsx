import { supabaseServer } from '@/lib/supabaseServerClient'
import FoodGrid from '@/app/components/FoodGrid';

export default async function CategoryPage({ params }) {

  const categoria = params?.categoria;
  const { data: menu, error } = await supabaseServer.from('menu').select('*').eq('categoria', categoria);

  if (error) return <div>Errore: {error.message}</div>;
  if (!menu || menu.length === 0) return <div className='flex justify-center items-center h-full text-brand-400 uppercase font-extrabold text-sm'>Nessun elemento trovato per {categoria}</div>;

  return (
    <FoodGrid categoria={categoria} menu={menu} />
  );
}
