import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sqwsymgfrxpgtdtdrdry.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxd3N5bWdmcnhwZ3RkdGRyZHJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3ODQ5MjcsImV4cCI6MjA2NzM2MDkyN30.jYLVIhRvVmxqCVPsgIRIDC-rmmF8fGXia7xQhXb-oNM";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);