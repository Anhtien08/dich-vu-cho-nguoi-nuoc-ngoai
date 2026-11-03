import React, { useState } from 'react';
import { LOGO_URL, HOTLINE_PRIMARY } from '../data/visaData';
import { OfficeLocation } from '../types';

interface HeaderProps {
  offices: OfficeLocation[];
  onOpenConsultation: () => void;
  onOpenEditAddress: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  offices,
  onOpenConsultation,
  onOpenEditAddress,
}) => {
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f7f9fb]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="max-w-4xl mx-auto h-16 px-4 flex items-center justify-between gap-2">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src={LOGO_URL}
            alt="Visa5S - Hãy Đến Nơi Nào Bạn Muốn"
            className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenConsultation}
            className="h-10 md:h-11 px-3.5 md:px-4 bg-[#1e60d5] text-white rounded-xl font-semibold text-xs md:text-sm flex items-center justify-center shadow-[0_4px_14px_rgba(30,96,213,0.3)] hover:bg-[#0048af] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
          >
            NHẬN TƯ VẤN
          </button>

          {/* Quick Contact Menu / Profile avatar button */}
          <div className="relative">
            <button
              onClick={() => setShowContactDropdown(!showContactDropdown)}
              className="w-9 h-9 rounded-full bg-[#0048af] hover:bg-[#1e60d5] active:scale-95 text-white flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-sm"
              title="Thông tin liên hệ & Văn phòng"
              aria-label="Thông tin liên hệ & Văn phòng"
            >
              <span className="material-symbols-outlined text-[19px]">support_agent</span>
            </button>

            {/* Quick Dropdown Card */}
            {showContactDropdown && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowContactDropdown(false)}
                />
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0048af]">
                        Văn phòng & Hotline 24/7
                      </span>
                    </div>
                    <button
                      onClick={() => setShowContactDropdown(false)}
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  </div>

                  <div className="flex flex-col gap-2 mt-3 text-xs max-h-64 overflow-y-auto pr-1">
                    {offices.map((loc) => (
                      <div
                        key={loc.id}
                        className="p-2.5 rounded-xl bg-[#f2f4f6] hover:bg-[#ceddff]/40 text-[#191c1e] transition-colors flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-gray-900 text-[12px]">{loc.city}</p>
                          {loc.hotline && (
                            <a
                              href={`tel:${loc.hotline}`}
                              className="text-[#0048af] font-extrabold text-xs hover:underline flex items-center gap-1"
                            >
                              <span className="material-symbols-outlined text-[14px]">call</span>
                              <span>{loc.hotline}</span>
                            </a>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-600 leading-snug line-clamp-2">
                          {loc.address}
                        </p>
                      </div>
                    ))}

                    <a
                      href={`https://zalo.me/${HOTLINE_PRIMARY}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#89f5e7]/20 hover:bg-[#89f5e7]/40 text-[#005952] transition-colors"
                    >
                      <div>
                        <p className="font-bold">Nhắn tin Zalo trực tiếp</p>
                        <p className="text-[11px] text-[#005952]">Tư vấn ngay trong 5 phút</p>
                      </div>
                      <span className="material-symbols-outlined text-[#005952] text-[20px]">chat</span>
                    </a>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px]">
                    <button
                      onClick={() => {
                        setShowContactDropdown(false);
                        onOpenEditAddress();
                      }}
                      className="text-[#0048af] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">edit_location</span>
                      <span>Thay đổi địa chỉ</span>
                    </button>

                    <span className="text-gray-400">Visa5S Uy tín</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
