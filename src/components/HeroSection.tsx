import React from 'react';
import { HERO_IMAGE, HOTLINE_PRIMARY, HOTLINE_HCM } from '../data/visaData';

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="relative px-4 pt-4 pb-6 flex flex-col gap-4 max-w-4xl mx-auto w-full">
      {/* Authority Pill Badge */}
      <div className="inline-flex items-center gap-1.5 self-start bg-[#ceddff] text-[#0b1b34] px-3.5 py-1.5 rounded-full shadow-sm">
        <span className="material-symbols-outlined text-[17px] text-[#0048af]" style={{ fontVariationSettings: "'FILL' 1" }}>
          verified_user
        </span>
        <span className="text-xs font-semibold tracking-wide">
          Dịch vụ hỗ trợ người nước ngoài tại Việt Nam
        </span>
      </div>

      {/* Main Title & Subtitles */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0048af] tracking-tight leading-tight">
          DỊCH VỤ FAST TRACK – THẺ TẠM TRÚ – GIẤY PHÉP LAO ĐỘNG
        </h1>
        <p className="text-base sm:text-lg font-semibold text-[#384762] leading-snug">
          Giải pháp hỗ trợ thủ tục cho người nước ngoài làm việc và lưu trú tại Việt Nam.
        </p>
        <p className="text-sm text-[#424654] leading-relaxed">
          Visa5S đồng hành cùng cá nhân và doanh nghiệp trong quá trình chuẩn bị hồ sơ, thực hiện thủ tục giấy phép lao động, thẻ tạm trú và hỗ trợ Fast Track sân bay.
        </p>
      </div>

      {/* Executive Image Backdrop Card */}
      <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden shadow-md group">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt="Modern executive glass terminal at Tan Son Nhat airport in Vietnam with international business travelers"
          src={HERO_IMAGE}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1b34] via-[#0b1b34]/60 to-transparent flex flex-col justify-end p-4 sm:p-6">
          <span className="text-[11px] sm:text-xs font-semibold text-[#8df9ea] uppercase tracking-wider mb-1">
            Hạ cánh an tâm • Thủ tục chuẩn mực
          </span>
          <span className="text-base sm:text-xl text-white font-bold leading-snug">
            Đồng hành pháp lý cùng doanh nhân & chuyên gia
          </span>
        </div>
      </div>

      {/* 4 Value Badges Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-2.5 shadow-sm border border-black/5 hover:border-[#1e60d5]/30 transition-all">
          <span className="material-symbols-outlined text-[#0048af] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            history_edu
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#191c1e]">
            Hơn 10 năm kinh nghiệm
          </span>
        </div>

        <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-2.5 shadow-sm border border-black/5 hover:border-[#1e60d5]/30 transition-all">
          <span className="material-symbols-outlined text-[#0048af] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            assignment_turned_in
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#191c1e]">
            Tư vấn theo hồ sơ thực tế
          </span>
        </div>

        <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-2.5 shadow-sm border border-black/5 hover:border-[#00746a]/30 transition-all">
          <span className="material-symbols-outlined text-[#005952] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            price_check
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#191c1e]">
            Báo giá minh bạch
          </span>
        </div>

        <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-2.5 shadow-sm border border-black/5 hover:border-[#00746a]/30 transition-all">
          <span className="material-symbols-outlined text-[#005952] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            corporate_fare
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#191c1e]">
            Cá nhân & Doanh nghiệp
          </span>
        </div>
      </div>

      {/* Hero CTAs */}
      <div className="flex flex-col sm:flex-row gap-2.5 mt-1">
        <button
          onClick={onScrollToForm}
          className="flex-1 h-12 bg-[#1e60d5] hover:bg-[#0048af] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(30,96,213,0.35)] active:scale-[0.99] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">edit_calendar</span>
          <span>NHẬN TƯ VẤN NGAY</span>
        </button>

        <a
          href={`tel:${HOTLINE_PRIMARY}`}
          className="flex-1 h-12 bg-white hover:bg-[#f2f4f6] text-[#0048af] border border-[#0048af]/20 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:bg-gray-100 transition-colors text-center"
        >
          <span className="material-symbols-outlined text-[20px] text-[#0048af]">phone_in_talk</span>
          <span>HOTLINE: {HOTLINE_PRIMARY} - {HOTLINE_HCM}</span>
        </a>
      </div>
    </section>
  );
};
