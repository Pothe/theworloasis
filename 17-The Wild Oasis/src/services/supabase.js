
import { createClient } from '@supabase/supabase-js'// supabase library
export const supabaseUrl = 'https://pkkudhwvfssawcdjzwpe.supabase.co'// supabase url endpoint
const supabaseKey ="sb_publishable_lEbrZvVNq3oyJt3hh1twpw_snU1fVPf"// api supabase
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase