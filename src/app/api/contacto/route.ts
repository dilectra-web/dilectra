import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { nombre, telefono, correo, tipo, presupuesto, mensaje } =
    await request.json();

  if (!nombre || !correo || !mensaje) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Dilectra Web <contacto@dilectra.com>",
    to: "dilectraa@gmail.com",
    replyTo: correo,
    subject: `Nuevo mensaje de contacto — ${nombre}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #fff; padding: 32px; border-radius: 8px;">
        <h2 style="color: #53996f; margin-top: 0;">Nuevo mensaje de contacto</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #b7b7b7; width: 140px;">Nombre</td><td style="padding: 8px 0;">${nombre}</td></tr>
          <tr><td style="padding: 8px 0; color: #b7b7b7;">Correo</td><td style="padding: 8px 0;"><a href="mailto:${correo}" style="color: #53996f;">${correo}</a></td></tr>
          ${telefono ? `<tr><td style="padding: 8px 0; color: #b7b7b7;">Teléfono</td><td style="padding: 8px 0;">${telefono}</td></tr>` : ""}
          ${tipo ? `<tr><td style="padding: 8px 0; color: #b7b7b7;">Tipo de proyecto</td><td style="padding: 8px 0;">${tipo}</td></tr>` : ""}
          ${presupuesto ? `<tr><td style="padding: 8px 0; color: #b7b7b7;">Presupuesto</td><td style="padding: 8px 0;">${presupuesto}</td></tr>` : ""}
        </table>
        <hr style="border: none; border-top: 1px solid #333; margin: 24px 0;" />
        <p style="color: #b7b7b7; margin: 0 0 8px;">Mensaje:</p>
        <p style="white-space: pre-wrap; margin: 0;">${mensaje}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
