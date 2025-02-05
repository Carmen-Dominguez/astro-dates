import emailjs from '@emailjs/browser';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

interface EmailDetails {
  to: string;
  subject: string;
  content: string;
}

export async function sendEmail({ to, subject, content }: EmailDetails) {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        to_email: to,
        subject: subject,
        message: content,
      }
    );

    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
