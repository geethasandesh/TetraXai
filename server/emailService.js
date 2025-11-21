import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Contact form email template
const createContactEmailTemplate = (data) => {
  const { name, email, subject, message } = data;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - TetraX AI</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .email-container {
                background-color: #ffffff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 2px solid #6366f1;
                padding-bottom: 20px;
            }
            .header h1 {
                color: #6366f1;
                margin: 0;
            }
            .content {
                margin-bottom: 25px;
            }
            .field {
                margin: 15px 0;
                padding: 15px;
                background-color: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #6366f1;
            }
            .field-label {
                font-weight: bold;
                color: #6366f1;
                margin-bottom: 5px;
            }
            .field-value {
                color: #333;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                color: #666;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
                <p style="color: #666; margin: 10px 0 0;">TetraX AI</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="field-label">Name:</div>
                    <div class="field-value">${name}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Email:</div>
                    <div class="field-value">${email}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Subject:</div>
                    <div class="field-value">${subject}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Message:</div>
                    <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                </div>
            </div>
            
            <div class="footer">
                <p>This email was sent from the TetraX AI contact form.</p>
                <p>Please respond directly to: <strong>${email}</strong></p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Careers form email template
const createCareersEmailTemplate = (data) => {
  const { firstName, lastName, email, phone, subject, message } = data;
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Careers Form Submission - TetraX AI</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .email-container {
                background-color: #ffffff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 2px solid #6366f1;
                padding-bottom: 20px;
            }
            .header h1 {
                color: #6366f1;
                margin: 0;
            }
            .content {
                margin-bottom: 25px;
            }
            .field {
                margin: 15px 0;
                padding: 15px;
                background-color: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #6366f1;
            }
            .field-label {
                font-weight: bold;
                color: #6366f1;
                margin-bottom: 5px;
            }
            .field-value {
                color: #333;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                color: #666;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>New Careers Form Submission</h1>
                <p style="color: #666; margin: 10px 0 0;">TetraX AI</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="field-label">Full Name:</div>
                    <div class="field-value">${firstName} ${lastName}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Email:</div>
                    <div class="field-value">${email}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Phone:</div>
                    <div class="field-value">${phone}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Subject:</div>
                    <div class="field-value">${subject}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Message:</div>
                    <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                </div>
            </div>
            
            <div class="footer">
                <p>This email was sent from the TetraX AI careers form.</p>
                <p>Please respond directly to: <strong>${email}</strong></p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Send contact form email
export const sendContactEmail = async (data) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@tetraxai.com',
      subject: `New Contact Form Submission: ${data.subject}`,
      html: createContactEmailTemplate(data),
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error: error.message };
  }
};

// Send careers form email
export const sendCareersEmail = async (data) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@tetraxai.com',
      subject: `New Careers Form Submission: ${data.subject}`,
      html: createCareersEmailTemplate(data),
      replyTo: data.email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Careers email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending careers email:', error);
    return { success: false, error: error.message };
  }
};

