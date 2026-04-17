import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const ALLOWED_ORIGINS = [
  "https://www.implantesdentalesenmalaga.com",
  "https://implantesdentalesenmalaga.com",
  "https://implantesdentalesmalaga.lovable.app",
  "https://id-preview--819e4137-544f-413e-b0d8-db018f977268.lovable.app",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") ?? "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
    "Vary": "Origin",
  };
}

// Secret used to sign challenge tokens. Falls back to service role key if not set.
const SIGNING_SECRET =
  Deno.env.get("CAPTCHA_SIGNING_SECRET") ||
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ||
  "fallback-dev-secret-change-me";

const TOKEN_TTL_MS = 10 * 60 * 1000; // 10 minutes

async function hmacSha256(key: string, data: string): Promise<string> {
  const enc = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", cryptoKey, enc.encode(data));
  return btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function createChallengeToken(a: number, b: number, expiresAt: number): Promise<string> {
  const payload = `${a}.${b}.${expiresAt}`;
  const sig = await hmacSha256(SIGNING_SECRET, payload);
  return `${payload}.${sig}`;
}

export async function verifyChallengeToken(token: string, answer: number): Promise<boolean> {
  if (typeof token !== "string") return false;
  const parts = token.split(".");
  if (parts.length !== 4) return false;
  const [aStr, bStr, expStr, sig] = parts;
  const a = parseInt(aStr, 10);
  const b = parseInt(bStr, 10);
  const exp = parseInt(expStr, 10);
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(exp)) return false;
  if (Date.now() > exp) return false;
  const expectedSig = await hmacSha256(SIGNING_SECRET, `${a}.${b}.${exp}`);
  if (expectedSig !== sig) return false;
  return answer === a + b;
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    const expiresAt = Date.now() + TOKEN_TTL_MS;
    const token = await createChallengeToken(a, b, expiresAt);

    return new Response(
      JSON.stringify({ a, b, token, expires_at: expiresAt }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  } catch (error) {
    console.error("Error generating captcha challenge:", error);
    return new Response(
      JSON.stringify({ error: "No se pudo generar el captcha" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
};

serve(handler);
