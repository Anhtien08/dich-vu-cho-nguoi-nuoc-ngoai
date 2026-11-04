import React from 'react';
import { HOTLINE_PRIMARY } from '../data/visaData';
import { trackPhoneCall, trackZaloClick } from '../utils/tracking';

interface BottomNavProps {
  onScrollToForm: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ onScrollToForm }) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-white/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(15,31,56,0.12)] border-t border-gray-100">
      <div className="max-w-4xl mx-auto h-20 px-4 flex items-center justify-between gap-2.5">
        {/* Hotline Call Button */}
        <a
          href={`tel:${HOTLINE_PRIMARY}`}
          data-path="hotline-call"
          onClick={() => trackPhoneCall({ phoneNumber: HOTLINE_PRIMARY, location: 'Sticky Bottom Nav Hotline Button' })}
          className="flex items-center gap-2 text-[#424654] hover:text-[#0048af] transition-colors min-h-[44px] px-1 py-1"
        >
          <div className="w-11 h-11 rounded-full bg-[#ceddff] text-[#0048af] flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">call</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Hotline 24/7
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-[#191c1e] whitespace-nowrap">
              {HOTLINE_PRIMARY}
            </span>
          </div>
        </a>

        {/* Zalo Button */}
        <a
          href={`https://zalo.me/${HOTLINE_PRIMARY}`}
          target="_blank"
          rel="noopener noreferrer"
          data-path="zalo-chat"
          onClick={() => trackZaloClick({ location: 'Sticky Bottom Nav Zalo Button' })}
          className="flex flex-col items-center justify-center min-w-[50px] min-h-[44px] text-[#424654] hover:text-[#005952] transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-[#89f5e7]/40 text-[#005952] flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]">chat</span>
          </div>
          <span className="text-[11px] font-bold text-[#424654] mt-0.5">Zalo</span>
        </a>

        {/* Primary CTA Button */}
        <button
          onClick={onScrollToForm}
          data-path="tu-van-ngay"
          className="flex-1 h-12 bg-[#0048af] hover:bg-[#1e60d5] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,72,175,0.3)] active:scale-[0.98] transition-all min-h-[44px] px-3 sm:px-4 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">support_agent</span>
          <span className="whitespace-nowrap">Tư vấn ngay</span>
        </button>
      </div>
    </nav>
  );
};
