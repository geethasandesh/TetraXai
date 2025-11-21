import express from 'express';
import cors from 'cors';
import { sendContactEmail, sendCareersEmail } from './emailService.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TetraX AI Email API is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
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
      res.status(200).json({
        success: true,
        message: 'Email sent successfully',
      });
    } else {
      res.status(500).json({
        success: false,
        error: result.error || 'Failed to send email',
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

// Careers form endpoint
app.post('/api/careers', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
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

    const result = await sendCareersEmail({
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    });

    if (result.success) {
      res.status(200).json({
        success: true,
        message: 'Email sent successfully',
      });
    } else {
      res.status(500).json({
        success: false,
        error: result.error || 'Failed to send email',
      });
    }
  } catch (error) {
    console.error('Careers form error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 TetraX AI Email Server running on port ${PORT}`);
  console.log(`📧 Email service ready to send emails`);
});

