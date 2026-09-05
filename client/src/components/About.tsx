export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <p className="subtitle text-yellow-600 text-sm mb-4">Về HZdesign</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Chuyên Gia Thiết Kế Câu Lạc Bộ Billiards
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Với hơn một thập kỷ kinh nghiệm, HZdesign đã tạo ra những không gian Billiards sang trọng và chuyên nghiệp tại Phú Thọ và các tỉnh lân cận.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-gray-800 p-6 md:p-8 rounded-xl border-2 border-yellow-600/20 hover:border-yellow-600 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">300+</div>
            <p className="text-gray-300">Dự Án Hoàn Thành</p>
          </div>
          <div className="relative bg-gray-800 p-6 md:p-8 rounded-xl border-2 border-yellow-600/20 hover:border-yellow-600 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-600/20"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-yellow-600/20"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-yellow-600/20"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-600/20"></div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">100%</div>
            <p className="text-gray-300">Khách Hàng Hài Lòng</p>
          </div>
          <div className="relative bg-gray-800 p-6 md:p-8 rounded-xl border-2 border-yellow-600/20 hover:border-yellow-600 transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-600/20"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-yellow-600/20"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-yellow-600/20"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-600/20"></div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">10+</div>
            <p className="text-gray-300">Năm Kinh Nghiệm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
