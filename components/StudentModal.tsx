'use client';
import { Student } from '@/lib/classData';

interface StudentModalProps {
  student: Student | null;
  onClose: () => void;
}

export default function StudentModal({ student, onClose }: StudentModalProps) {
  if (!student) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100 flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-gray-100">
          <img
            src={student.image}
            alt={student.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <span className="absolute bottom-4 left-4 bg-[#E8DAB9] text-[#0f1b33] text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow">
            {student.role}
          </span>
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-2">
              <span>ID: {student.id}</span>
              <span className="text-[#755a23] font-semibold">{student.category}</span>
            </div>

            <h2 className="text-2xl font-bold text-[#0f1b33] mb-1">{student.name}</h2>
            <p className="text-sm font-medium text-[#755a23] mb-4">{student.ambition}</p>

            <blockquote className="italic text-gray-600 text-sm border-l-2 border-[#755a23] pl-4 py-1 mb-6">
              &ldquo;{student.quote}&rdquo;
            </blockquote>

            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-xs font-mono text-gray-400 uppercase">Tanggal Lahir</span>
                <span className="font-medium text-gray-800">{student.bday}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-gray-400 uppercase">Asal Kota</span>
                <span className="font-medium text-gray-800">{student.hometown}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-gray-400 uppercase">Hobi & Minat</span>
                <span className="font-medium text-gray-800">{student.hobbies}</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-gray-400 uppercase">Prestasi & Penghargaan</span>
                <span className="font-medium text-gray-800">{student.honors}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#0f1b33] text-white text-sm font-semibold hover:bg-[#755a23] transition-colors"
            >
              Tutup Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
