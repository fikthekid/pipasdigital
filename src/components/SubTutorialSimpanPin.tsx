import { GuideStep } from './GuideStep'

interface SubTutorialSimpanPinProps {
  onBack: () => void
}

export function SubTutorialSimpanPin({ onBack }: SubTutorialSimpanPinProps) {
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
      title: "Pilih Simpan PIN",
      description: "Pada halaman profile, temukan dan pilih menu 'Simpan PIN' untuk melanjutkan proses.",
      imageSrc: "https://images.unsplash.com/photo-1513594964634-381b22a9e135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbG9naW4lMjBzY3JlZW58ZW58MXx8fHwxNzU4Nzk0NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Screenshot menu simpan PIN"
    },
    {
      stepNumber: 3,
      title: "Masukkan PIN Baru",
      description: "Masukkan PIN yang Anda inginkan. Pastikan PIN mudah diingat namun sulit ditebak orang lain.",
      imageSrc: "https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc1ODcxMTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Screenshot input PIN baru"
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
            Kembali ke Pengaturan
          </button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tutorial Simpan PIN
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ikuti 3 langkah mudah untuk menyimpan PIN Anda
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

        {/* Security Tips */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Tips Keamanan PIN
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gunakan kombinasi angka yang tidak mudah ditebak
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Jangan menggunakan tanggal lahir atau nomor yang mudah diketahui
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Jangan bagikan PIN Anda kepada siapapun
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
            PIN Tersimpan!
          </h3>
          <p className="text-gray-600">
            PIN Anda telah berhasil disimpan dan dapat digunakan untuk transaksi.
          </p>
        </div>
      </main>
    </div>
  )
}