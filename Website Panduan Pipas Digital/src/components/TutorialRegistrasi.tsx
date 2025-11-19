import { GuideStep } from './GuideStep'
import regis1 from '../assets/1.1.jpg'
import regis2 from '../assets/1.2.jpg'
import regis3 from '../assets/1.3.jpg'
import regis4 from '../assets/1.4.jpg'
import regis5 from '../assets/1.5.jpg'

interface TutorialRegistrasiProps {
  onBack: () => void
}

export function TutorialRegistrasi({ onBack }: TutorialRegistrasiProps) {
  const steps = [
    {
      stepNumber: 1,
      title: "Buka Aplikasi Pipas Digital",
      description: "Buka aplikasi Pipas Digital kemudian klik tombol 'Daftar' untuk memulai proses registrasi.",
      imageSrc: regis1,
      imageAlt: "Screenshot halaman awal aplikasi"
    },
    {
      stepNumber: 2,
      title: "Masukkan Nomor HP",
      description: "Masukkan nomor HP yang aktif, kemudian klik tombol 'Berikutnya' untuk melanjutkan proses registrasi.",
      imageSrc: regis2,
      imageAlt: "Screenshot input nomor HP"
    },
    {
      stepNumber: 3,
      title: "Masukkan Kode OTP",
      description: "Masukkan kode OTP yang telah kami kirimkan melalui aplikasi WhatsApp ke nomor HP yang Anda daftarkan.",
      imageSrc: regis3,
      imageAlt: "Screenshot verifikasi OTP"
    },
    {
      stepNumber: 4,
      title: "Isi Formulir Data Diri",
      description: "Lengkapi formulir yang sudah tertera dengan data diri yang valid dan sesuai dengan dokumen resmi Anda.",
      imageSrc: regis4,
      imageAlt: "Screenshot formulir data diri"
    },
    {
      stepNumber: 5,
      title: "Buat Kata Sandi dan PIN",
      description: "Buat kata sandi dan PIN transaksi untuk keamanan akun Anda. Contoh kata sandi: Pipas#digital2025",
      imageSrc: regis5,
      imageAlt: "Screenshot pembuatan kata sandi dan PIN"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center text-blue-100 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Menu
          </button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tutorial Registrasi
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ikuti 5 langkah mudah untuk mendaftar akun Pipas Digital
            </p>
          </div>
        </div>
      </div>

      {/* Tutorial Steps */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Success Message */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Registrasi Berhasil!
          </h3>
          <p className="text-gray-600 mb-6">
            Selamat! Akun Pipas Digital Anda telah berhasil dibuat. Anda sekarang dapat menggunakan semua fitur aplikasi.
          </p>
        </div>
      </main>
    </div>
  )
}