import React from 'react';
import { FAST_TRACK_IMAGE, TRC_IMAGE, WORK_PERMIT_IMAGE } from '../data/visaData';
import { ServiceType } from '../types';

interface CoreServicesSectionProps {
  onOpenServiceModal: (service: 'fast-track' | 'trc' | 'work-permit') => void;
  onSelectServiceAndForm: (service: ServiceType) => void;
}

export const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({
  onOpenServiceModal,
}) => {
  return (
    <section className="px-4 py-6 flex flex-col gap-4 max-w-4xl mx-auto w-full" id="core-services">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-bold text-[#0048af] uppercase tracking-wider">
          Hạng mục trọng tâm
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
          DỊCH VỤ PHÁP LÝ & LƯU TRÚ
        </h2>
        <p className="text-sm text-[#424654]">
          Giải pháp chuyên nghiệp được tối ưu riêng biệt cho người nước ngoài tại Việt Nam.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Service Card 1: Fast Track */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Airport VIP concierge host welcoming foreign executive passenger"
              src={FAST_TRACK_IMAGE}
            />
            <span className="absolute top-3 right-3 bg-[#0b1b34] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Ưu tiên sân bay
            </span>
          </div>

          <div className="p-4 sm:p-5 flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#0048af]">
              FAST TRACK SÂN BAY
            </h3>

            <ul className="flex flex-col gap-2 text-sm text-[#191c1e]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Hỗ trợ thủ tục nhập cảnh nhanh chóng.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Hỗ trợ đón khách ngay tại cửa máy bay / khu vực xuất nhập cảnh.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Tư vấn và điều phối dịch vụ linh hoạt theo mã chuyến bay.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={() => onOpenServiceModal('fast-track')}
                className="flex-1 inline-flex items-center justify-between p-3 bg-[#f2f4f6] hover:bg-[#ceddff]/60 text-[#0048af] rounded-xl font-bold text-xs sm:text-sm active:bg-[#ceddff] transition-colors cursor-pointer"
              >
                <span>TÌM HIỂU THÊM VỀ FAST TRACK</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Service Card 2: Temporary Residence Card (TRC) */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Official Vietnam temporary residence card TRC paperwork on executive desk"
              src={TRC_IMAGE}
            />
            <span className="absolute top-3 right-3 bg-[#0048af] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Lưu trú 1 - 5 Năm
            </span>
          </div>

          <div className="p-4 sm:p-5 flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#0048af]">
              THẺ TẠM TRÚ (TRC)
            </h3>

            <ul className="flex flex-col gap-2 text-sm text-[#191c1e]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Cấp mới thẻ tạm trú cho nhà đầu tư, chuyên gia, lao động nước ngoài.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Gia hạn và cấp lại thẻ tạm trú do hết hạn hoặc thất lạc.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Tư vấn điều kiện pháp lý, rà soát tính hợp lệ hồ sơ bảo lãnh.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={() => onOpenServiceModal('trc')}
                className="flex-1 inline-flex items-center justify-between p-3 bg-[#f2f4f6] hover:bg-[#ceddff]/60 text-[#0048af] rounded-xl font-bold text-xs sm:text-sm active:bg-[#ceddff] transition-colors cursor-pointer"
              >
                <span>TÌM HIỂU THÊM VỀ THẺ TẠM TRÚ</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Service Card 3: Work Permit */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="HR and legal team reviewing work permit dossier in Ho Chi Minh City"
              src={WORK_PERMIT_IMAGE}
            />
            <span className="absolute top-3 right-3 bg-[#005952] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Hợp chuẩn lao động
            </span>
          </div>

          <div className="p-4 sm:p-5 flex flex-col gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-[#0048af]">
              GIẤY PHÉP LAO ĐỘNG (WORK PERMIT)
            </h3>

            <ul className="flex flex-col gap-2 text-sm text-[#191c1e]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Cấp mới giấy phép lao động cho chuyên gia, lao động kỹ thuật cao.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Gia hạn, cấp đổi và cấp lại giấy phép lao động hết hạn.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>Tư vấn thủ tục xác nhận trường hợp miễn giấy phép lao động.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={() => onOpenServiceModal('work-permit')}
                className="flex-1 inline-flex items-center justify-between p-3 bg-[#f2f4f6] hover:bg-[#ceddff]/60 text-[#0048af] rounded-xl font-bold text-xs sm:text-sm active:bg-[#ceddff] transition-colors cursor-pointer"
              >
                <span>TÌM HIỂU THÊM VỀ GIẤY PHÉP LAO ĐỘNG</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
