import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import TelegramBot from 'node-telegram-bot-api';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, service, budget } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Необходимо заполнить все поля' }, { status: 400 });
    }

    let emailSent = false;
    let telegramSent = false;

    // Format message
    const formattedMessage = `
Новая заявка с сайта:
------------------
Имя: ${name}
Email: ${email}
Телефон: ${phone}
Услуга: ${service || 'Не указано'}
Бюджет: ${budget || 'Не указано'}
------------------
Сообщение:
${message}
    `.trim();

    // Email via Nodemailer (optional)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.MAIL_TO) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: false,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        });
        await transporter.sendMail({
          from: 'Casa Digital <no-reply@casadigital.ru>',
          to: process.env.MAIL_TO,
          subject: 'Новая заявка с сайта',
          text: formattedMessage
        });
        emailSent = true;
      } catch (error) {
        console.error('Email send error:', error);
      }
    }

    // Telegram notification (optional)
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });
        await bot.sendMessage(
          process.env.TELEGRAM_CHAT_ID,
          formattedMessage
        );
        telegramSent = true;
      } catch (error) {
        console.error('Telegram send error:', error);
      }
    }

    // If neither method worked, we should return an error
    if (!emailSent && !telegramSent) {
      console.error('No notification methods available');
      return NextResponse.json(
        { error: 'Не удалось отправить сообщение. Пожалуйста, свяжитесь с нами другим способом.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Form submission error:', e);
    return NextResponse.json(
      { error: 'Произошла ошибка при обработке запроса. Пожалуйста, попробуйте позже.' },
      { status: 500 }
    );
  }
}











