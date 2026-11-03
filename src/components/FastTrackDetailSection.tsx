import React, { useState } from 'react';

const AIRPORT_INFO: Record<string, { code: string; name: string; city: string; meetingPoint: string; note: string }> = {
  SGN: {
    code: 'SGN',
    name: 'Tân Sơn Nhất',
    city: 'TP. Hồ Chí Minh',
    meetingPoint: 'Đón tại cửa ống lồng ngay khi vừa bước ra khỏi máy bay (hoặc sảnh nhà ga T2 cho chuyến bay đậu bãi xa)',
    note: 'Sân bay có mật độ khách quốc tế cao nhất, Fast Track giúp tiết kiệm từ 45 - 90 phút xếp hàng.'
  },
  HAN: {
    code: 'HAN',
    name: 'Nội Bài',
    city: 'Hà Nội',
    meetingPoint: 'Khu vực cửa ra tàu bay quốc tế T2, chuyên viên cầm bảng tên nhận diện rõ ràng',
    note: 'Hỗ trợ dán tem visa nhanh tại quầy Cục QLXNC trước khi qua làn ưu tiên.'
  },
  DAD: {
    code: 'DAD',
    name: 'Đà Nẵng',
    city: 'Đà Nẵng',
    meetingPoint: 'Cửa ra ga quốc tế T2, gần khu vực kiểm dịch y tế và làm thủ tục nhập cảnh',
    note: 'Phù hợp cho các chuyến bay từ Hàn Quốc, Nhật Bản, Đài Loan, Singapore và Đông Nam Á.'
  },
  CXR: {
    code: 'CXR',
    name: 'Cam Ranh',
    city: 'Nha Trang / Khánh Hòa',
    meetingPoint: 'Ngay lối ra máy bay ga quốc tế T4, đón chu đáo cho các đoàn chuyên gia và du khách',
    note: 'Hỗ trợ hành lý nhanh chóng và kết nối phương tiện xe riêng về khách sạn/resort.'
  }
};

export const FastTrackDetailSection: React.FC = () => {
  const [selectedAirport, setSelectedAirport] = useState<string>('SGN');

  return (
    <section className="px-4 py-8 bg-[#f2f4f6] flex flex-col gap-5 w-full" id="fast-track-detail">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-[#0048af] uppercase tracking-wider">
            Dịch vụ đặc quyền tại sân bay
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
            FAST TRACK – HỖ TRỢ THỦ TỤC NHẬP CẢNH
          </h2>
        </div>

        {/* Airport Feature Showcase Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
          <p className="text-sm sm:text-base text-[#191c1e] leading-relaxed">
            Dịch vụ đón tiếp chuyên biệt tại 4 sân bay quốc tế lớn của Việt Nam:{' '}
            <strong className="text-[#0048af] font-bold">
              Tân Sơn Nhất (SGN), Nội Bài (HAN), Đà Nẵng (DAD), Cam Ranh (CXR)
            </strong>
            . Chuyên viên đón khách ngay từ khu vực ống lồng/cửa máy bay, hướng dẫn vào làn ưu tiên làm thủ tục nhập cảnh nhanh gọn, giảm thiểu thời gian xếp hàng sau hành trình bay dài.
          </p>

          {/* Interactive Airport Quick Selector */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Chọn sân bay xem chi tiết điểm đón:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.values(AIRPORT_INFO).map((airport) => {
                const isSelected = selectedAirport === airport.code;
                return (
                  <button
                    key={airport.code}
                    onClick={() => setSelectedAirport(airport.code)}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col ${
                      isSelected
                        ? 'bg-[#1e60d5] text-white border-[#1e60d5] shadow-sm'
                        : 'bg-[#f7f9fb] text-[#191c1e] border-gray-200 hover:border-[#1e60d5]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black ${isSelected ? 'text-white' : 'text-[#0048af]'}`}>
                        {airport.code}
                      </span>
                      <span className="material-symbols-outlined text-[16px]">flight_land</span>
                    </div>
                    <span className="text-xs font-bold truncate mt-0.5">{airport.name}</span>
                    <span className={`text-[10px] truncate ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                      {airport.city}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Airport Spot Highlight Card */}
            <div className="bg-[#ceddff]/30 border border-[#ceddff] rounded-xl p-3 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-1">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  pin_drop
                </span>
                <div>
                  <p className="font-bold text-[#0048af]">
                    Điểm đón tại sân bay {AIRPORT_INFO[selectedAirport].name} ({AIRPORT_INFO[selectedAirport].code}):
                  </p>
                  <p className="text-gray-700 mt-0.5">
                    {AIRPORT_INFO[selectedAirport].meetingPoint}
                  </p>
                  <p className="text-gray-500 italic mt-0.5 text-[11px]">
                    {AIRPORT_INFO[selectedAirport].note}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-1">
            <div className="bg-[#f7f9fb] p-3 rounded-xl flex flex-col gap-1 border border-gray-100">
              <span className="material-symbols-outlined text-[#0048af] text-[24px]">
                flight_land
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#191c1e]">
                Đón ngay cửa máy bay
              </span>
              <span className="text-xs text-[#424654]">
                Bảng đón tên nhận diện chuẩn mực
              </span>
            </div>

            <div className="bg-[#f7f9fb] p-3 rounded-xl flex flex-col gap-1 border border-gray-100">
              <span className="material-symbols-outlined text-[#0048af] text-[24px]">
                speed
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#191c1e]">
                Làn ưu tiên thông thoáng
              </span>
              <span className="text-xs text-[#424654]">
                Hỗ trợ dán tem visa & thủ tục nhanh
              </span>
            </div>

            <div className="bg-[#f7f9fb] p-3 rounded-xl flex flex-col gap-1 border border-gray-100">
              <span className="material-symbols-outlined text-[#005952] text-[24px]">
                luggage
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#191c1e]">
                Hỗ trợ hành lý
              </span>
              <span className="text-xs text-[#424654]">
                Hướng dẫn nhận hành lý ký gửi
              </span>
            </div>

            <div className="bg-[#f7f9fb] p-3 rounded-xl flex flex-col gap-1 border border-gray-100">
              <span className="material-symbols-outlined text-[#005952] text-[24px]">
                directions_car
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#191c1e]">
                Đưa ra sảnh đón xe
              </span>
              <span className="text-xs text-[#424654]">
                Kết nối tài xế hoặc đối tác đưa đón
              </span>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-1 p-3.5 bg-[#ceddff]/40 rounded-xl flex items-start sm:items-center gap-3 border border-[#ceddff]">
            <span className="material-symbols-outlined text-[#0048af] text-[24px] shrink-0 mt-0.5 sm:mt-0">
              airline_seat_recline_extra
            </span>
            <p className="text-xs sm:text-sm text-[#191c1e] leading-relaxed">
              Thích hợp cho <strong>chuyên gia cấp cao, nhà đầu tư, gia đình có người lớn tuổi hoặc trẻ nhỏ</strong> không muốn chờ đợi hàng giờ tại quầy công an cửa khẩu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
