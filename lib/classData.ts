export interface Student {
  id: string;
  name: string;
  role: string;
  category: 'Academic' | 'Leadership' | 'Sports' | 'Arts';
  bday: string;
  hometown: string;
  ambition: string;
  hobbies: string;
  honors: string;
  quote: string;
  image: string;
}

export const students: Student[] = [
  {
    id: "2026-001",
    name: "Aisyah Putri",
    role: "Academic Star",
    category: "Academic",
    bday: "14 April 2008",
    hometown: "Bandung, West Java",
    ambition: "Aspiring Aerospace Engineer at ITB",
    hobbies: "Astrophysics, Classical Piano, Origami",
    honors: "Gold Medalist National Physics Olympiad 2024, Class Valedictorian Candidate",
    quote: "Curiosity is the compass of the soul.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-002",
    name: "Rizky Pratama",
    role: "Class President",
    category: "Leadership",
    bday: "22 October 2007",
    hometown: "Jakarta Selatan",
    ambition: "Future Diplomat & International Relations Scholar",
    hobbies: "Public Speaking, Debate, Chess, Cycling",
    honors: "Best Delegate Model UN Jakarta, Student Council VP",
    quote: "Lead by listening. True strength is lifting others.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-003",
    name: "Nadia Salsabila",
    role: "Treasurer",
    category: "Leadership",
    bday: "05 January 2008",
    hometown: "Yogyakarta",
    ambition: "Actuarial Science & FinTech Innovator",
    hobbies: "Economics, Botanical Illustration, Baking",
    honors: "Led 100% Class Fund Transparency System, Bank Indonesia Scholar",
    quote: "Small steps, steady growth, clear ledger.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-004",
    name: "Dimas Adhitya",
    role: "Sports Captain",
    category: "Sports",
    bday: "19 August 2007",
    hometown: "Surabaya, East Java",
    ambition: "Sports Medicine & High Performance Coaching",
    hobbies: "Basketball, Track & Field, Sports Photography",
    honors: "Provincial High School Basketball MVP 2024, 100m Sprint Champion",
    quote: "Play hard, stay humble, run until the whistle.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-005",
    name: "Putri Maharani",
    role: "Arts Lead",
    category: "Arts",
    bday: "30 November 2007",
    hometown: "Solo, Central Java",
    ambition: "Fine Arts Conservator & Visual Director",
    hobbies: "Oil Painting, Batik Design, Set Scenography",
    honors: "Designed 2026 Year-End Monograph Cover, First Prize Inter-School Mural",
    quote: "Color makes the mundane braver.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-006",
    name: "Fajar Ramadhan",
    role: "Vice President",
    category: "Leadership",
    bday: "12 September 2007",
    hometown: "Semarang",
    ambition: "Industrial Engineering & Supply Chain Management",
    hobbies: "Logistics, Event Production, Podcasting",
    honors: "Director of Annual Class Study Tour 2024, Best Class Organizer",
    quote: "Teamwork makes the dream work smoothly.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-007",
    name: "Salsa Anindya",
    role: "Secretary",
    category: "Leadership",
    bday: "18 March 2008",
    hometown: "Malang, East Java",
    ambition: "Communications Strategist & Investigative Journalist",
    hobbies: "Journalism, Creative Nonfiction, Calligraphy",
    honors: "Editor-in-Chief School Gazette, National Essay Writing Silver Award",
    quote: "Write your own story with precision.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-008",
    name: "Bima Setiawan",
    role: "Science Olympiad",
    category: "Academic",
    bday: "03 February 2008",
    hometown: "Bogor, West Java",
    ambition: "Biochemical Researcher & Sustainable Agtech Pioneer",
    hobbies: "Competitive Chemistry, Molecular Modeling, Hydroponics",
    honors: "International Chemistry Olympiad Training Camp Invitee",
    quote: "Question everything; verify with code and data.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-009",
    name: "Zahra Amalia",
    role: "Debate Captain",
    category: "Academic",
    bday: "27 June 2007",
    hometown: "Medan, North Sumatra",
    ambition: "Human Rights Attorney & Legal Scholar",
    hobbies: "Parliamentary Debate, Philosophy, Cello",
    honors: "National Schools Debating Championship Best Speaker",
    quote: "Words build worlds when delivered with clarity.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-010",
    name: "Kevin Sanjaya",
    role: "Badminton Lead",
    category: "Sports",
    bday: "11 December 2007",
    hometown: "Cirebon, West Java",
    ambition: "National Badminton Athlete & Sports Technologist",
    hobbies: "Badminton, Swimming, Nutrition Science",
    honors: "Provincial Junior Badminton Gold Medalist, Fitness Council",
    quote: "Smash through limits and keep your feet light.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-011",
    name: "Maya Anggraini",
    role: "Music Director",
    category: "Arts",
    bday: "15 May 2008",
    hometown: "Denpasar, Bali",
    ambition: "Film Scorer & Audio Acoustic Engineer",
    hobbies: "Acoustic Guitar, Sound Engineering, Choral Composition",
    honors: "Arranged Class 2026 Graduation Anthem, National Youth Orchestra",
    quote: "Harmonies heal the heart when words fail.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: "2026-012",
    name: "Aditya Nugraha",
    role: "Tech & Robotics",
    category: "Academic",
    bday: "08 July 2007",
    hometown: "Bandung, West Java",
    ambition: "Artificial Intelligence Researcher & Autonomous Systems",
    hobbies: "Robotics, Python Programming, 3D Printing, Drone Design",
    honors: "First Place National Youth Robotics Competition",
    quote: "Code tomorrow today; build machines that empower humanity.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60"
  }
];

