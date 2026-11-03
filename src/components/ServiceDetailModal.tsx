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
  const [activeTab, setActiveTab] = useState<'benefits' | 'eligibility' | 'docs'>('docs');
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0);

  if (!serviceId) return null;
  const service = SERVICES_DATA[serviceId];
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col z-10 animate-in zoom-in-95 duration-200">
        {/* Modal Header Image */}
        <div className="relative h-40 sm:h-48 w-full shrink-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
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
            onClick={() => setActiveTab('docs')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'docs'
                ? 'border-[#0048af] text-[#0048af]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">checklist</span>
            <span>Hồ sơ cần chuẩn bị</span>
          </button>
          <button
            onClick={() => setActiveTab('eligibility')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'eligibility'
                ? 'border-[#0048af] text-[#0048af]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">manage_accounts</span>
            <span>Đối tượng & Chức danh</span>
          </button>
          <button
            onClick={() => setActiveTab('benefits')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'benefits'
                ? 'border-[#0048af] text-[#0048af]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Quyền lợi & Đặc quyền</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col gap-4 text-sm text-[#191c1e]">
          {/* Quick specs pill row */}
          <div className="grid grid-cols-2 gap-2 bg-[#f2f4f6] p-3 rounded-2xl border border-gray-100">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Thời hạn hiệu lực</span>
              <span className="text-xs sm:text-sm font-bold text-[#0048af]">{service.validity}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500 uppercase tracking-wide">Thời gian xử lý dự kiến</span>
              <span className="text-xs sm:text-sm font-bold text-[#005952]">{service.processingTime}</span>
            </div>
          </div>

          {/* TAB 1: DOCS (HỒ SƠ CẦN CHUẨN BỊ) */}
          {activeTab === 'docs' && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-150">
              {/* If service has subcategories (like TRC: Lao động vs Thăm thân, or Work Permit) */}
              {service.docGroups && service.docGroups.length > 1 && (
                <div className="flex gap-2 p-1 bg-[#eceef0] rounded-xl overflow-x-auto">
                  {service.docGroups.map((group, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGroupIndex(idx)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        activeGroupIndex === idx
                          ? 'bg-white text-[#0048af] shadow-xs'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {group.badge || group.categoryTitle}
                    </button>
                  ))}
                </div>
              )}

              {/* Render current active doc group or general docs */}
              {service.docGroups && service.docGroups.length > 0 ? (
                (() => {
                  const currentGroup = service.docGroups[activeGroupIndex] || service.docGroups[0];
                  return (
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm sm:text-base text-[#0048af]">
                          {currentGroup.categoryTitle}
                        </h4>
                        <span className="text-[11px] text-gray-500 font-medium">
                          {currentGroup.docs.length} mục hồ sơ
                        </span>
                      </div>

                      {/* Documents Checklist */}
                      <div className="flex flex-col gap-2">
                        {currentGroup.docs.map((doc, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 bg-[#f7f9fb] p-3 rounded-xl border border-gray-200/80 hover:border-[#1e60d5]/40 transition-colors"
                          >
                            <span className="w-5 h-5 rounded-md bg-[#ceddff] text-[#0048af] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-[#191c1e] leading-relaxed">
                              {doc}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Photo / Info to submit via Zalo (If present) */}
                      {currentGroup.photoInfo && currentGroup.photoInfo.length > 0 && (
                        <div className="p-3.5 bg-[#89f5e7]/20 border border-[#89f5e7] rounded-xl flex flex-col gap-1.5 mt-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#005952]">
                            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                            <span>Thông tin cần cung cấp để chuyên viên soạn hồ sơ (chụp gửi qua Zalo):</span>
                          </div>
                          <ul className="flex flex-col gap-1 text-xs text-[#00201d] pl-5 list-disc">
                            {currentGroup.photoInfo.map((p, pIdx) => (
                              <li key={pIdx}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Mandatory Requirements / VNeID Notice */}
                      {currentGroup.specialRequirements && currentGroup.specialRequirements.length > 0 && (
                        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col gap-1 mt-1">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                            <span className="material-symbols-outlined text-[18px] text-amber-700">warning</span>
                            <span>Lưu ý quan trọng:</span>
                          </div>
                          {currentGroup.specialRequirements.map((req, rIdx) => (
                            <p key={rIdx} className="text-xs text-amber-800 leading-relaxed font-medium">
                              • {req}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Processing note */}
                      {currentGroup.processingTimeNote && (
                        <div className="p-3 bg-[#f2f4f6] rounded-xl text-xs text-gray-700 flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#0048af] text-[18px]">schedule</span>
                          <span className="font-medium">{currentGroup.processingTimeNote}</span>
                        </div>
                      )}
                    </div>
                  );
                })()
              ) : (
                /* Fallback simple docs list */
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-sm text-[#0048af] uppercase tracking-wider">
                    Danh mục tài liệu căn bản cần cung cấp:
                  </h4>
                  {service.requiredDocs.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 bg-[#f7f9fb] p-2.5 rounded-xl border border-gray-100"
                    >
                      <span className="material-symbols-outlined text-[#0048af] text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Visa5S Support Guarantee */}
              <div className="p-3 bg-[#ceddff]/40 rounded-xl border border-[#ceddff] text-xs text-[#0048af] flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">handshake</span>
                <span>
                  <strong>Hồ sơ công ty ký đóng dấu:</strong> Do chuyên viên Visa5S soạn thảo chuẩn chỉnh. Quý khách chỉ cần cung cấp các bản chụp/scan ban đầu.
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: ELIGIBILITY & POSITIONS */}
          {activeTab === 'eligibility' && (
            <div className="flex flex-col gap-3 animate-in fade-in duration-150">
              <h4 className="font-bold text-sm text-[#0048af] uppercase tracking-wider">
                Điều kiện và tiêu chuẩn theo đối tượng/chức danh:
              </h4>

              {/* Special highlight for Work Permit if applicable */}
              {service.id === 'work-permit' ? (
                <div className="flex flex-col gap-3">
                  <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0048af]">
                      <span className="material-symbols-outlined text-[18px]">school</span>
                      <span>Chức danh Chuyên gia (Expert):</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                      Yêu cầu <strong>Bằng Đại Học</strong> + <strong>&gt; 4 năm kinh nghiệm</strong> ở cùng lĩnh vực và chức danh cần xin (hợp pháp hóa lãnh sự 2 đầu văn bằng và xác nhận kinh nghiệm).
                    </p>
                  </div>

                  <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#005952]">
                      <span className="material-symbols-outlined text-[18px]">badge</span>
                      <span>Chức danh Phó Giám Đốc (Deputy Director):</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                      <strong>Không cần bằng cấp, không cần kinh nghiệm</strong> nhưng vị trí đó bắt buộc phải còn trống trên Giấy phép kinh doanh của doanh nghiệp.
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col gap-2 mt-1">
                {service.eligibility.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-[#f7f9fb] p-3 rounded-xl border border-gray-100">
                    <span className="material-symbols-outlined text-[#005952] text-[18px] shrink-0 mt-0.5">
                      person_check
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BENEFITS */}
          {activeTab === 'benefits' && (
            <div className="flex flex-col gap-2.5 animate-in fade-in duration-150">
              <h4 className="font-bold text-sm text-[#0048af] uppercase tracking-wider">
                Lợi ích nổi bật khi chọn Visa5S:
              </h4>
              <ul className="flex flex-col gap-2">
                {service.keyBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-[#f7f9fb] p-3 rounded-xl border border-gray-100">
                    <span className="material-symbols-outlined text-[#0048af] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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
