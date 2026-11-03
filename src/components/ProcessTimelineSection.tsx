import React from 'react';

const STEPS = [
  {
    step: '01',
    title: 'Tiếp nhận thông tin',
    description: 'Tiếp nhận nhu cầu, quốc tịch, lịch trình chuyến bay hoặc kế hoạch làm việc tại Việt Nam từ khách hàng.',
    colorClass: 'bg-[#0048af] text-white',
    icon: 'chat_bubble'
  },
  {
    step: '02',
    title: 'Kiểm tra và tư vấn hồ sơ',
    description: 'Rà soát tính hợp lệ của văn bằng, lý lịch tư pháp, tư cách pháp nhân bảo lãnh theo luật định hiện hành.',
    colorClass: 'bg-[#505f7b] text-white',
    icon: 'rule'
  },
  {
    step: '03',
    title: 'Báo giá dịch vụ',
    description: 'Gửi bảng báo giá chi tiết, trọn gói, cam kết không phát sinh bất kỳ khoản chi phí ẩn nào trong quá trình xử lý.',
    colorClass: 'bg-[#005952] text-white',
    icon: 'request_quote'
  },
  {
    step: '04',
    title: 'Hỗ trợ hoàn thiện thủ tục',
    description: 'Hỗ trợ dịch thuật công chứng, hợp pháp hóa lãnh sự, lập tờ khai và nộp hồ sơ tại cơ quan có thẩm quyền.',
    colorClass: 'bg-[#1e60d5] text-white',
    icon: 'edit_document'
  },
  {
    step: '05',
    title: 'Theo dõi và bàn giao kết quả',
    description: 'Cập nhật lộ trình thẩm định, nhận thẻ tạm trú/giấy phép lao động và bàn giao tận tay khách hàng an toàn.',
    colorClass: 'bg-[#0b1b34] text-white',
    icon: 'verified'
  }
];

export const ProcessTimelineSection: React.FC = () => {
  return (
    <section className="px-4 py-8 flex flex-col gap-5 max-w-4xl mx-auto w-full">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold text-[#0048af] uppercase tracking-wider">
          Quy trình làm việc chuẩn hóa
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
          5 BƯỚC THỰC HIỆN MINH BẠCH
        </h2>
        <p className="text-sm text-[#424654]">
          Quy trình dịch vụ chuyên nghiệp, cập nhật tiến độ liên tục đến quý khách.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {STEPS.map((item, index) => (
          <div
            key={item.step}
            className="flex gap-3.5 bg-white p-3.5 sm:p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-[#1e60d5]/30 transition-all items-start"
          >
            <div
              className={`w-11 h-11 rounded-2xl ${item.colorClass} flex items-center justify-center shrink-0 text-base font-extrabold shadow-sm`}
            >
              {item.step}
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-[#191c1e]">
                  {item.title}
                </span>
                <span className="text-[11px] font-semibold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                  Bước {index + 1}/5
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#424654] mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
