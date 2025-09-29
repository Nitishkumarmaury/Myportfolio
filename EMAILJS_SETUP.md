# EmailJS Setup Guide for Contact Form

## Overview
Your contact form has been integrated with EmailJS, which allows sending emails directly from your React application without a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key**

### 5. Configure Environment Variables
Update your `.env.local` file with your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id  
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Restart Development Server
After updating the environment variables, restart your development server:
```bash
npm start
```

## Features Implemented

✅ **Real Email Integration**: Uses EmailJS to send actual emails
✅ **Fallback Mode**: Works in demo mode if EmailJS isn't configured
✅ **Error Handling**: Proper error messages and logging
✅ **Form Validation**: All required fields validated
✅ **Loading States**: Shows sending progress
✅ **Success Feedback**: Toast notifications for user feedback
✅ **Automatic Reset**: Clears form after successful submission

## Template Parameters

The following data is sent to your email template:
- `from_name`: Sender's name
- `from_email`: Sender's email
- `subject`: Message subject
- `message`: Message content
- `to_name`: Your name (Nitish Kumar)

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Standard support

## Testing

1. Make sure your environment variables are set
2. Restart your development server
3. Fill out the contact form
4. Check your email inbox for the message

## Alternative Services

If you prefer other services, here are alternatives:

### Formspree
1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a form and get the endpoint URL
3. Update the form action to POST to Formspree endpoint

### Netlify Forms
If deploying to Netlify:
1. Add `netlify` attribute to your form
2. Add a hidden input with `name="form-name"`
3. Netlify automatically handles form submissions

### Custom Backend
For a custom solution, you can create:
1. Node.js + Express backend
2. PHP script
3. Python Flask/Django endpoint

## Security Notes

- Environment variables starting with `REACT_APP_` are exposed to the client
- EmailJS public key is safe to expose (it's designed for client-side use)
- Never expose private keys or sensitive credentials in React environment variables

## Support

If you need help with setup:
1. Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. EmailJS has good community support and tutorials
3. The form will work in demo mode even without configuration