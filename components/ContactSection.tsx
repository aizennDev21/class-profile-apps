'use client';
import { useState, useRef } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const MAX_MESSAGE = 300;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const cardRef = useRef<HTMLDivElement>(null);

  // Spotlight pada bingkai kartu: mengikuti kursor
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
    el.style.setProperty('--glow', '1');
  };
  const handleLeave = () => cardRef.current?.style.setProperty('--glow', '0');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setSubmitted(true);
      setName('');
      setMessage('');
    }
  };

  const inputClass =
    'w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10';

  return (
    <section
      id="contact"
      className={`${poppins.className} mx-auto max-w-[1200px] px-6 py-24 text-neutral-900`}
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Teks */}
        <div>
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Tinggalkan pesan untuk XII MIPA 1
          </h2>
          <p className="mt-5 max-w-md text-base font-light leading-relaxed text-neutral-600">
            Alumni, guru, atau pengunjung, siapa pun boleh menulis kesan atau
            catatan untuk angkatan kami di arsip digital ini.
          </p>
          <p className="mt-8 flex items-center gap-2 text-sm text-neutral-500">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            Xymips
          </p>
        </div>

        {/* Kartu form dengan bingkai spotlight */}
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="rounded-3xl p-px transition-[background] duration-300"
          style={{
            background:
              'radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(23,23,23,calc(0.9 * var(--glow, 0))), #e5e5e5 70%)',
          }}
        >
          <div className="rounded-[calc(1.5rem-1px)] bg-white p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center" role="status">
                <span className="material-symbols-outlined flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-[28px] text-white">
                  check
                </span>
                <h3 className="mt-5 text-xl font-semibold">Terima kasih!</h3>
                <p className="mt-2 max-w-xs text-sm font-light text-neutral-600">
                  Pesan Anda sudah kami terima dan akan menjadi bagian dari
                  kenangan kelas ini.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-100"
                >
                  Tulis pesan lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama lengkap Anda"
                    className={inputClass}
                  />
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="contact-message" className="text-sm font-medium">
                      Pesan atau kesan
                    </label>
                    <span className="text-xs text-neutral-400">
                      {message.length}/{MAX_MESSAGE}
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    maxLength={MAX_MESSAGE}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tulis pesan Anda di sini"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!name.trim() || !message.trim()}
                  className="w-full rounded-xl bg-neutral-900 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-300"
                >
                  Kirim pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}