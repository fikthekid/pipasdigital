import { GuideStep } from './GuideStep'

interface SubTutorialGantiPasswordProps {
  onBack: () => void
}

export function SubTutorialGantiPassword({ onBack }: SubTutorialGantiPasswordProps) {
  const steps = [
    {
      stepNumber: 1,
      title: "Buka Profile",
      description: "Buka halaman profile Anda dengan menekan ikon profil di menu bawah aplikasi.",
      imageSrc: "https://images.unsplash.com/photo-1694878981815-d643689e51fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzU4NzIyNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Screenshot menu profile"
    },
    {
      stepNumber: 2,
      title: "Pilih Pengaturan Akun",
      description: "Pada halaman profile, pilih menu 'Pengaturan Akun' untuk mengakses pengaturan keamanan.",
      imageSrc: "https://images.unsplash.com/photo-1513594964634-381b22a9e135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbG9naW4lMjBzY3JlZW58ZW58MXx8fHwxNzU4Nzk0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Screenshot pengaturan akun"
    },
    {
      stepNumber: 3,
      title: "Pilih Ganti Password",
      description: "Di halaman pengaturan akun, pilih opsi 'Ganti Password' untuk mengubah kata sandi Anda.",
      imageSrc: "https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc1ODcxMTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Screenshot menu ganti password"
    },
    {
      stepNumber: 4,
      title: "Masukkan Password Lama",
      description: "Masukkan password lama Anda untuk verifikasi identitas sebelum mengubah ke password baru.",
      imageSrc: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGFwcCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg3OTQ1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Screenshot input password lama"
    },
    {
      stepNumber: 5,
      title: "Masukkan Password Baru",
      description: "Masukkan password baru Anda. Pastikan password kuat dengan kombinasi huruf, angka, dan simbol.",
      imageSrc: "https://images.unsplash.com/photo-1694878981815-d643689e51fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzU4NzIyNzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Screenshot input password baru"
    },
    {
      stepNumber: 6,
      title: "Konfirmasi Perubahan",
      description: "Klik tombol 'Ganti' untuk mengkonfirmasi perubahan password. Password baru Anda akan langsung aktif.",
      imageSrc: "https://images.unsplash.com/photo-1513594964634-381b22a9e135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbG9naW4lMjBzY3JlZW58ZW58MXx8fHwxNzU4Nzk0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Screenshot konfirmasi ganti password"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <button 
            onClick={onBack}
            className="flex items-center text-green-100 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Pengaturan
          </button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tutorial Ganti Kata Sandi
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Ikuti 6 langkah mudah untuk mengubah kata sandi Anda
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Steps */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <GuideStep
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
              imageAlt={step.imageAlt}
            />
          ))}
        </div>

        {/* Password Security Tips */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Tips Password Aman
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gunakan minimal 8 karakter dengan kombinasi huruf besar, kecil, angka, dan simbol
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Jangan gunakan informasi pribadi seperti nama, tanggal lahir, atau nomor telepon
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ubah password secara berkala untuk menjaga keamanan akun
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contoh password yang kuat: Pipas#digital2025
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Password Berhasil Diubah!
          </h3>
          <p className="text-gray-600">
            Kata sandi Anda telah berhasil diperbarui. Gunakan password baru untuk login selanjutnya.
          </p>
        </div>
      </main>
    </div>
  )
}