export const scheduleItems = [
  { time: "07:00 - 07:45", monday: "Upacara Bendera", tuesday: "Matematika Peminatan", wednesday: "Fisika Lanjut", thursday: "Kimia Analitik", friday: "Literasi & Agama" },
  { time: "07:45 - 09:15", monday: "Matematika Peminatan", tuesday: "Fisika Lanjut", wednesday: "Kimia Analitik", thursday: "Biologi Molekuler", friday: "Matematika Peminatan" },
  { time: "09:15 - 09:45", monday: "Istirahat", tuesday: "Istirahat", wednesday: "Istirahat", thursday: "Istirahat", friday: "Istirahat" },
  { time: "09:45 - 11:15", monday: "Kimia Analitik", tuesday: "Biologi Molekuler", wednesday: "Matematika Peminatan", thursday: "Fisika Lanjut", friday: "Bahasa Inggris" },
  { time: "11:15 - 12:00", monday: "Bahasa Indonesia", tuesday: "Sejarah Indonesia", wednesday: "Seni Budaya", thursday: "Pendidikan Kewarganegaraan", friday: "PJOK" },
  { time: "12:00 - 13:00", monday: "Istirahat & Sholat", tuesday: "Istirahat & Sholat", wednesday: "Istirahat & Sholat", thursday: "Istirahat & Sholat", friday: "Istirahat & Sholat" },
  { time: "13:00 - 14:30", monday: "Fisika Lanjut", tuesday: "Kimia Analitik", wednesday: "Biologi Molekuler", thursday: "Matematika Peminatan", friday: "Ekstrakurikuler" }
];

export const galleryItems = [
  { title: "Campus Heritage Courtyard", category: "Milestone", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80" },
  { title: "Science Laboratory Experiment", category: "Academic", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80" },
  { title: "Inter-School Basketball Finals", category: "Sports", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&auto=format&fit=crop&q=80" },
  { title: "Annual Art Exhibition 2025", category: "Arts", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop&q=80" },
  { title: "Class Study Tour to Yogyakarta", category: "Trip", image: "https://images.unsplash.com/photo-1508873696983-2df5c920ac1c?w=800&auto=format&fit=crop&q=80" },
  { title: "Graduation Cohort Portrait", category: "Milestone", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=80" }
];

export const teachers = [
  { name: "Dra. Hj. Siti Aminah, M.Pd.", role: "Wali Kelas XII MIPA 1", subject: "Matematika Peminatan", quote: "Disiplin adalah jembatan emas menuju impian tertinggi kalian.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60" },
  { name: "Drs. Budi Santoso, M.Si.", role: "Guru Pembimbing Sains", subject: "Fisika Lanjut", quote: "Jangan pernah berhenti mempertanyakan hukum alam.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60" }
];
