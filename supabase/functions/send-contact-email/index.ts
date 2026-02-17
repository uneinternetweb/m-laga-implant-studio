import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormRequest {
  name: string;
  phone: string;
  email: string;
  treatment?: string;
  message?: string;
}

// Simple in-memory rate limiter (per instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// HTML escape to prevent injection in emails
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Validation helpers
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_TREATMENTS = [
  "implante-unitario", "implantes-multiples", "all-on-4",
  "regeneracion", "protesis-dentales", "consulta", ""
];

function validateInput(data: ContactFormRequest): string | null {
  if (!data.name || typeof data.name !== "string" || data.name.trim().length === 0 || data.name.length > 100) {
    return "Nombre inválido";
  }
  if (!data.phone || typeof data.phone !== "string" || data.phone.trim().length === 0 || data.phone.length > 20) {
    return "Teléfono inválido";
  }
  if (!data.email || typeof data.email !== "string" || !EMAIL_REGEX.test(data.email) || data.email.length > 255) {
    return "Email inválido";
  }
  if (data.treatment && !ALLOWED_TREATMENTS.includes(data.treatment)) {
    return "Tratamiento no válido";
  }
  if (data.message && (typeof data.message !== "string" || data.message.length > 1000)) {
    return "Mensaje demasiado largo";
  }
  return null;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
               req.headers.get("cf-connecting-ip") || "unknown";
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Demasiadas solicitudes. Inténtalo más tarde." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const data: ContactFormRequest = await req.json();

    // Server-side validation
    const validationError = validateInput(data);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, phone, email, treatment, message } = data;

    console.log("Sending contact form email for:", escapeHtml(name));

    const treatmentNames: Record<string, string> = {
      "implante-unitario": "Implante dental unitario",
      "implantes-multiples": "Varios implantes",
      "all-on-4": "All-on-4 / All-on-6",
      "regeneracion": "Regeneración ósea",
      "protesis-dentales": "Prótesis dentales",
      "consulta": "Primera consulta informativa",
    };

    const treatmentDisplay = treatment ? treatmentNames[treatment] || escapeHtml(treatment) : "No especificado";

    // Escape all user inputs before embedding in HTML
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeMessage = message ? escapeHtml(message).replace(/\n/g, '<br>') : '';

    const emailResponse = await resend.emails.send({
      from: "Clínica Boca a Boca <onboarding@resend.dev>",
      to: ["eduardo.fatm@gmail.com"],
      subject: `Nueva solicitud de cita - ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a365d; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">
            Nueva Solicitud de Cita
          </h1>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background-color: #f8f9fa; font-weight: bold; width: 150px;">Nombre:</td>
              <td style="padding: 10px; background-color: #f8f9fa;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px;"><a href="tel:${safePhone}" style="color: #1a365d;">${safePhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8f9fa; font-weight: bold;">Email:</td>
              <td style="padding: 10px; background-color: #f8f9fa;"><a href="mailto:${safeEmail}" style="color: #1a365d;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Tratamiento:</td>
              <td style="padding: 10px;">${treatmentDisplay}</td>
            </tr>
            ${safeMessage ? `
            <tr>
              <td style="padding: 10px; background-color: #f8f9fa; font-weight: bold; vertical-align: top;">Mensaje:</td>
              <td style="padding: 10px; background-color: #f8f9fa;">${safeMessage}</td>
            </tr>
            ` : ''}
          </table>
          
          <p style="margin-top: 30px; padding: 15px; background-color: #e8f4f8; border-left: 4px solid #c9a227; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de la web de Clínica Boca a Boca.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
