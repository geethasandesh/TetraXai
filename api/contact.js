import { sendContactEmail } from '../server/emailService.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
      });
    }

    const result = await sendContactEmail({ name, email, subject, message });

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Email sent successfully',
      });
    } else {
      return res.status(500).json({
        success: false,
        error: result.error || 'Failed to send email',
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
}

