'use client';

import { useState } from 'react';

const EMAIL_PATTERN = /^.+@.+\.[a-zA-Z]{2,63}$/;

type FieldErrors = { email?: string; name?: string };

type Lang = 'eu' | 'es';

const TEXT: Record<Lang, { email: string; name: string; subject: string; message: string; success: string }> = {
  eu: {
    email: 'HELBIDE ELEKTRONIKOA *',
    name: 'IZENA -  ABIZENA *',
    subject: 'GAIA',
    message: 'MEZUA',
    success: '{text.success}',
  },
  es: {
    email: 'CORREO ELECTRÓNICO *',
    name: 'NOMBRE-APELLIDOS *',
    subject: 'TEMA',
    message: 'MENSAJE',
    success: '¡Gracias! Mensaje enviado.',
  },
};

const INPUT_CLASSES =
  'h-[38px] w-full border-0 bg-[rgba(255,255,255,0.3)] p-[3px] pl-[5px] font-bignoodle text-[20px] leading-[1.4em] text-accent shadow-[0_1px_4px_0_rgba(0,0,0,0.6)] outline-none placeholder:text-black focus:border focus:border-black';
const TEXTAREA_CLASSES =
  'h-[124px] w-full resize-none border-0 bg-[rgba(255,255,255,0.3)] p-[3px] pl-[5px] font-bignoodle text-[20px] leading-[1.4em] text-accent shadow-[0_1px_4px_0_rgba(0,0,0,0.6)] outline-none placeholder:text-black focus:border focus:border-black';
const ERROR_INPUT_CLASSES = 'border border-[#C71212]';

export default function ContactForm({ lang = 'eu' }: { lang?: Lang }) {
  const text = TEXT[lang];
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FieldErrors = {};
    if (!email.trim()) {
      nextErrors.email = 'Campo obligatorio';
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = 'Correo electrónico no válido';
    }
    if (!name.trim()) {
      nextErrors.name = 'Campo obligatorio';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="hidden w-[781px] md:block">
        <div className="grid grid-cols-[391px_386px] grid-rows-[43px_43px_43px_50px] gap-x-[3px]">
          <div className="col-start-1 row-start-1">
            <input
              type="email"
              placeholder={text.email}
              aria-label={text.email}
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              maxLength={250}
              autoComplete="off"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={`${INPUT_CLASSES} ${errors.email ? ERROR_INPUT_CLASSES : ''}`}
            />
            {errors.email && (
              <p className="text-[13px] leading-[1.3em] text-error-text">{errors.email}</p>
            )}
          </div>
          <div className="col-start-1 row-start-2">
            <input
              type="text"
              placeholder={text.name}
              aria-label={text.name}
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
              maxLength={100}
              autoComplete="off"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={`${INPUT_CLASSES} ${errors.name ? ERROR_INPUT_CLASSES : ''}`}
            />
            {errors.name && <p className="text-[13px] leading-[1.3em] text-error-text">{errors.name}</p>}
          </div>
          <div className="col-start-1 row-start-3">
            <input
              type="text"
              placeholder={text.subject}
              aria-label={text.subject}
              maxLength={100}
              autoComplete="off"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className={INPUT_CLASSES}
            />
          </div>
          <textarea
            placeholder={text.message}
            aria-label={text.message}
            maxLength={lang === 'eu' ? 500 : undefined}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${TEXTAREA_CLASSES} col-start-2 row-start-1 row-span-3`}
          />
          <button
            type="submit"
            className="col-start-2 row-start-4 h-[42px] w-[52px] self-start justify-self-end border-0 bg-accent text-center font-bignoodle text-[23px] leading-[1.4em] text-white shadow-[0_1px_4px_0_rgba(0,0,0,0.6)]"
          >
            Bidali
          </button>
          <p
            aria-live="polite"
            className={`col-start-1 row-start-4 w-[686px] self-start text-[14px] leading-[1.15em] text-success ${
              submitted ? 'visible' : 'invisible'
            }`}
          >
            {text.success}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-5 md:hidden">
        <input
          type="email"
          placeholder={text.email}
          aria-label={text.email}
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          maxLength={250}
          autoComplete="off"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={`${INPUT_CLASSES} ${errors.email ? ERROR_INPUT_CLASSES : ''}`}
        />
        {errors.email && <p className="-mt-4 text-[13px] text-error-text">{errors.email}</p>}
        <input
          type="text"
          placeholder={text.name}
          aria-label={text.name}
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
          maxLength={100}
          autoComplete="off"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={`${INPUT_CLASSES} ${errors.name ? ERROR_INPUT_CLASSES : ''}`}
        />
        {errors.name && <p className="-mt-4 text-[13px] text-error-text">{errors.name}</p>}
        <input
          type="text"
          placeholder={text.subject}
          aria-label={text.subject}
          maxLength={100}
          autoComplete="off"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          className={INPUT_CLASSES}
        />
        <textarea
          placeholder={text.message}
          aria-label={text.message}
          maxLength={lang === 'eu' ? 500 : undefined}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={TEXTAREA_CLASSES}
        />
        <button
          type="submit"
          className="h-[42px] w-[52px] self-start border-0 bg-accent text-center font-bignoodle text-[23px] leading-[1.4em] text-white shadow-[0_1px_4px_0_rgba(0,0,0,0.6)]"
        >
          Bidali
        </button>
        <p
          aria-live="polite"
          className={`text-[14px] text-success ${submitted ? 'visible' : 'invisible'}`}
        >
          {text.success}
        </p>
      </div>
    </form>
  );
}
