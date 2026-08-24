export default function Services() {
  const services = [
    {
      title: 'Thiết Kế',
      description: 'Thiết kế không gian Billiards theo tiêu chuẩn quốc tế, kết hợp thẩm mỹ và chức năng.',
      image: '/web-bia-images/03-services/thiet-ke/01_hz-service-design_6e295631.png'
    },
    {
      title: 'Thi Công',
      description: 'Thi công chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm và trang thiết bị hiện đại.',
      image: '/web-bia-images/03-services/thi-cong/01_hz-service-construction_b0a75736.png'
    },
    {
      title: 'Tư Vấn',
      description: 'Tư vấn toàn diện từ lập kế hoạch, thiết kế đến quản lý dự án và bảo trì sau hoàn thành.',
      image: '/web-bia-images/03-services/tu-van/01_hz-service-consultation_e1161071.png'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="subtitle text-yellow-600 text-sm mb-4">Dịch Vụ Chính</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Giải Pháp Toàn Diện
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800 border-2 border-yellow-600/20 rounded-xl overflow-hidden hover:border-yellow-600 transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-600/30 group-hover:border-yellow-600 transition-colors"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-600/30 group-hover:border-yellow-600 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-600/30 group-hover:border-yellow-600 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-600/30 group-hover:border-yellow-600 transition-colors"></div>
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
