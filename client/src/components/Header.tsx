import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-600/30">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/manus-storage/469366739_122151155132362878_3746871771906175779_n_e9ba5dfe.jpg"
            alt="HZdesign Logo" 
            className="w-16 h-16"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-white">HZdesign</h1>
            <p className="text-xs text-yellow-600">Setup CLB Billiard</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white hover:text-yellow-600 transition-colors duration-200">Về Chúng Tôi</a>
          <a href="#services" className="text-white hover:text-yellow-600 transition-colors duration-200">Dịch Vụ</a>
          <a href="#portfolio" className="text-white hover:text-yellow-600 transition-colors duration-200">Dự Án</a>
          <a href="tel:0889976866" className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all duration-200 transform hover:scale-105">Liên Hệ</a>
        </nav>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-black border-t border-yellow-600/20 p-4 space-y-3">
          <a href="#about" className="block text-white hover:text-yellow-600 transition-colors duration-200">Về Chúng Tôi</a>
          <a href="#services" className="block text-white hover:text-yellow-600 transition-colors duration-200">Dịch Vụ</a>
          <a href="#portfolio" className="block text-white hover:text-yellow-600 transition-colors duration-200">Dự Án</a>
          <a href="tel:0889976866" className="block px-6 py-2 bg-yellow-600 text-white rounded-lg text-center hover:bg-yellow-700 transition-all duration-200">Liên Hệ</a>
        </nav>
      )}
    </header>
  );
}
