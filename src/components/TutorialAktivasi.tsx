import { GuideStep } from './GuideStep'
import aktivasi1 from '../assets/3.1.jpg'
import aktivasi2 from '../assets/3.2.jpg'
import aktivasi3 from '../assets/3.3.jpg'
import aktivasi4 from '../assets/3.4.jpg'
import aktivasi5 from '../assets/3.5.jpg'
import aktivasi6 from '../assets/3.6.jpg'
import aktivasi7 from '../assets/3.7.jpg'

interface TutorialAktivasiProps {
  onBack: () => void
}

export function TutorialAktivasi({ onBack }: TutorialAktivasiProps) {
  const steps = [
    {
      stepNumber: 1,
      title: "Pilih Menu Aktivasi",
      description: "Pada menu utama pilih 'Aktivasi' pada menu pembelian, kemudian pilih 'Aktivasi Massal'.",
      imageSrc: aktivasi1,
      imageAlt: "Screenshot menu aktivasi"
    },
    {
      stepNumber: 2,
      title: "Pilih Operator",
      description: "Pilih aktivasi yang Anda inginkan: Aktivasi voucher massal XL, Axis, Indosat, Tri, atau Telkomsel.",
      imageSrc: aktivasi2,
      imageAlt: "Screenshot pilihan operator"
    },
    {
      stepNumber: 3,
      title: "Masukkan Kode Voucher",
      description: "Masukkan kode voucher awal dan kode voucher akhir, lalu tekan tombol operator untuk melanjutkan.",
      imageSrc: aktivasi3,
      imageAlt: "Screenshot input kode voucher"
    },
    {
      stepNumber: 4,
      title: "Pilih Voucher",
      description: "Pilih voucher yang diinginkan dari daftar yang tersedia sesuai dengan operator yang telah dipilih.",
      imageSrc: aktivasi4,
      imageAlt: "Screenshot pilihan voucher"
    },
    {
      stepNumber: 5,
      title: "Konfirmasi Pembayaran",
      description: "Jika sudah sesuai, tinggal tekan tombol 'Bayar' untuk melanjutkan ke proses pembayaran.",
      imageSrc: aktivasi5,
      imageAlt: "Screenshot konfirmasi pembayaran"
    },
    {
      stepNumber: 6,
      title: "Masukkan PIN",
      description: "Masukkan PIN transaksi Anda untuk mengkonfirmasi pembayaran dan melanjutkan proses aktivasi.",
      imageSrc: aktivasi6,
      imageAlt: "Screenshot input PIN"
    },
    {
      stepNumber: 7,
      title: "Cek History",
      description: "Kembali ke menu utama, pilih menu 'History' lalu tunggu hingga proses selesai. Jika tampilan sudah sukses, maka voucher siap digunakan.",
      imageSrc: aktivasi7,
      imageAlt: "Screenshot history transaksi"
    }
  ]

  const operators = [
    { name: 'XL', color: 'bg-purple-500', icon: '📱' },
    { name: 'Axis', color: 'bg-red-500', icon: '📶' },
    { name: 'Indosat', color: 'bg-yellow-500', icon: '📡' },
    { name: 'Tri', color: 'bg-pink-500', icon: '📞' },
    { name: 'Telkomsel', color: 'bg-red-600', icon: '📳' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center text-purple-100 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Menu
          </button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tutorial Aktivasi Voucher Massal
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Ikuti 7 langkah untuk mengaktivasi voucher berbagai operator
            </p>
          </div>
        </div>
      </div>

      {/* Operators Info */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Operator Yang Didukung
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {operators.map((operator) => (
              <div key={operator.name} className={`${operator.color} text-white px-4 py-2 rounded-lg flex items-center space-x-2`}>
                <span>{operator.icon}</span>
                <span className="font-medium">{operator.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tutorial Steps */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
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

        {/* Important Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Hal Penting yang Perlu Diperhatikan
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Pastikan kode voucher yang dimasukkan benar dan masih berlaku
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Saldo harus mencukupi untuk melakukan aktivasi voucher
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Proses aktivasi dapat memakan waktu beberapa menit
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Aktivasi Berhasil!
          </h3>
          <p className="text-gray-600 mb-6">
            Voucher Anda telah berhasil diaktivasi dan siap untuk digunakan.
          </p>
        </div>
      </main>
    </div>
  )
}