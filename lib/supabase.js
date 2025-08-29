import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase environment variables are not set')
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)