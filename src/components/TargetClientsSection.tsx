import React from 'react';

const TARGET_SEGMENTS = [
  {
    title: 'Người nước ngoài làm việc tại Việt Nam',
    desc: 'Chuyên gia, lao động kỹ thuật tay nghề cao, nhà đầu tư trực tiếp cần hoàn thiện tư cách pháp lý cư trú.',
    icon: 'badge',
    iconBg: 'bg-[#ceddff] text-[#0048af]'
  },
  {
    title: 'Doanh nghiệp tuyển dụng nhân sự quốc tế',
    desc: 'Các tập đoàn đa quốc gia, công ty vốn FDI, doanh nghiệp trong nước cần bảo lãnh nhân sự nước ngoài.',
    icon: 'business',
    iconBg: 'bg-[#ceddff] text-[#0048af]'
  },
  {
    title: 'Bộ phận Hành chính & Nhân sự (HR)',
    desc: 'Giải phóng áp lực thủ tục giấy tờ, tối ưu thời gian chuẩn bị hồ sơ lao động nước ngoài theo luật định.',
    icon: 'groups',
    iconBg: 'bg-[#89f5e7]/30 text-[#005952]'
  },
  {
    title: 'Khách quốc tế có nhu cầu Fast Track',
    desc: 'Doanh nhân bận rộn, gia đình có trẻ em, đoàn công tác hoặc phái đoàn cần đón tiếp chu đáo tại sân bay.',
    icon: 'flight_takeoff',
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
          ĐỐI TƯỢNG KHÁCH HÀNG
        </h2>
        <p className="text-sm text-[#424654]">
          Được may đo giải pháp phù hợp với từng nhu cầu pháp lý và lịch trình.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {TARGET_SEGMENTS.map((segment) => (
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
