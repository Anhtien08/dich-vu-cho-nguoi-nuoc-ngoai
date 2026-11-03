import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/visaData';
import { ServiceType } from '../types';

interface ServiceDetailModalProps {
  serviceId: 'fast-track' | 'trc' | 'work-permit' | null;
  onClose: () => void;
  onSelectServiceAndForm: (service: ServiceType) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceId,
  onClose,
  onSelectServiceAndForm,
}) => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'eligibility' | 'docs'>('benefits');

  if (!serviceId) return null;
  const service = SERVICES_DATA[serviceId];
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10 animate-in zoom-in-95 duration-200">
        {/* Modal Header Image */}
        <div className="relative h-44 sm:h-52 w-full shrink-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
            <span className={`inline-flex self-start ${service.badgeColor} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1.5 shadow-sm`}>
              {service.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 line-clamp-1">
              {service.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
            aria-label="Đóng"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-gray-100 bg-[#f7f9fb] px-4 pt-2 shrink-0 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('benefits')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'benefits'
                ? 'border-[#0048af] text-[#0048af]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Quyền lợi & Đặc quyền
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'eligibility'
                ? 'border-[#0048af] text-[#0048af]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Đối tượng áp dụng
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'docs'
                ? 'border-[#0048af] text-[#0048af]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Hồ sơ cần chuẩn bị
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col gap-4 text-sm text-[#191c1e]">
          {/* Quick specs pill row */}
          <div className="grid grid-cols-2 gap-2 bg-[#f2f4f6] p-3 rounded-2xl">
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-gray-500 uppercase">Thời hạn hiệu lực</span>
              <span className="text-xs sm:text-sm font-bold text-[#0048af]">{service.validity}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold text-gray-500 uppercase">Thời gian xử lý</span>
              <span className="text-xs sm:text-sm font-bold text-[#005952]">{service.processingTime}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#424654] leading-relaxed">
            {service.summary}
          </p>

          {activeTab === 'benefits' && (
            <div className="flex flex-col gap-2.5 animate-in fade-in duration-150">
              <h4 className="font-bold text-sm text-[#0048af] uppercase tracking-wider">
                Lợi ích nổi bật khi chọn Visa5S:
              </h4>
              <ul className="flex flex-col gap-2">
                {service.keyBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#f7f9fb] p-2.5 rounded-xl border border-gray-100">
                    <span className="material-symbols-outlined text-[#0048af] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'eligibility' && (
            <div className="flex flex-col gap-2.5 animate-in fade-in duration-150">
              <h4 className="font-bold text-sm text-[#0048af] uppercase tracking-wider">
                Điều kiện và đối tượng khách hàng:
              </h4>
              <ul className="flex flex-col gap-2">
                {service.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#f7f9fb] p-2.5 rounded-xl border border-gray-100">
                    <span className="material-symbols-outlined text-[#005952] text-[18px] shrink-0 mt-0.5">
                      person_check
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="flex flex-col gap-2.5 animate-in fade-in duration-150">
              <h4 className="font-bold text-sm text-[#0048af] uppercase tracking-wider">
                Danh mục tài liệu căn bản cần cung cấp:
              </h4>
              <ul className="flex flex-col gap-2">
                {service.requiredDocs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#f7f9fb] p-2.5 rounded-xl border border-gray-100">
                    <span className="material-symbols-outlined text-[#1e60d5] text-[18px] shrink-0 mt-0.5">
                      description
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800 flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-amber-600 shrink-0">info</span>
                <span>
                  Visa5S hỗ trợ trọn gói dịch thuật công chứng, hợp pháp hóa lãnh sự và liên hệ cơ quan cấp phép. Quý khách chỉ cần cung cấp bản scan/chụp rõ nét.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Đóng
          </button>

          <button
            onClick={() => {
              onSelectServiceAndForm(service.id);
              onClose();
            }}
            className="px-5 py-2.5 bg-[#0048af] hover:bg-[#1e60d5] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
            <span>Đăng ký tư vấn dịch vụ này</span>
          </button>
        </div>
      </div>
    </div>
  );
};
