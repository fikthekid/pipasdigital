import pipasLogo from 'figma:asset/8cc18663f27e8f57ffc00afcf752b6d555b991b7.png'
import homeScreen from 'figma:asset/2dc9127ba9f3b95e4f76e09aa3545cf6f7be73f5.png'
import profileScreen from 'figma:asset/8b2c3a969d98c5b37639a3263affd0322cfcf5a0.png'

interface MainMenuProps {
  onSelectTutorial: (tutorialType: string) => void
}

export function MainMenu({ onSelectTutorial }: MainMenuProps) {
  const tutorials = [
    {
      id: 'registrasi',
      title: 'Tutorial Registrasi',
      description: 'Panduan lengkap untuk mendaftar akun baru di Pipas Digital',
      icon: '👤',
      color: 'bg-blue-500'
    },
    {
      id: 'topup',
      title: 'Top Up Saldo',
      description: 'Cara menambah saldo ke akun Pipas Digital Anda',
      icon: '💰',
      color: 'bg-green-500'
    },
    {
      id: 'aktivasi',
      title: 'Aktivasi Voucher Massal',
      description: 'Panduan aktivasi voucher untuk berbagai operator',
      icon: '🎫',
      color: 'bg-purple-500'
    },
    {
      id: 'pengaturan',
      title: 'Pengaturan Akun',
      description: 'Kelola dan atur akun Pipas Digital Anda',
      icon: '⚙️',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center mb-6">
            <img src={pipasLogo} alt="Pipas Digital Logo" className="w-12 h-12 mr-3" />
            <span className="text-2xl font-bold">Pipas Digital</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Panduan Tutorial Aplikasi
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Pilih tutorial yang ingin Anda pelajari
          </p>
        </div>
      </div>

      {/* App Screenshots */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="w-48 h-auto mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
              <img src={homeScreen} alt="Menu Utama Pipas Digital" className="w-full h-auto" />
            </div>
            <p className="text-sm text-gray-600">Menu Utama</p>
          </div>
          <div className="text-center">
            <div className="w-48 h-auto mx-auto mb-4 rounded-2xl overflow-hidden shadow-lg">
              <img src={profileScreen} alt="Profile Pipas Digital" className="w-full h-auto" />
            </div>
            <p className="text-sm text-gray-600">Profile</p>
          </div>
        </div>

        {/* Tutorial Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              onClick={() => onSelectTutorial(tutorial.id)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className={`${tutorial.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                  {tutorial.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tutorial.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tutorial.description}</p>
                  <div className="mt-4 flex items-center text-blue-600">
                    <span className="text-sm font-medium">Mulai Tutorial</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Butuh Bantuan?
          </h3>
          <p className="text-gray-600 mb-4">
            Tim customer service kami siap membantu Anda 24/7
          </p>
          <button 
            onClick={() => onSelectTutorial('customer-service')}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Hubungi Customer Service
          </button>
        </div>
      </div>
    </div>
  )
}