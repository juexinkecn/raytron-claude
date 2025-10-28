import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone?: string;
  country: string;
  productInterest: string;
  specifications?: string;
  quantity?: string;
  message?: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const data: ContactFormData = req.body;

    if (!data.companyName || !data.contactPerson || !data.email || !data.country || !data.productInterest) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    if (!isValidEmail(data.email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid email address' 
      });
    }

    const sanitizedData = {
      companyName: sanitizeInput(data.companyName),
      contactPerson: sanitizeInput(data.contactPerson),
      email: sanitizeInput(data.email),
      phone: data.phone ? sanitizeInput(data.phone) : '',
      country: sanitizeInput(data.country),
      productInterest: sanitizeInput(data.productInterest),
      specifications: data.specifications ? sanitizeInput(data.specifications) : '',
      quantity: data.quantity ? sanitizeInput(data.quantity) : '',
      message: data.message ? sanitizeInput(data.message) : '',
    };

    // TODO: 集成您的邮件服务或CRM
    console.log('Contact form submission:', sanitizedData);

    return res.status(200).json({ 
      success: true, 
      message: 'Your inquiry has been sent successfully.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
}