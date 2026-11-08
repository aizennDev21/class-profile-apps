'use client';

import { useState } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const tiles = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=1200&auto=format&fit=crop',
];

const stats = [
  { value: '32', label: 'Total siswa' },
  { value: '15+', label: 'Medali olimpiade' },
  { value: '100%', label: 'Kelulusan PTN' },
  { value: '3', label: 'Tahun bersama' },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="home"
      className={`${poppins.className} relative w-full overflow-hidden bg-white pt-32 pb-16 text-neutral-900 md:pt-40 md:pb-24`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Judul besar */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h1 className="max-w-4xl text-[clamp(3rem,10vw,8rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            Profil Kelas
            <br />
            <span className="text-neutral-400">&amp; Arsip Kenangan</span>
          </h1>

          <div className="flex max-w-xs flex-col gap-5 md:pb-3">
            <p className="text-base font-light leading-relaxed text-neutral-600">
              Eksplorasi interaktif perjalanan, profil siswa, dan dokumentasi kelas xymips.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#students"
                className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Jelajahi Profil Siswa
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Dokumentasi
              </a>
            </div>
          </div>
        </div>

        {/* Tile gambar yang bisa mengembang */}
        <div className="mt-14 flex h-[560px] flex-col gap-3 md:mt-20 md:h-[460px] md:flex-row">
          {tiles.map((src, i) => {
            const isActive = active === i;
            return (
              <button
                key={src}
                type="button"
                aria-label={`Foto kelas ${i + 1}`}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`relative min-h-0 min-w-0 overflow-hidden rounded-3xl transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${
                  isActive ? 'flex-[5]' : 'flex-1'
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 motion-reduce:transition-none ${
                    isActive ? 'scale-100 brightness-100' : 'scale-110 brightness-75'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Statistik */}
        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-neutral-200 pt-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="text-4xl font-semibold tracking-tight md:text-5xl">{s.value}</dd>
              <dt className="mt-1 text-sm text-neutral-500">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}