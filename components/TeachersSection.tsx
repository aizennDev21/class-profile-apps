'use client';
import { useRef } from 'react';
import { Poppins } from 'next/font/google';
import { teachers } from '@/lib/classData';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function TeachersSection() {
  // Ambil wali kelas; jika tidak ada yang berperan "wali", pakai data pertama.
  const teacher = teachers.find((t) => /wali/i.test(t.role)) ?? teachers[0];

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rotY = (x / r.width - 0.5) * 14; // maks ±7 derajat
    const rotX = (0.5 - y / r.height) * 14;
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
    el.style.setProperty('--glare', '1');
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--glare', '0');
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  if (!teacher) return null;

  return (
    <section
      id="teachers"
      className={`${poppins.className} bg-neutral-50 py-24 text-neutral-900`}
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Teks */}
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Wali Kelas
          </h2>
          <p className="mt-4 max-w-md text-base font-light text-neutral-600">
            Terima kasih untuk bimbingan, kesabaran, dan waktu yang telah
            diberikan selama tiga tahun bersama kami.
          </p>

          <blockquote className="mt-10 border-l-2 border-neutral-900 pl-6 text-2xl font-light leading-snug tracking-tight text-neutral-800 md:text-3xl">
            &ldquo;{teacher.quote}&rdquo;
          </blockquote>

          <div className="mt-8">
            <p className="text-lg font-semibold">{teacher.name}</p>
            <p className="text-sm text-neutral-500">
              {teacher.role} &middot; {teacher.subject}
            </p>
          </div>
        </div>

        {/* Kartu profil dengan tilt + kilau */}
        <div
          className="order-1 mx-auto w-full max-w-sm lg:order-2"
          style={{ perspective: '1200px' }}
        >
          <div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-neutral-200 shadow-2xl shadow-neutral-900/15 transition-transform duration-200 ease-out motion-reduce:transition-none"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Kilau mengikuti kursor */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: 'var(--glare, 0)',
                background:
                  'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.35), transparent 55%)',
                mixBlendMode: 'overlay',
              }}
            />

            {/* Panel nama */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-white/15 p-5 text-white backdrop-blur-md">
              <p className="text-sm text-white/80">{teacher.role}</p>
              <h3 className="mt-0.5 text-xl font-semibold">{teacher.name}</h3>
              <p className="mt-0.5 text-sm text-white/70">{teacher.subject}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}