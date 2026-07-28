import { Phone, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="subtitle text-yellow-600 text-sm mb-4">Liên Hệ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hãy Liên Hệ Với Chúng Tôi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-600/20">
                  <Phone className="text-yellow-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Điện Thoại</h3>
                <a href="tel:0889976866" className="text-gray-700 hover:text-yellow-600">
                  <span className="font-semibold">088 997 68 66</span>
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-600/20">
                  <MapPin className="text-yellow-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Địa Chỉ</h3>
                <p className="text-gray-300">
                  105 Nguyễn Công Trứ<br />
                  P. Vĩnh Phúc - Phú Thọ
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-yellow-600/20">
                  <Mail className="text-yellow-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Mạng Xã Hội</h3>
                <div className="space-y-2">
                  <a href="https://www.facebook.com/hzdesign7" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-yellow-600 transition-colors">
                    Facebook: HZdesign
                  </a>
                  <a href="https://www.tiktok.com/@hzdesign7" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-yellow-600 transition-colors">
                    TikTok: @hzdesign7
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Họ và Tên" 
              className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/20 rounded-lg focus:border-yellow-600 focus:outline-none transition-all focus:shadow-lg text-white placeholder-gray-500"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/20 rounded-lg focus:border-yellow-600 focus:outline-none transition-all focus:shadow-lg text-white placeholder-gray-500"
            />
            <input 
              type="tel" 
              placeholder="Số Điện Thoại" 
              className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/20 rounded-lg focus:border-yellow-600 focus:outline-none transition-all focus:shadow-lg text-white placeholder-gray-500"
            />
            <textarea 
              placeholder="Nội Dung Tin Nhắn" 
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border-2 border-yellow-600/20 rounded-lg focus:border-yellow-600 focus:outline-none transition-all focus:shadow-lg text-white placeholder-gray-500"
            />
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all transform hover:scale-105 font-semibold active:scale-95"
            >
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
