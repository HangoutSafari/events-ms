import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: 'variables.env' });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function getEventsData() {
  const { data, error } = await supabase.from('events').select();
  if (error) {
    console.error('query error', error);
    throw error;
  }
  return data;
}

export async function getEventIdData(EventId){
  const { data, error } = await supabase
    .from('events')
    .select()
    .eq('id', EventId) 
    .single(); 

  if (error) {
    console.error('query error', error);
    throw error;
  }

  return data;
}