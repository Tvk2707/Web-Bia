export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-black overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <p className="subtitle text-yellow-600 text-sm">Thiết Kế & Thi Công</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Câu Lạc Bộ Billiards <span className="text-yellow-600">Đẳng Cấp</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Chúng tôi chuyên thiết kế và thi công các câu lạc bộ Billiards cao cấp, mang lại trải nghiệm sang trọng và chuyên nghiệp cho khách hàng.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all transform hover:scale-105 active:scale-95 font-semibold border-2 border-yellow-600">
                Khám Phá Dự Án
              </button>
              <button className="px-8 py-3 border-2 border-yellow-600 text-yellow-600 rounded-lg hover:bg-yellow-600/10 transition-all font-semibold active:scale-95">
                Tư Vấn Miễn Phí
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-transparent rounded-2xl"></div>
            <img 
              src="/manus-storage/hz-hero-billiards_221e50ab.png" 
              alt="Luxury Billiards Club" 
              className="w-full h-auto rounded-2xl shadow-2xl border-2 border-yellow-600/30 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
    </section>
  );
}
