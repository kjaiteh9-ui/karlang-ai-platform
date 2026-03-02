import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client with service role (for API routes only)
export function createServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

// Types
export type Agent = {
  id: string;
  name: string;
  description: string;
  status: "active" | "offline" | "busy";
  model: string;
  channels: string[];
  requests: number;
  tools: number;
  owner_id: string;
  created_at: string;
  updated_at: string;
};

export type Message = {
  id: string;
  agent_id: string;
  role: "user" | "assistant";
  content: string;
  channel: string;
  created_at: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
  role: "superadmin" | "client" | "viewer" | "bot";
  status: "active" | "suspended";
  created_at: string;
};
