export function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center bg-blue-500 px-4 py-2 rounded-full mb-6">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold">P</span>
          </div>
          <span className="font-medium">Pipas Digital</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Panduan Penggunaan Aplikasi
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Ikuti langkah-langkah mudah untuk memulai menggunakan aplikasi Pipas Digital
        </p>
      </div>
    </div>
  )
}