export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-2 border-yellow-600">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">HZdesign</h3>
            <p className="text-gray-400 text-sm">Thiết kế và thi công câu lạc bộ Billiards cao cấp.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-yellow-600 transition-colors">Thiết Kế</a></li>
              <li><a href="#services" className="hover:text-yellow-600 transition-colors">Thi Công</a></li>
              <li><a href="#services" className="hover:text-yellow-600 transition-colors">Tư Vấn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liên Hệ</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="tel:0889976866" className="hover:text-yellow-600 transition-colors">088 997 68 66</a></li>
              <li><a href="https://www.facebook.com/hzdesign7" className="hover:text-yellow-600 transition-colors">Facebook</a></li>
              <li><a href="https://www.tiktok.com/@hzdesign7" className="hover:text-yellow-600 transition-colors">TikTok</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Địa Chỉ</h3>
            <p className="text-gray-400 text-sm">
              105 Nguyễn Công Trứ<br />
              P. Vĩnh Phúc - Phú Thọ
            </p>
          </div>
        </div>
        <div className="border-t border-yellow-600/20 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 HZdesign. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
