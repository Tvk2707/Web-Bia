import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const isProductsPage = location === '/products';

  const menuItems = [
    { label: 'Về Chúng Tôi', href: isProductsPage ? '/' : '#' },
    { label: 'Dịch Vụ', href: isProductsPage ? '/#services' : '#services' },
    { label: 'Dự Án', href: isProductsPage ? '/#portfolio' : '#portfolio' },
    { label: 'Bàn Bi-a', href: '/products' },
    { label: 'Liên Hệ', href: isProductsPage ? '/#contact' : '#contact' },
  ];

  // Đóng menu khi nhấn ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Khóa scroll body khi menu mở
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  // Xác định class active cho link menu
  const getLinkClass = (href: string, base: string) => {
    const isActive =
      href === '/products' ? isProductsPage : false;
    return `${base} ${isActive ? 'text-yellow-600' : ''}`;
  };

  return (
    <>
      <header
        ref={menuRef}
        className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-600/30"
      >
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/web-bia-images/01-header-logo/01_469366739_122151155132362878_3746871771906175779_n_e9ba5dfe.jpg"
              alt="HZdesign Logo"
              className="w-14 h-14 sm:w-16 sm:h-16"
            />
            <div className="hidden sm:block">
              <p className="text-xl font-bold text-white">HZdesign</p>
              <p className="text-xs text-yellow-600">Setup CLB Billiard</p>
            </div>
          </a>

          {/* Desktop Nav — giữ nguyên */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={getLinkClass(
                  item.href,
                  'text-white hover:text-yellow-600 transition-colors duration-200'
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:0889976866"
              className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all duration-200 transform hover:scale-105"
            >
              Liên Hệ
            </a>
          </nav>

          {/* Hamburger Button — chỉ hiện trên mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-yellow-600/20 active:bg-yellow-600/30 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu — slide down với transition */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="bg-black/98 border-t border-yellow-600/20 px-4 pb-4 pt-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center py-3 px-2 border-b border-yellow-600/10 last:border-b-0 transition-colors duration-200 text-base font-medium ${
                  item.href === '/products' && isProductsPage
                    ? 'text-yellow-600'
                    : 'text-white hover:text-yellow-600 active:text-yellow-500'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Overlay mờ phía sau menu — chỉ trên mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
