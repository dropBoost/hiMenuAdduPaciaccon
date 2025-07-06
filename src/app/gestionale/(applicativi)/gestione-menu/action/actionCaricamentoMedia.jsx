'use server'

import { supabaseServer } from '@/lib/supabaseServerClient';
import { v4 as uuidv4 } from 'uuid';

export const postMediaAction = async (formData) => {
  const attivo = formData.get('attivo') === 'on';
  const categoria = formData.get('categoria');
  const nome = formData.get('nome');
  const ingredienti = formData.get('ingredienti');
  const prezzo = formData.get('prezzo');
  const posizione = formData.get('posizione');
  const abitudiniAlimentari = formData.get('abitudiniAlimentari');
  const senzaGlutine = formData.get('senzaGlutine') === 'on';
  const special = formData.get('special') === 'on';
  const file = formData.get('file');
  const dataUpload = new Date();

  let fileUrl = '';

  if (
    file &&
    typeof file === 'object' &&
    file.name &&
    file.size > 0
  ) {
    const parts = file.name.split('.');
    const fileExt = parts.length > 1 ? parts.pop() : null;

    if (fileExt) {
      const uniqueName = `${uuidv4()}.${fileExt}`;

      const { error: uploadError } = await supabaseServer.storage
        .from('immagini-menu')
        .upload(`uploads/${uniqueName}`, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: file.type,
        });

      if (uploadError) {
        console.error('❌ Errore durante l\'upload del file:', uploadError);
        throw new Error(`Errore upload file: ${uploadError.message}`);
      }

      const { data: publicUrlData } = supabaseServer.storage
        .from('immagini-menu')
        .getPublicUrl(`uploads/${uniqueName}`);

      fileUrl = publicUrlData.publicUrl;
    }
  }

  const { data, error } = await supabaseServer
    .from('menu')
    .insert([
      {
        attivo,
        categoria,
        nome,
        ingredienti,
        prezzo,
        posizione,
        abitudiniAlimentari,
        senzaGlutine,
        special,
        imgUrl: fileUrl,
        dataUpload,
      },
    ]);

  if (error) {
    console.error('Errore Supabase INSERT:', error);
    throw new Error(`Errore inserimento dati: ${error.message}`);
  }

  return { success: true, data };
};
