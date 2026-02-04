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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, treatment, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!name || !phone || !email) {
      console.error("Missing required fields:", { name: !!name, phone: !!phone, email: !!email });
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Sending contact form email for:", name, email);

    // Map treatment values to readable names
    const treatmentNames: Record<string, string> = {
      "implante-unitario": "Implante dental unitario",
      "implantes-multiples": "Varios implantes",
      "all-on-4": "All-on-4 / All-on-6",
      "regeneracion": "Regeneración ósea",
      "protesis-dentales": "Prótesis dentales",
      "consulta": "Primera consulta informativa",
    };

    const treatmentDisplay = treatment ? treatmentNames[treatment] || treatment : "No especificado";

    const emailResponse = await resend.emails.send({
      from: "Clínica Boca a Boca <onboarding@resend.dev>",
      to: ["eduardo.fatm@gmail.com"],
      subject: `Nueva solicitud de cita - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a365d; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">
            Nueva Solicitud de Cita
          </h1>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background-color: #f8f9fa; font-weight: bold; width: 150px;">Nombre:</td>
              <td style="padding: 10px; background-color: #f8f9fa;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px;"><a href="tel:${phone}" style="color: #1a365d;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f8f9fa; font-weight: bold;">Email:</td>
              <td style="padding: 10px; background-color: #f8f9fa;"><a href="mailto:${email}" style="color: #1a365d;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Tratamiento:</td>
              <td style="padding: 10px;">${treatmentDisplay}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px; background-color: #f8f9fa; font-weight: bold; vertical-align: top;">Mensaje:</td>
              <td style="padding: 10px; background-color: #f8f9fa;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
            ` : ''}
          </table>
          
          <p style="margin-top: 30px; padding: 15px; background-color: #e8f4f8; border-left: 4px solid #c9a227; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de la web de Clínica Boca a Boca.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
