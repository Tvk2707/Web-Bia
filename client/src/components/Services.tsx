import { useRef, useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Services() {
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const scrollToContact = useRef(false);

  const services = [
    {
      title: 'Thiết kế 3D',
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
    <section id="services" className="py-12 md:py-20 bg-black">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <p className="subtitle text-yellow-600 text-sm mb-4">Dịch Vụ Chính</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Giải Pháp Toàn Diện
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const isDesign = index === 0;
            const card = (
              <div
                key={service.title}
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
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{service.description}</p>
                  {isDesign && (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-yellow-500">
                      Xem 2 phân khúc <ChevronRight size={16} aria-hidden="true" />
                    </span>
                  )}
                </div>
                {isDesign && (
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="absolute inset-0 z-10 w-full cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-500"
                      aria-label="Xem hai phân khúc thiết kế 3D"
                    />
                  </DialogTrigger>
                )}
              </div>
            );

            if (!isDesign) return card;

            return (
              <Dialog key={service.title} open={isDesignOpen} onOpenChange={setIsDesignOpen}>
                {card}
                <DialogContent
                  showCloseButton={false}
                  className="max-h-[calc(100dvh-2rem)] w-[calc(100%-1.5rem)] overflow-y-auto border-yellow-600/40 bg-gray-900 p-5 text-white sm:max-w-4xl sm:p-8"
                  onCloseAutoFocus={(event) => {
                    if (!scrollToContact.current) return;
                    event.preventDefault();
                    scrollToContact.current = false;
                    window.history.replaceState(null, '', '#contact');
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <DialogHeader className="pr-10 text-left">
                    <DialogTitle className="text-2xl font-bold text-white sm:text-3xl">
                      Thiết kế 3D
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-300 sm:text-base">
                      Chọn phân khúc phù hợp với diện tích câu lạc bộ của bạn.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogClose asChild>
                    <button
                      type="button"
                      className="absolute right-4 top-4 rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
                      aria-label="Đóng"
                    >
                      <X size={22} aria-hidden="true" />
                    </button>
                  </DialogClose>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    {[
                      {
                        title: 'Thiết kế 3D từ 100–500 m²',
                        description: 'Thiết kế không gian câu lạc bộ Billiards phù hợp với quy mô vừa. Tối ưu mặt bằng, số lượng bàn, khu vực quầy bar, ánh sáng, vật liệu và phong cách nội thất.',
                      },
                      {
                        title: 'Thiết kế 3D trên 500 m²',
                        description: 'Thiết kế tổng thể cho câu lạc bộ Billiards quy mô lớn. Phân chia khoa học khu thi đấu, phòng VIP, quầy bar, lounge, khu phụ trợ và hệ thống nhận diện thương hiệu.',
                      },
                    ].map((segment) => (
                      <div
                        key={segment.title}
                        className="flex flex-col rounded-xl border border-yellow-600/40 bg-gray-800 p-5 sm:p-6"
                      >
                        <h3 className="text-lg font-bold text-yellow-500 sm:text-xl">{segment.title}</h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-200 sm:text-base">
                          {segment.description}
                        </p>
                        <a
                          href="#contact"
                          onClick={(event) => {
                            event.preventDefault();
                            scrollToContact.current = true;
                            setIsDesignOpen(false);
                          }}
                          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-yellow-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-yellow-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 sm:text-base"
                        >
                          Nhận tư vấn
                        </a>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
