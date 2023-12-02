import { createClient } from "@supabase/supabase-js";
const SECRET_SUPABASE_URL = "https://wxvtnddwjkxjaddrfgif.supabase.co";
const SECRET_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4dnRuZGR3amt4amFkZHJmZ2lmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTE4NDAwNywiZXhwIjoyMDE2NzYwMDA3fQ.B9Lu5HBR_aPN5i0VQiCdYavrhrkWjaLXxv_Cj34RS1E";
const supabase = createClient(SECRET_SUPABASE_URL, SECRET_SUPABASE_KEY);
async function load() {
  const { data } = await supabase.from("blog").select();
  return {
    props: {
      data
    },
    blog: data ?? []
  };
}
export {
  load
};
