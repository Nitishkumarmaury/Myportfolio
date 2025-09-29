# How to Get EmailJS Credentials - Step by Step Guide

## Step 1: Create EmailJS Account

1. **Go to EmailJS Website**
   - Visit: https://www.emailjs.com/
   - Click "Sign Up" button

2. **Register Your Account**
   - Enter your email address
   - Create a password
   - Click "Sign Up"
   - Check your email and verify your account

## Step 2: Add Email Service

1. **Access Email Services**
   - Login to your EmailJS dashboard
   - Click on "Email Services" in the left sidebar
   - Click "Add New Service" button

2. **Choose Email Provider**
   - **Gmail** (Recommended - most common)
   - **Outlook/Hotmail**
   - **Yahoo Mail**
   - **Custom SMTP** (for other providers)

3. **For Gmail Setup:**
   - Click "Gmail" option
   - Click "Connect Account"
   - Sign in to your Gmail account
   - Allow EmailJS permissions
   - Your service will be created automatically

4. **Copy Service ID**
   - After setup, you'll see your service listed
   - **Copy the Service ID** (looks like: `service_xxxxxxx`)
   - Save this for later

## Step 3: Create Email Template

1. **Go to Email Templates**
   - Click "Email Templates" in the left sidebar
   - Click "Create New Template"

2. **Configure Template**
   - **Template Name**: "Portfolio Contact Form"
   - **Subject**: `New Contact Form Message: {{subject}}`
   
3. **Email Content** (copy this exactly):
```
Hello Nitish,

You received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
Sent from: Portfolio Contact Form
```

4. **Template Settings**
   - **To Email**: Enter your email address (where you want to receive messages)
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`

5. **Save Template**
   - Click "Save"
   - **Copy the Template ID** (looks like: `template_xxxxxxx`)
   - Save this for later

## Step 4: Get Public Key

1. **Go to Account Settings**
   - Click your profile icon (top right)
   - Select "Account"
   - Go to "General" tab

2. **Copy Public Key**
   - Find "Public Key" section
   - **Copy the Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)
   - Save this for later

## Step 5: Update Your Portfolio

1. **Open your `.env.local` file** in your project
2. **Replace the placeholder values** with your actual credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

**Example with real values:**
```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123def
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789ghi
REACT_APP_EMAILJS_PUBLIC_KEY=ABCDEFGHIJabcdefghij
```

## Step 6: Test Your Setup

1. **Restart your development server:**
   ```bash
   npm start
   ```

2. **Test the contact form:**
   - Go to your contact page
   - Fill out the form with test data
   - Submit the form
   - Check your email inbox for the message

## Quick Reference Card

| Credential | Where to Find | Looks Like |
|------------|---------------|------------|
| **Service ID** | Email Services → Your Service | `service_xxxxxxx` |
| **Template ID** | Email Templates → Your Template | `template_xxxxxxx` |
| **Public Key** | Account → General → Public Key | `xxxxxxxxxxxxxxxxxx` |

## Troubleshooting

### "Service not found" error:
- Double-check your Service ID
- Make sure the service is active in EmailJS dashboard

### "Template not found" error:
- Verify your Template ID
- Ensure the template is saved and published

### "Invalid public key" error:
- Copy the public key exactly (no extra spaces)
- Make sure you're using the public key, not private key

### Emails not arriving:
- Check your spam/junk folder
- Verify the "To Email" in your template
- Test with a different email address

## Free Tier Limits

- **200 emails per month**
- **2 email services**
- **2 email templates**
- No credit card required

## Security Notes

✅ **Safe to use**: Public key is designed for client-side use
✅ **No sensitive data**: Environment variables with `REACT_APP_` are safe
✅ **Rate limited**: EmailJS has built-in rate limiting
✅ **Spam protection**: Built-in spam detection

## Need Help?

1. **EmailJS Documentation**: https://www.emailjs.com/docs/
2. **Video Tutorials**: Search "EmailJS React tutorial" on YouTube
3. **Community Support**: EmailJS has active community forums

## Alternative: Quick Gmail Setup

If you want the fastest setup with Gmail:

1. **Use Gmail** as your email service
2. **Allow "Less secure app access"** in Gmail settings (if needed)
3. **Use 2-factor authentication** + App Password (recommended)

Your contact form will be fully functional once you complete these steps!