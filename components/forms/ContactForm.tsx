"use client";

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const schema = z.object({
  name: z.string().min(2, 'Пожалуйста, введите ваше имя'),
  email: z.string().email('Пожалуйста, введите корректный email'),
  subject: z.string().min(2, 'Пожалуйста, укажите тему сообщения'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setStatus('idle');
    try {
      const tele = fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'contact' }),
      });

      const crm = fetch('/api/crm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'contact' }),
      }).catch((e) => console.warn('CRM error', e));

      const teleRes = await tele;
      crm.then(() => undefined).catch(() => undefined);
      
      if (!teleRes.ok) throw new Error('Failed to send message');
      
      setStatus('ok');
      reset();
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Имя
            </label>
            <div className="mt-1">
              <input
                type="text"
                {...register('name')}
                className="block w-full rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus:border-paleTeal focus:ring-1 focus:ring-paleTeal/30"
                placeholder="Иван Петров"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                {...register('email')}
                className="block w-full rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus:border-paleTeal focus:ring-1 focus:ring-paleTeal/30"
                placeholder="ivan@example.ru"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Тема
            </label>
            <div className="mt-1">
              <input
                type="text"
                {...register('subject')}
                className="block w-full rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus:border-paleTeal focus:ring-1 focus:ring-paleTeal/30"
                placeholder="Сотрудничество"
              />
              {errors.subject && (
                <p className="mt-2 text-sm text-red-600">{errors.subject.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Сообщение
            </label>
            <div className="mt-1">
              <textarea
                {...register('message')}
                rows={4}
                className="block w-full rounded-lg border border-slate-300 px-4 py-3 shadow-sm focus:border-paleTeal focus:ring-1 focus:ring-paleTeal/30"
                placeholder="Опишите ваш запрос..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input
              id="consent-contact"
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-paleTeal focus:ring-paleTeal/30"
              required
            />
            <label htmlFor="consent-contact" className="text-sm text-slate-600 leading-5">
              Я согласен с <a href="/privacy" className="text-slate-800 underline hover:text-paleTeal transition-colors">Политикой конфиденциальности</a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full justify-center rounded-lg bg-paleTeal px-8 py-3 text-slate-900 font-medium shadow-sm hover:bg-paleTeal/90 disabled:opacity-60 transition-colors"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
            </button>
          </div>

          {status === 'ok' && (
            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-sm text-green-800">
                Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="rounded-lg bg-red-50 p-4">
              <p className="text-sm text-red-800">
                Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или напишите нам напрямую.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}