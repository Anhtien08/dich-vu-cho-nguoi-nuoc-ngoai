import React from 'react';
import { HERO_IMAGE, HOTLINE_PRIMARY, HOTLINE_HCM } from '../data/visaData';
import { trackPhoneCall } from '../utils/tracking';

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToForm }) => {
  return (
    <section className="relative px-4 pt-4 pb-6 flex flex-col gap-4 max-w-4xl mx-auto w-full">
      {/* Authority Pill Badge */}
      <div className="inline-flex items-center gap-1.5 self-start bg-[#ceddff] text-[#0b1b34] px-3.5 py-1.5 rounded-full shadow-sm">
        <span className="material-symbols-outlined text-[17px] text-[#0048af]" style={{ fontVariationSettings: "'FILL' 1" }}>
          flight_takeoff
        </span>
        <span className="text-xs font-semibold tracking-wide">
          Dịch vụ Fast Track đón tiễn ưu tiên tại sân bay Việt Nam
        </span>
      </div>

      {/* Main Title & Subtitles */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0048af] tracking-tight leading-tight">
          DỊCH VỤ FAST TRACK SÂN BAY – ĐÓN TIỄN ƯU TIÊN
        </h1>
        <p className="text-base sm:text-lg font-semibold text-[#384762] leading-snug">
          Giải pháp hỗ trợ thủ tục nhập cảnh nhanh chóng, đón rước chuyên nghiệp tại 4 sân bay quốc tế Việt Nam.
        </p>
        <p className="text-sm text-[#424654] leading-relaxed">
          Visa5S đón khách ngay tại cửa ra máy bay (cửa ống lồng), dẫn lối qua làn ưu tiên không phải xếp hàng, hỗ trợ dán tem thị thực (Visa On Arrival) và nhận hành lý ký gửi đưa ra tận xe.
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
            Hạ cánh an tâm • Lối đi ưu tiên thông thoáng
          </span>
          <span className="text-base sm:text-xl text-white font-bold leading-snug">
            Đón tiễn VIP chuyên nghiệp cho doanh nhân & chuyên gia
          </span>
        </div>
      </div>

      {/* 4 Value Badges Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-2.5 shadow-sm border border-black/5 hover:border-[#1e60d5]/30 transition-all">
          <span className="material-symbols-outlined text-[#0048af] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            airline_stops
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#191c1e]">
            Đón ngay cửa máy bay
          </span>
        </div>

        <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-2.5 shadow-sm border border-black/5 hover:border-[#1e60d5]/30 transition-all">
          <span className="material-symbols-outlined text-[#0048af] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            speed
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#191c1e]">
            Làn ưu tiên không xếp hàng
          </span>
        </div>

        <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-2.5 shadow-sm border border-black/5 hover:border-[#00746a]/30 transition-all">
          <span className="material-symbols-outlined text-[#005952] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            price_check
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#191c1e]">
            Báo giá minh bạch trọn gói
          </span>
        </div>

        <div className="bg-[#f2f4f6] p-3 rounded-xl flex items-center gap-2.5 shadow-sm border border-black/5 hover:border-[#00746a]/30 transition-all">
          <span className="material-symbols-outlined text-[#005952] text-[22px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
            connecting_airports
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#191c1e]">
            4 Sân bay: SGN, HAN, DAD, CXR
          </span>
        </div>
      </div>

      {/* Hero CTAs */}
      <div className="flex flex-col sm:flex-row gap-2.5 mt-1">
        <button
          onClick={onScrollToForm}
          className="flex-1 h-12 bg-[#1e60d5] hover:bg-[#0048af] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(30,96,213,0.35)] active:scale-[0.99] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">flight_land</span>
          <span>ĐẶT DỊCH VỤ FAST TRACK NGAY</span>
        </button>

        <a
          href={`tel:${HOTLINE_PRIMARY}`}
          onClick={() => trackPhoneCall({ phoneNumber: HOTLINE_PRIMARY, location: 'Hero Section Hotline Button' })}
          className="flex-1 h-12 bg-white hover:bg-[#f2f4f6] text-[#0048af] border border-[#0048af]/20 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:bg-gray-100 transition-colors text-center"
        >
          <span className="material-symbols-outlined text-[20px] text-[#0048af]">phone_in_talk</span>
          <span>HOTLINE 24/7: {HOTLINE_PRIMARY} - {HOTLINE_HCM}</span>
        </a>
      </div>
    </section>
  );
};
