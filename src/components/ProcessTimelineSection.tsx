import React from 'react';

const FAST_TRACK_STEPS = [
  {
    step: '01',
    title: 'Tiếp nhận lịch trình chuyến bay',
    description: 'Tiếp nhận thông tin mã chuyến bay, ngày & giờ hạ cánh dự kiến, sân bay đến, số lượng hành khách và hình ảnh hộ chiếu.',
    colorClass: 'bg-[#0048af] text-white',
    icon: 'flight'
  },
  {
    step: '02',
    title: 'Xác nhận & Điều phối chuyên viên',
    description: 'Xác nhận dịch vụ trong 15 - 30 phút, bố trí chuyên viên túc trực tại sân bay và chuẩn bị bảng đón tên nhận diện chuẩn mực.',
    colorClass: 'bg-[#505f7b] text-white',
    icon: 'badge'
  },
  {
    step: '03',
    title: 'Báo giá dịch vụ trọn gói',
    description: 'Báo giá minh bạch, cam kết không phát sinh phụ phí kể cả trong trường hợp chuyến bay bị trễ giờ (delay) so với dự kiến.',
    colorClass: 'bg-[#005952] text-white',
    icon: 'price_check'
  },
  {
    step: '04',
    title: 'Đón tại cửa máy bay & Làn ưu tiên',
    description: 'Chuyên viên đón khách ngay tại cửa ống lồng máy bay, hỗ trợ dán tem thị thực (Visa On Arrival) và dẫn lối qua cổng xuất nhập cảnh ưu tiên.',
    colorClass: 'bg-[#1e60d5] text-white',
    icon: 'speed'
  },
  {
    step: '05',
    title: 'Hỗ trợ hành lý & Bàn giao sảnh đón xe',
    description: 'Hỗ trợ nhận hành lý ký gửi tại băng chuyền và hộ tống hành khách ra tận sảnh xe chờ đón phía ngoài nhà ga an toàn.',
    colorClass: 'bg-[#0b1b34] text-white',
    icon: 'verified'
  }
];

export const ProcessTimelineSection: React.FC = () => {
  return (
    <section className="px-4 py-8 flex flex-col gap-5 max-w-4xl mx-auto w-full">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold text-[#0048af] uppercase tracking-wider">
          Quy trình chuẩn hóa
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
          5 BƯỚC ĐÓN TIỄN FAST TRACK CHUYÊN NGHIỆP
        </h2>
        <p className="text-sm text-[#424654]">
          Quy trình đón tiễn chu đáo, bám sát hành trình bay giúp quý khách an tâm tuyệt đối.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {FAST_TRACK_STEPS.map((item, index) => (
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
