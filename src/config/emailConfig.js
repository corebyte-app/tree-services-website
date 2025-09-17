// EmailJS Configuration
// To use this email functionality, you need to:
// 1. Sign up for a free account at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  // Your EmailJS public key (found in EmailJS dashboard)
  publicKey: "I7-PgQhTAdaaSEJl9",

  // Your EmailJS service ID (found in EmailJS dashboard)
  serviceId: "service_byqg7s5",

  // Your EmailJS template ID (found in EmailJS dashboard)
  templateId: "template_0lex5v1",

  // The email address where quote requests should be sent
  ownerEmail: "buildrightservices.nz@gmail.com",
};

// Example EmailJS template variables:
// {{to_email}} - Recipient email (owner's email)
// {{from_name}} - Customer's full name
// {{from_email}} - Customer's email
// {{phone}} - Customer's phone number
// {{address}} - Customer's address
// {{service_type}} - Type of service requested
// {{urgency}} - Timeline/urgency
// {{description}} - Project description
// {{reply_to}} - Customer's email for replies
