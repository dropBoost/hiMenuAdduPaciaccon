'use server'

import { supabaseServer } from "@/lib/supabaseServerClient"

export async function updateMediaAction(formData) {
  const uuid = formData.get('uuid')

  if (!uuid) {
    throw new Error('UUID mancante')
  }

  const updatedData = {
    attivo: formData.get('attivo') === 'on' ? 'true' : 'false',
    categoria: formData.get('categoria'),
    onnivori: formData.get('onnivori'),
    classiche: formData.get('classiche') === 'on' ? 'true' : 'false',
    speciali: formData.get('speciali') === 'on' ? 'true' : 'false',
    scialoEdition: formData.get('scialoEdition') === 'on' ? 'true' : 'false',
    panini: formData.get('panini') === 'on' ? 'true' : 'false',
    bibite: formData.get('bibite')=== 'on' ? 'true' : 'false',
    tacos: formData.get('tacos') === 'on' ? 'true' : 'false',
    toast: formData.get('toast') === 'on' ? 'true' : 'false',
    piadina: formData.get('piadina') === 'on' ? 'true' : 'false',
    sfizi: formData.get('sfizi') === 'on' ? 'true' : 'false',
    hotdog: formData.get('hotdog') === 'on' ? 'true' : 'false',    
    bao: formData.get('bao') === 'on' ? 'true' : 'false',        
    senzaGlutine: formData.get('senzaGlutine') === 'on' ? 'true' : 'false',
    nome: formData.get('nome'),
    ingredienti: formData.get('ingredienti'),
    prezzo: formData.get('prezzo'),
    posizione: formData.get('posizione')
  }

  const { error } = await supabaseServer
    .from('menu')
    .update(updatedData)
    .eq('UUID', uuid)

if (error) {
  console.error('Errore aggiornamento dettagliato:', error);
  throw new Error('Errore durante l\'aggiornamento del media');
}
}
