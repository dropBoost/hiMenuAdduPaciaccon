// lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_ANON_KEY

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey)