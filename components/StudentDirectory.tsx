'use client';
import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { students } from '@/lib/classData';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

type Student = (typeof students)[number];

function Details({ student }: { student: Student }) {
  return (
    <>
      <dl className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-neutral-500">Asal</dt>
          <dd className="mt-0.5 font-medium">{student.hometown}</dd>
        </div>
        <div>
          <dt className="text-neutral-500">Cita-cita</dt>
          <dd className="mt-0.5 font-medium">{student.ambition}</dd>
        </div>
      </dl>
      <p className="mt-4 border-t border-neutral-200 pt-4 text-sm font-light italic text-neutral-600">
        &ldquo;{student.quote}&rdquo;
      </p>
    </>
  );
}

export default function StudentDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeId, setActiveId] = useState<string | number | null>(null);

  const query = searchQuery.trim().toLowerCase();
  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(query) ||
      s.ambition.toLowerCase().includes(query) ||
      s.role.toLowerCase().includes(query) ||
      s.hometown.toLowerCase().includes(query)
  );

  // Jika siswa aktif tidak ada di hasil pencarian, pakai hasil pertama.
  const active = filtered.find((s) => s.id === activeId) ?? filtered[0];

  return (
    <section
      id="students"
      className={`${poppins.className} mx-auto max-w-[1200px] px-6 py-24 text-neutral-900`}
    >
      <style>{`
        @keyframes sd-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
        .sd-fade { animation: sd-fade .45s cubic-bezier(.22,1,.36,1); }
        @media (prefers-reduced-motion: reduce) { .sd-fade { animation: none; } }
      `}</style>

      {/* Judul */}
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="mb-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Profil Kelas
        </h2>
        <p className="max-w-xl text-base font-light text-neutral-600">
          Setiap siswa XII MIPA 1 punya kisah, ambisi, dan prestasinya sendiri.
          Pilih sebuah nama untuk melihat profilnya.
        </p>
      </div>

      {/* Pencarian */}
      <div className="mx-auto mb-12 w-full max-w-md">
        <div className="relative">
          <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-neutral-400">
            search
          </span>
          <input
            type="search"
            placeholder="Cari nama, asal, atau cita-cita"
            aria-label="Cari siswa"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-neutral-200 bg-white py-3 pl-12 pr-5 text-sm outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10"
          />
        </div>
        <p className="mt-3 text-center text-xs text-neutral-500" aria-live="polite">
          {query
            ? `${filtered.length} dari ${students.length} siswa`
            : `${students.length} siswa`}
        </p>
      </div>

      {filtered.length > 0 && active ? (
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Daftar nama */}
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200 lg:max-h-[680px] lg:overflow-y-auto lg:pr-2">
            {filtered.map((student) => {
              const isActive = active.id === student.id;
              return (
                <li key={student.id}>
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onMouseEnter={() => setActiveId(student.id)}
                    onFocus={() => setActiveId(student.id)}
                    onClick={() => setActiveId(student.id)}
                    className="group flex w-full items-center justify-between gap-4 py-5 text-left outline-none focus-visible:bg-neutral-50"
                  >
                    <span
                      className={`text-xl font-medium tracking-tight transition-colors duration-300 md:text-3xl ${
                        isActive
                          ? 'text-neutral-900'
                          : 'text-neutral-400 group-hover:text-neutral-700'
                      }`}
                    >
                      {student.name}
                    </span>
                    <span className="flex shrink-0 items-center gap-2 text-sm text-neutral-500">
                      <span className="hidden sm:inline">{student.role}</span>
                      <span
                        className={`material-symbols-outlined text-[20px] transition-all duration-300 ${
                          isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                        }`}
                      >
                        arrow_forward
                      </span>
                    </span>
                  </button>

                  {/* Mobile: detail terbuka di bawah nama */}
                  {isActive && (
                    <div className="sd-fade flex gap-4 pb-6 lg:hidden">
                      <img
                        src={student.image}
                        alt={student.name}
                        loading="lazy"
                        className="aspect-[4/5] w-28 shrink-0 rounded-2xl object-cover sm:w-36"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="mb-3 text-sm text-neutral-500 sm:hidden">{student.role}</p>
                        <Details student={student} />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop: panel pratinjau */}
          <aside className="hidden lg:block">
            <div key={active.id} className="sd-fade sticky top-28">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">
                <img
                  src={active.image}
                  alt={active.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="text-sm text-neutral-500">{active.role}</p>
                <h3 className="mb-5 mt-1 text-3xl font-semibold tracking-tight">
                  {active.name}
                </h3>
                <Details student={active} />
              </div>
            </div>
          </aside>
        </div>
      ) : (
        <div className="py-16 text-center text-neutral-500">
          <p>Tidak ada siswa yang cocok dengan &ldquo;{searchQuery}&rdquo;.</p>
          <button
            onClick={() => setSearchQuery('')}
            className="mt-4 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            Hapus pencarian
          </button>
        </div>
      )}
    </section>
  );
}