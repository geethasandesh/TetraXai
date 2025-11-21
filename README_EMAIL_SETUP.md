# Email Setup Instructions

## Prerequisites

1. Make sure you have Node.js installed (v18 or higher)
2. Install all dependencies: `npm install`

## Environment Variables

Create a `.env` file in the root directory with the following content:

```env
# Email Configuration
EMAIL_USER=groupartihcus@gmail.com
EMAIL_PASS=wqgopmkslbkeuins

# Server Configuration
PORT=3001

# API URL (for frontend)
VITE_API_URL=http://localhost:3001/api
```

**Important:** The `.env` file is already added to `.gitignore` to keep your credentials secure.

## Running the Application

### Start the frontend + API together (Recommended)

```bash
npm run dev
```

This single command now starts both the Vite dev server and the email API server (port `3001`) concurrently.

### Run servers separately (optional)

If you prefer to run them in separate terminals:

1. **Backend API**
   ```bash
   npm run server
   ```
2. **Frontend**
   ```bash
   npm run dev:client
   ```

## Email Configuration

- **From Email:** `groupartihcus@gmail.com`
- **To Email:** `info@tetraxai.com`
- **Service:** Gmail

## API Endpoints

- **Health Check:** `GET http://localhost:3001/api/health`
- **Contact Form:** `POST http://localhost:3001/api/contact`
- **Careers Form:** `POST http://localhost:3001/api/careers`

## Testing

1. Fill out the Contact form at `/contact`
2. Fill out the Careers form at `/careers`
3. Submit the forms
4. Check `info@tetraxai.com` for the email notifications

## Troubleshooting

### Email Not Sending

1. **Check Gmail App Password:**
   - Make sure you're using an App Password, not your regular Gmail password
   - Generate a new App Password if needed: https://myaccount.google.com/apppasswords

2. **Check Server Logs:**
   - Look for error messages in the terminal where the server is running

3. **Check Network:**
   - Make sure the frontend can reach the backend API
   - Verify `VITE_API_URL` in `.env` matches your backend URL

4. **Check Email Credentials:**
   - Verify `EMAIL_USER` and `EMAIL_PASS` in `.env` are correct

### CORS Errors

If you see CORS errors, make sure:
- The backend server is running
- The `VITE_API_URL` in `.env` matches the backend URL
- The backend CORS middleware is properly configured

## Production Deployment

For production, you'll need to:
1. Update `VITE_API_URL` to your production API URL
2. Set environment variables on your hosting platform
3. Deploy the backend server separately or use serverless functions
4. Ensure your email credentials are securely stored

