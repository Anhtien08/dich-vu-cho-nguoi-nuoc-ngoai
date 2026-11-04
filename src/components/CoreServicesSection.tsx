import React from 'react';
import { FAST_TRACK_IMAGE, HERO_IMAGE } from '../data/visaData';
import { ServiceType } from '../types';

interface CoreServicesSectionProps {
  onOpenServiceModal: (service: 'fast-track' | 'fast-track-arrival' | 'fast-track-departure' | 'fast-track-vip') => void;
  onSelectServiceAndForm: (service: ServiceType) => void;
}

export const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({
  onOpenServiceModal,
  onSelectServiceAndForm,
}) => {
  return (
    <section className="px-4 py-6 flex flex-col gap-4 max-w-4xl mx-auto w-full" id="core-services">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold text-[#0048af] uppercase tracking-wider">
          Dịch vụ trọng tâm
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
          CÁC GÓI FAST TRACK ĐÓN TIỄN SÂN BAY
        </h2>
        <p className="text-sm text-[#424654]">
          Giải pháp đón tiễn ưu tiên được thiết kế chuyên biệt cho hành khách quốc tế tại Việt Nam.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Package 1: Fast Track Nhập Cảnh (Arrival) */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Airport VIP concierge host welcoming foreign executive passenger at fast track gate"
              src={FAST_TRACK_IMAGE}
            />
            <span className="absolute top-3 right-3 bg-[#0048af] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Gói Nhập Cảnh Phổ Biến
            </span>
          </div>

          <div className="p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#0048af]">
                FAST TRACK NHẬP CẢNH (ARRIVAL FAST TRACK)
              </h3>
              <span className="text-[11px] font-bold bg-[#ceddff] text-[#0048af] px-2.5 py-0.5 rounded-full">
                Tiết kiệm 45 - 90 phút
              </span>
            </div>

            <ul className="flex flex-col gap-2 text-sm text-[#191c1e]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Chuyên viên đón khách ngay tại cửa ra máy bay (cửa ống lồng) với bảng đón tên trang trọng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Dẫn lối qua làn ưu tiên (Priority Lane) làm thủ tục nhập cảnh nhanh gọn, không phải xếp hàng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Hỗ trợ nộp hồ sơ và lấy tem dán visa (Visa On Arrival) nhanh chóng tại quầy công an cửa khẩu.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={() => onOpenServiceModal('fast-track-arrival')}
                className="flex-1 inline-flex items-center justify-between p-3 bg-[#f2f4f6] hover:bg-[#ceddff]/60 text-[#0048af] rounded-xl font-bold text-xs sm:text-sm active:bg-[#ceddff] transition-colors cursor-pointer"
              >
                <span>XEM CHI TIẾT GÓI NHẬP CẢNH</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={() => onSelectServiceAndForm('fast-track-arrival')}
                className="h-11 px-4 bg-[#0048af] hover:bg-[#1e60d5] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]">flight_land</span>
                <span>Đặt gói này</span>
              </button>
            </div>
          </div>
        </div>

        {/* Package 2: VIP Fast Track Trọn Gói (Full VIP) */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Executive VIP luxury terminal service"
              src={HERO_IMAGE}
            />
            <span className="absolute top-3 right-3 bg-[#0b1b34] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              VIP Trọn Gói Cao Cấp
            </span>
          </div>

          <div className="p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#0048af]">
                VIP FAST TRACK TRỌN GÓI (ĐÓN CỬA + HÀNH LÝ + XE)
              </h3>
              <span className="text-[11px] font-bold bg-[#8df9ea]/40 text-[#005952] px-2.5 py-0.5 rounded-full">
                Dành cho Doanh nhân & VIP
              </span>
            </div>

            <ul className="flex flex-col gap-2 text-sm text-[#191c1e]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Đón tiếp VIP ngay khi bước ra khỏi cửa máy bay với bảng đón tên chuẩn mực ngoại giao.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Qua cổng kiểm soát xuất nhập cảnh ưu tiên VIP nhanh nhất chỉ từ 3 - 5 phút.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Có nhân viên hỗ trợ đợi và nhận toàn bộ hành lý ký gửi tại băng chuyền, đưa ra tận xe riêng.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={() => onOpenServiceModal('fast-track-vip')}
                className="flex-1 inline-flex items-center justify-between p-3 bg-[#f2f4f6] hover:bg-[#ceddff]/60 text-[#0048af] rounded-xl font-bold text-xs sm:text-sm active:bg-[#ceddff] transition-colors cursor-pointer"
              >
                <span>XEM CHI TIẾT GÓI VIP TRỌN GÓI</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={() => onSelectServiceAndForm('fast-track-vip')}
                className="h-11 px-4 bg-[#0048af] hover:bg-[#1e60d5] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]">stars</span>
                <span>Đặt gói này</span>
              </button>
            </div>
          </div>
        </div>

        {/* Package 3: Fast Track Xuất Cảnh (Departure) */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Modern departure international airport terminal gate"
              src={FAST_TRACK_IMAGE}
            />
            <span className="absolute top-3 right-3 bg-[#005952] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Xuất Cảnh Nhanh
            </span>
          </div>

          <div className="p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-[#0048af]">
                FAST TRACK XUẤT CẢNH (DEPARTURE FAST TRACK)
              </h3>
              <span className="text-[11px] font-bold bg-[#f2f4f6] text-gray-700 px-2.5 py-0.5 rounded-full">
                Không lo trễ giờ bay
              </span>
            </div>

            <ul className="flex flex-col gap-2 text-sm text-[#191c1e]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Đón khách tại sảnh nhà ga đi quốc tế theo điểm hẹn quy định.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Hỗ trợ làm thủ tục check-in vé máy bay tại quầy hãng hàng không nhanh chóng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Dẫn lối qua làn ưu tiên an ninh soi chiếu và quầy công an xuất cảnh vào thẳng phòng chờ.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={() => onOpenServiceModal('fast-track-departure')}
                className="flex-1 inline-flex items-center justify-between p-3 bg-[#f2f4f6] hover:bg-[#ceddff]/60 text-[#0048af] rounded-xl font-bold text-xs sm:text-sm active:bg-[#ceddff] transition-colors cursor-pointer"
              >
                <span>XEM CHI TIẾT GÓI XUẤT CẢNH</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={() => onSelectServiceAndForm('fast-track-departure')}
                className="h-11 px-4 bg-[#0048af] hover:bg-[#1e60d5] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
                <span>Đặt gói này</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
