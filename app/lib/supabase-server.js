import { createClient } from "@supabase/supabase-js";

export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase belum terhubung. Isi NEXT_PUBLIC_SUPABASE_URL dan NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY/NEXT_PUBLIC_SUPABASE_ANON_KEY di file .env.local."
    );
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function saveMvpInteraction(content) {
  const trimmedContent = String(content || "").trim();

  if (!trimmedContent) {
    throw new Error("Content interaksi tidak boleh kosong.");
  }

  const supabase = getSupabaseClient();

  const { error } = await supabase.from("mvp_interactions").insert({
    content: trimmedContent,
  });

  if (error) {
    console.error("ERROR SUPABASE MVP_INTERACTIONS:", error);
    throw new Error(error.message);
  }
}
