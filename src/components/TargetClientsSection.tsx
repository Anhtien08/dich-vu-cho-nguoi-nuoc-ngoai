import React from 'react';

const FAST_TRACK_CLIENTS = [
  {
    title: 'Doanh nhân & Chuyên gia cấp cao',
    desc: 'Lịch trình công tác khẩn cấp, cần hoàn tất thủ tục nhập cảnh nhanh nhất để kịp các cuộc họp quan trọng mà không lãng phí thời gian chờ đợi.',
    icon: 'business_center',
    iconBg: 'bg-[#ceddff] text-[#0048af]'
  },
  {
    title: 'Gia đình có trẻ nhỏ & Người lớn tuổi',
    desc: 'Chuyến bay dài dễ gây kiệt sức; làn ưu tiên riêng biệt giúp cả gia đình làm thủ tục nhẹ nhàng, thông thoáng, không mệt mỏi.',
    icon: 'family_restroom',
    iconBg: 'bg-[#ceddff] text-[#0048af]'
  },
  {
    title: 'Khách du lịch cao cấp & Phái đoàn ngoại giao',
    desc: 'Được đón tiếp chu đáo ngay tại cửa máy bay với bảng tên trang trọng, phong cách chuyên nghiệp, nâng tầm trải nghiệm từ giây phút đầu tiên.',
    icon: 'star',
    iconBg: 'bg-[#89f5e7]/30 text-[#005952]'
  },
  {
    title: 'Doanh nghiệp FDI & Cơ quan đón tiếp đối tác',
    desc: 'Giải pháp đón rước chuyên nghiệp dành cho các công ty đón lãnh đạo tập đoàn, đối tác chiến lược hoặc khách mời quốc tế về Việt Nam.',
    icon: 'corporate_fare',
    iconBg: 'bg-[#89f5e7]/30 text-[#005952]'
  }
];

export const TargetClientsSection: React.FC = () => {
  return (
    <section className="px-4 py-8 flex flex-col gap-5 max-w-4xl mx-auto w-full">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold text-[#0048af] uppercase tracking-wider">
          Phục vụ chuyên biệt
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
          ĐỐI TƯỢNG PHÙ HỢP VỚI FAST TRACK
        </h2>
        <p className="text-sm text-[#424654]">
          Giải pháp ưu tiên tại sân bay phù hợp với từng nhu cầu di chuyển và lịch trình.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {FAST_TRACK_CLIENTS.map((segment) => (
          <div
            key={segment.title}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3.5 hover:border-[#1e60d5]/30 transition-all"
          >
            <div className={`w-11 h-11 rounded-2xl ${segment.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
              <span className="material-symbols-outlined text-[22px]">
                {segment.icon}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-[#191c1e]">
                {segment.title}
              </span>
              <span className="text-xs sm:text-sm text-[#424654] mt-1 leading-relaxed">
                {segment.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
