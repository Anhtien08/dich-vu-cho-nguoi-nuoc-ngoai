import React from 'react';

const PILLARS = [
  {
    title: 'Hơn 10 năm kinh nghiệm',
    desc: 'Kinh nghiệm thực tiễn xử lý hồ sơ đa quốc tịch và các tình huống phức tạp.',
    icon: 'verified',
    iconBg: 'bg-[#ceddff] text-[#0048af]'
  },
  {
    title: 'Tư vấn chuyên nghiệp',
    desc: 'Tuân thủ nghiêm ngặt quy định của pháp luật Việt Nam hiện hành.',
    icon: 'gavel',
    iconBg: 'bg-[#ceddff] text-[#0048af]'
  },
  {
    title: 'Chi phí minh bạch',
    desc: 'Báo giá rõ ràng ngay từ đầu, tuyệt đối không có chi phí phụ phát sinh.',
    icon: 'visibility',
    iconBg: 'bg-[#89f5e7]/30 text-[#005952]'
  },
  {
    title: 'Hỗ trợ tận tâm',
    desc: 'Chuyên viên đồng hành sát sao từ khi chuẩn bị đến khi hoàn tất hồ sơ.',
    icon: 'diversity_1',
    iconBg: 'bg-[#89f5e7]/30 text-[#005952]'
  }
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="px-4 py-8 bg-[#f2f4f6] flex flex-col gap-5 w-full">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-[#0048af] uppercase tracking-wider">
            Giá trị cốt lõi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
            TẠI SAO CHỌN VISA5S?
          </h2>
          <p className="text-sm text-[#424654]">
            Sự an tâm và minh bạch là nền tảng trong từng dịch vụ mà chúng tôi cung cấp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2 hover:border-[#1e60d5]/30 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl ${pillar.iconBg} flex items-center justify-center shrink-0`}>
                <span className="material-symbols-outlined text-[24px]">
                  {pillar.icon}
                </span>
              </div>
              <span className="text-base font-bold text-[#191c1e]">
                {pillar.title}
              </span>
              <span className="text-xs sm:text-sm text-[#424654] leading-relaxed">
                {pillar.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
