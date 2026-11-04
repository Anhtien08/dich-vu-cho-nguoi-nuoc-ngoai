import React, { useState } from 'react';
import {
  LOGO_URL,
  COMPANY_NAME,
  COMPANY_SLOGAN,
  COMPANY_EMAIL,
  HOTLINE_DISPLAY,
  HOTLINE_PRIMARY,
  HOTLINE_SECONDARY,
} from '../data/visaData';
import { OfficeLocation } from '../types';
import { trackPhoneCall } from '../utils/tracking';

interface FooterSectionProps {
  offices: OfficeLocation[];
  onScrollToForm: () => void;
  onOpenServiceModal: (service: any) => void;
  onOpenEditAddress: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  offices,
  onScrollToForm,
  onOpenServiceModal,
  onOpenEditAddress,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <footer className="px-4 pt-8 pb-28 sm:pb-24 bg-[#0b1b34] text-white flex flex-col gap-6 w-full mt-6">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-6">
        {/* Brand Header */}
        <div className="flex flex-col gap-3">
          <div className="p-2 bg-white rounded-xl inline-flex self-start shadow-sm">
            <img
              src={LOGO_URL}
              alt="Visa5S - Hãy Đến Nơi Nào Bạn Muốn"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>
          <p className="text-xs sm:text-sm text-[#c3c6d6] leading-relaxed max-w-2xl">
            Đơn vị chuyên sâu đồng hành hỗ trợ thủ tục cư trú, làm việc và dịch vụ ưu tiên đón tiễn sân bay cho người nước ngoài tại Việt Nam.
          </p>
        </div>

        {/* EXACT CARD DESIGN AS USER ATTACHED IMAGE (image_19eaedc3.png) */}
        <div className="bg-[#f0f7fb] text-[#0d335d] p-5 sm:p-7 rounded-2xl shadow-xl border border-[#b8dcf2] flex flex-col gap-4 relative overflow-hidden">
          {/* Top slogan in cursive style */}
          <div className="text-center">
            <span className="font-serif italic text-base sm:text-lg text-[#386b9c] tracking-wide">
              &ldquo;{COMPANY_SLOGAN}&rdquo;
            </span>
          </div>

          {/* Company Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#cfe5f5] pb-3">
            <h3 className="text-base sm:text-lg font-black text-[#0d335d] tracking-tight uppercase">
              {COMPANY_NAME}
            </h3>

            <button
              onClick={onOpenEditAddress}
              className="inline-flex items-center gap-1.5 self-start text-xs font-bold text-[#0048af] hover:text-[#1e60d5] bg-white hover:bg-[#dae2ff]/50 px-2.5 py-1.5 rounded-lg border border-[#b8dcf2] transition-all cursor-pointer shadow-xs"
              title="Chỉnh sửa hoặc thay đổi địa chỉ"
            >
              <span className="material-symbols-outlined text-[16px]">edit_location</span>
              <span>Thay đổi địa chỉ</span>
            </button>
          </div>

          {/* List of Offices from Image */}
          <div className="flex flex-col gap-3 text-sm sm:text-base font-medium text-[#0d335d]">
            {offices.map((loc) => {
              const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                loc.address
              )}`;

              return (
                <div key={loc.id} className="flex items-start gap-2.5 group">
                  <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                    location_on
                  </span>
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <p className="leading-snug">
                      <strong className="font-bold text-[#0d335d]">{loc.city}:</strong>{' '}
                      <span className="text-[#134273]">{loc.address}</span>
                    </p>

                    <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0">
                      <button
                        onClick={() => handleCopy(loc.id, loc.address)}
                        className="text-[11px] font-semibold text-[#0048af] hover:underline flex items-center gap-0.5 bg-white/70 px-2 py-0.5 rounded border border-[#cfe5f5] cursor-pointer"
                        title="Sao chép địa chỉ"
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          {copiedId === loc.id ? 'check' : 'content_copy'}
                        </span>
                        <span>{copiedId === loc.id ? 'Đã chép' : 'Sao chép'}</span>
                      </button>

                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-[#005952] hover:underline flex items-center gap-0.5 bg-white/70 px-2 py-0.5 rounded border border-[#cfe5f5]"
                        title="Xem trên Google Maps"
                      >
                        <span className="material-symbols-outlined text-[13px]">map</span>
                        <span>Bản đồ</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hotline & Email Rows */}
          <div className="flex flex-col gap-2.5 pt-3 border-t border-[#cfe5f5] text-sm sm:text-base font-medium">
            {/* Hotline */}
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                phone_in_talk
              </span>
              <p className="leading-snug">
                <strong className="font-bold text-[#0d335d]">Hotline:</strong>{' '}
                <a
                  href={`tel:${HOTLINE_PRIMARY}`}
                  onClick={() => trackPhoneCall({ phoneNumber: HOTLINE_PRIMARY, location: 'Footer Address Card Hotline' })}
                  className="text-[#0048af] font-bold hover:underline"
                >
                  {HOTLINE_DISPLAY}
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#0048af] text-[20px] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                mail
              </span>
              <p className="leading-snug">
                <strong className="font-bold text-[#0d335d]">Email:</strong>{' '}
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-[#0048af] font-bold hover:underline"
                >
                  {COMPANY_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 pt-2 border-t border-gray-700/60">
          <span className="text-xs font-bold text-[#dae2ff] uppercase tracking-wider">
            Hỗ trợ nhanh
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-300">
            <button
              onClick={() => onOpenServiceModal('fast-track-arrival')}
              className="hover:text-[#89f5e7] transition-colors cursor-pointer text-left"
            >
              Fast Track Nhập Cảnh
            </button>
            <button
              onClick={() => onOpenServiceModal('fast-track-vip')}
              className="hover:text-[#89f5e7] transition-colors cursor-pointer text-left"
            >
              VIP Fast Track Trọn Gói
            </button>
            <button
              onClick={() => onOpenServiceModal('fast-track-departure')}
              className="hover:text-[#89f5e7] transition-colors cursor-pointer text-left"
            >
              Fast Track Xuất Cảnh
            </button>
            <a href="#fast-track-detail" className="hover:text-[#89f5e7] transition-colors">
              Điểm Đón 4 Sân Bay (SGN/HAN/DAD/CXR)
            </a>
            <a href="#faq-accordion-group" className="hover:text-[#89f5e7] transition-colors">
              Câu Hỏi Thường Gặp
            </a>
            <button
              onClick={onScrollToForm}
              className="hover:text-[#89f5e7] transition-colors cursor-pointer text-left font-semibold text-white"
            >
              Đặt Dịch Vụ Fast Track
            </button>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="flex flex-col gap-2 pt-3 border-t border-gray-700/60">
          <p className="text-[11px] sm:text-xs text-[#c3c6d6] leading-relaxed">
            Lưu ý: Visa5S cung cấp dịch vụ tư vấn và hỗ trợ thủ tục hồ sơ. Thẩm quyền xét duyệt và cấp phép thuộc về các cơ quan quản lý nhà nước có thẩm quyền tại Việt Nam.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-gray-400 gap-2 pt-1">
            <span>© Visa5S. Bản quyền thuộc về {COMPANY_NAME}.</span>
            <span>Chính sách bảo mật thông tin khách hàng</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
