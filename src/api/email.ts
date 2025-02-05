import { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../utils/emailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { to, subject, content } = req.body;
            const result = await sendEmail({to, subject, content});
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

export async function postEmail(to: string, subject: string, content: string) {
  try {
    const emailResponse = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ to, subject, content })
    });
    
    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }
    
    return await emailResponse.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}