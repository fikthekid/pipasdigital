import { GuideStep } from './GuideStep'
// Ensure the image file exists or update the path accordingly
import img1 from '../assets/2.1.jpg'
import img2 from '../assets/2.2.jpg'
import img3 from '../assets/2.3.jpg'
import img4 from '../assets/2.4.jpg'
import img5 from '../assets/2.5.jpg'

interface TutorialTopUpProps {
  onBack: () => void
}

export function TutorialTopUp({ onBack }: TutorialTopUpProps) {
  const steps = [
    {
      stepNumber: 1,
      title: "Pilih Menu Top Up",
      description: "Pada tampilan menu utama, klik tombol 'Top Up' untuk memulai proses pengisian saldo.",
      imageSrc: img1,
      imageAlt: "Screenshot menu utama top up"
    },
    {
      stepNumber: 2,
      title: "Masukkan Nominal Top Up",
      description: "Masukkan nominal top up yang diinginkan sesuai dengan kebutuhan Anda.",
      imageSrc: img2,
      imageAlt: "Screenshot input nominal"
    },
    {
      stepNumber: 3,
      title: "Pilih Layanan Tiket Deposit",
      description: "Pilih layanan tiket deposit sebagai metode pembayaran untuk top up saldo Anda.",
      imageSrc: img3,
      imageAlt: "Screenshot pilihan metode pembayaran"
    },
    {
      stepNumber: 4,
      title: "Transfer ke Rekening",
      description: "Transfer sesuai nominal yang Anda pilih ke salah satu rekening berikut:",
      imageSrc: img4,
      imageAlt: "Screenshot informasi rekening"
    },
    {
      stepNumber: 5,
      title: "Selesai",
      description: "Tunggu selama 5-15 menit untuk proses verifikasi pembayaran. Saldo akan otomatis bertambah setelah pembayaran dikonfirmasi.",
      imageSrc: img5,
      imageAlt: "Screenshot konfirmasi top up"
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
            Kembali ke Menu
          </button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tutorial Top Up Saldo
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Ikuti 5 langkah mudah untuk mengisi saldo Pipas Digital
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

        {/* Bank Account Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Informasi Rekening Transfer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">BCA</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Bank BCA</p>
                  <p className="text-sm text-gray-600">1481409590</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                <strong>A/N:</strong> BENI SETIAWAN
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">BRI</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Bank BRI</p>
                  <p className="text-sm text-gray-600">CV.PASSER INTAN PUSAKA SARI</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <p className="text-sm text-yellow-800">
              <strong>Catatan:</strong> Tunggu selama 5-15 menit untuk proses verifikasi pembayaran.
            </p>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Top Up Berhasil!
          </h3>
          <p className="text-gray-600 mb-6">
            Saldo Anda akan bertambah setelah pembayaran dikonfirmasi oleh sistem kami.
          </p>
        </div>
      </main>
    </div>
  )
}