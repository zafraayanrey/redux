import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ffqfiohvsogchiafursz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcWZpb2h2c29nY2hpYWZ1cnN6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTg1Njg0OCwiZXhwIjoyMDQ1NDMyODQ4fQ.tGAOfCX868IsjfeU2-WbysTsvJXy1A38LMJA0JrKnuQ"
);

export default supabase;
