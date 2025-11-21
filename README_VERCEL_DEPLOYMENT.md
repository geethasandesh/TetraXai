# Vercel Deployment Guide

## Environment Variables Setup

You only need **2 environment variables** in Vercel:

1. `EMAIL_USER=groupartihcus@gmail.com`
2. `EMAIL_PASS=wqgopmkslbkeuins`

## Setting Up Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - **Name:** `EMAIL_USER`
   - **Value:** `groupartihcus@gmail.com`
   - **Environment:** Production, Preview, Development (select all)
   
   - **Name:** `EMAIL_PASS`
   - **Value:** `wqgopmkslbkeuins`
   - **Environment:** Production, Preview, Development (select all)

4. Click **Save**

## Local Development

For local development, create a `.env` file in the root directory:

```env
EMAIL_USER=groupartihcus@gmail.com
EMAIL_PASS=wqgopmkslbkeuins
```

Then run:
```bash
npm install
npm run dev
```

The API endpoints will be available at:
- `/api/contact` - Contact form
- `/api/careers` - Careers form

## Deployment

1. Push your code to GitHub
2. Import the project in Vercel
3. Add the environment variables (see above)
4. Deploy!

Vercel will automatically:
- Detect the `/api` folder as serverless functions
- Deploy your React app
- Make the API endpoints available at `/api/*`

## Testing

After deployment, test the forms:
- Contact form: `https://your-domain.vercel.app/contact`
- Careers form: `https://your-domain.vercel.app/careers`

Emails will be sent to: `info@tetraxai.com`

## Notes

- The serverless functions are in the `/api` folder
- Vercel automatically handles routing for `/api/*` endpoints
- No need for a separate backend server
- Environment variables are automatically injected into serverless functions

