// ============================================================
// DATA PORTOFOLIO - Edit file ini untuk mengubah konten website
// ============================================================

export const profile = {
  name: "Muhammad Naufal Aqila",
  title: "Civil Engineer",
  tagline: "Membangun Masa Depan dengan Fondasi yang Kuat",
  avatar: "/profile.jpg", // Foto profil
  bio: [
    "Saya adalah seorang Civil Engineer yang berdedikasi dalam merancang dan membangun infrastruktur yang berkelanjutan. Dengan latar belakang pendidikan di bidang Teknik Sipil, saya memiliki passion dalam menciptakan solusi struktural yang inovatif dan efisien.",
    "Pengalaman saya mencakup berbagai proyek konstruksi, mulai dari perencanaan hingga pelaksanaan. Saya percaya bahwa setiap struktur yang dibangun harus memenuhi standar keamanan tertinggi sekaligus memberikan nilai estetika dan fungsional.",
  ],
  email: "naufal@example.com",
  phone: "+62 812-xxxx-xxxx",
  location: "Indonesia",
  social: {
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    github: "https://github.com/username",
  },
};

export interface Training {
  title: string;
  organizer: string;
  year: string;
  description: string;
  category: string;
}

export const trainings: Training[] = [
  {
    title: "Pelatihan Perencanaan Struktur Beton",
    organizer: "Nama Penyelenggara",
    year: "2024",
    description:
      "Deskripsi pelatihan akan diisi di sini. Jelaskan apa yang dipelajari dan kompetensi yang didapat.",
    category: "Struktural",
  },
  {
    title: "Workshop Analisis Geoteknik",
    organizer: "Nama Penyelenggara",
    year: "2023",
    description:
      "Deskripsi pelatihan akan diisi di sini. Jelaskan apa yang dipelajari dan kompetensi yang didapat.",
    category: "Geoteknik",
  },
  {
    title: "Sertifikasi Manajemen Proyek Konstruksi",
    organizer: "Nama Penyelenggara",
    year: "2023",
    description:
      "Deskripsi pelatihan akan diisi di sini. Jelaskan apa yang dipelajari dan kompetensi yang didapat.",
    category: "Manajemen",
  },
];

export interface Experience {
  position: string;
  company: string;
  period: string;
  type: "Kerja" | "Internship";
  description: string[];
}

export const experiences: Experience[] = [
  {
    position: "Nama Posisi",
    company: "Nama Perusahaan",
    period: "Jan 2024 - Sekarang",
    type: "Kerja",
    description: [
      "Deskripsi tanggung jawab dan pencapaian akan diisi di sini.",
      "Tambahkan poin-poin penting tentang peran Anda.",
    ],
  },
  {
    position: "Nama Posisi Intern",
    company: "Nama Perusahaan",
    period: "Jun 2023 - Des 2023",
    type: "Internship",
    description: [
      "Deskripsi tanggung jawab dan pencapaian akan diisi di sini.",
      "Tambahkan poin-poin penting tentang peran Anda.",
    ],
  },
  {
    position: "Nama Posisi Intern",
    company: "Nama Perusahaan",
    period: "Jan 2023 - Mei 2023",
    type: "Internship",
    description: [
      "Deskripsi tanggung jawab dan pencapaian akan diisi di sini.",
      "Tambahkan poin-poin penting tentang peran Anda.",
    ],
  },
];

export interface Organization {
  name: string;
  position: string;
  period: string;
  description: string;
}

export const organizations: Organization[] = [
  {
    name: "Nama Organisasi",
    position: "Nama Jabatan",
    period: "2023 - 2024",
    description:
      "Deskripsi peran dan kontribusi Anda di organisasi ini akan diisi di sini.",
  },
  {
    name: "Nama Organisasi",
    position: "Nama Jabatan",
    period: "2022 - 2023",
    description:
      "Deskripsi peran dan kontribusi Anda di organisasi ini akan diisi di sini.",
  },
  {
    name: "Nama Organisasi",
    position: "Nama Jabatan",
    period: "2021 - 2022",
    description:
      "Deskripsi peran dan kontribusi Anda di organisasi ini akan diisi di sini.",
  },
];

