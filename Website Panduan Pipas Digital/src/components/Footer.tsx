export function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Pipas Digital</span>
        </div>
        <p className="text-gray-600 mb-6">
          Aplikasi digital terpercaya untuk kemudahan transaksi Anda
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600 transition-colors">Bantuan</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Kontak</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Kebijakan Privasi</a>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2025 Pipas Digital. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}