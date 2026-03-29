import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
    console.log("BREVO_API_KEY present:", !!BREVO_API_KEY);
    
    if (!BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not configured");
    }

    const { email } = await req.json();
    console.log("Sending welcome email to:", email);
    
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const htmlContent = `
<div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 500px;">
  <h2 style="color: #6f42c1;">Welcome to the Movement, Warrior! 🌍</h2>
  <p>Thank you for joining the <strong>Beyond Sweat Foundation</strong>. You are now officially part of our mission to restore bodily dignity and achieve clinical recognition for hyperhidrosis in Africa.</p>
  <p><strong>What's coming to your inbox:</strong></p>
  <ul>
    <li>Updates on our pioneering <em>Spotlight Africa</em> dataset.</li>
    <li>Advocacy milestones (including our Change.org petition progress).</li>
    <li>Warrior stories and tips for managing triggers in our warming world.</li>
  </ul>
  <div style="margin: 20px 0; text-align: center;">
    <a href="https://beyondsweat.org" style="background: #6f42c1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold;">Explore Our Research</a>
  </div>
  <p style="font-size: 12px; color: #888;">Sent with grace from Beyond Sweat Foundation | Akure, Nigeria</p>
</div>`;

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "Beyond Sweat Foundation", email: "info@beyondsweat.org" },
        to: [{ email }],
        subject: "Welcome to the Movement, Warrior! 🌍",
        htmlContent,
      }),
    });

    const data = await res.json();
    console.log("Brevo API response status:", res.status);
    console.log("Brevo API response:", JSON.stringify(data));
    
    if (!res.ok) {
      throw new Error(`Brevo API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
