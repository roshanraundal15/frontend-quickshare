// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vlirytzkqxgzrvazriyz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsaXJ5dHprcXhnenJ2YXpyaXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNTI3NjYsImV4cCI6MjA1OTYyODc2Nn0.Ks8z5x1jr76CWJVLH4E0L_PSvwxNzByai5NoZBe0bp8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);