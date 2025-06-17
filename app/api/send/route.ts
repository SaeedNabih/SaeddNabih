// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// أنشئ نسخة من Resend باستخدام مفتاح API من ملف .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // استخراج البيانات من الطلب القادم من الواجهة الأمامية
    const body = await request.json();
    const { name, email, company, message, projectType } = body;

    // التأكد من وجود البيانات الأساسية
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // إرسال الإيميل باستخدام Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // هام: هذا العنوان يعمل فقط للتطوير.
      to: ['saidtolan111@gmail.com'], // <-- هذا هو بريدك الإلكتروني الذي ستصلك عليه الرسائل
      subject: 'New Contact Form Submission',
      replyTo: email, // عند الضغط على "رد"، سيتم الرد على الشخص الذي أرسل الرسالة
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h1 style="color: #333;">New Contact Form Submission</h1>
          <p>You have received a new message from your portfolio contact form.</p>
          <hr>
          <h2>Details:</h2>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Company:</strong> ${company || 'Not provided'}</li>
            <li><strong>Project Type:</strong> ${projectType || 'Not selected'}</li>
          </ul>
          <hr>
          <h2>Message:</h2>
          <p style="white-space: pre-wrap; background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `
    });

    // إذا حدث خطأ أثناء الإرسال من Resend
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // إرسال رد ناجح إلى الواجهة الأمامية
    return NextResponse.json({ message: 'Email sent successfully!', data });

  } catch (error) {
    // التعامل مع أي أخطاء غير متوقعة في الخادم
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Something went wrong on the server.' }, { status: 500 });
  }
}