interface TutorialPengaturanProps {
  onBack: () => void
  onSelectSubTutorial: (subType: string) => void
}

export function TutorialPengaturan({ onBack, onSelectSubTutorial }: TutorialPengaturanProps) {
  const subTutorials = [
    {
      id: 'simpan-pin',
      title: 'Simpan PIN',
      description: 'Panduan untuk menyimpan PIN agar lebih mudah diakses',
      icon: '🔐',
      color: 'bg-blue-500'
    },
    {
      id: 'ganti-password',
      title: 'Ganti Kata Sandi',
      description: 'Cara mengubah kata sandi untuk keamanan akun',
      icon: '🔑',
      color: 'bg-green-500'
    },
    {
      id: 'customer-service',
      title: 'Customer Service',
      description: 'Hubungi tim customer service untuk bantuan',
      icon: '💬',
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <button 
            onClick={onBack}
            className="flex items-center text-orange-100 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Menu
          </button>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Tutorial Pengaturan Akun
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Pilih pengaturan yang ingin Anda pelajari
            </p>
          </div>
        </div>
      </div>

      {/* Sub Tutorial Menu */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subTutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              onClick={() => onSelectSubTutorial(tutorial.id)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] border border-gray-100"
            >
              <div className="text-center">
                <div className={`${tutorial.color} w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg mx-auto mb-4`}>
                  {tutorial.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{tutorial.description}</p>
                <div className="flex items-center justify-center text-orange-600">
                  <span className="text-sm font-medium">Mulai Tutorial</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Kelola Akun Anda
          </h3>
          <p className="text-gray-600">
            Pastikan akun Anda selalu aman dengan mengatur PIN dan kata sandi secara berkala.
          </p>
        </div>
      </main>
    </div>
  )
}