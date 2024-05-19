
import { Resend } from 'resend';

const resend = new Resend("re_BPkBRUt6_BePKCkHib3nSqHr4bcMypdW7");

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'maksimov.roman0604@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}