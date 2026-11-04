import React, { useState, useEffect } from 'react';
import { ServiceType, ConsultationFormData } from '../types';
import { HOTLINE_PRIMARY } from '../data/visaData';
import { trackFormSubmission, trackZaloClick } from '../utils/tracking';

interface ConsultationFormSectionProps {
  preselectedService?: ServiceType;
}

export const ConsultationFormSection: React.FC<ConsultationFormSectionProps> = ({
  preselectedService,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    nationality: '',
    service: preselectedService || 'fast-track-arrival',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
      }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const keyMap: Record<string, keyof ConsultationFormData> = {
      'form-fullname': 'fullName',
      'form-phone': 'phone',
      'form-email': 'email',
      'form-nationality': 'nationality',
      'form-service': 'service',
      'form-notes': 'notes',
    };
    const key = keyMap[id];
    if (key) {
      setFormData((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleFillDemo = () => {
    setFormData({
      fullName: 'Michael Anderson',
      phone: '0911 909 686',
      email: 'm.anderson@investor-corp.com',
      nationality: 'Hoa Kỳ (United States)',
      service: 'fast-track-vip',
      notes: 'Chuyến bay VN602 từ Seoul (ICN) về Tân Sơn Nhất (SGN), hạ cánh dự kiến 17:30 ngày mai. 02 người lớn, 03 kiện hành lý ký gửi. Tên in bảng đón: MR. MICHAEL ANDERSON.',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedTicket = `V5S-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Track Google Ads Form Submission Conversion
      trackFormSubmission(generatedTicket, {
        service: formData.service,
        nationality: formData.nationality,
      });
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      nationality: '',
      service: 'fast-track-arrival',
      notes: '',
    });
  };

  const getServiceLabel = (serviceValue: string) => {
    switch (serviceValue) {
      case 'fast-track-arrival':
        return 'Fast Track Nhập Cảnh (Đón cửa máy bay)';
      case 'fast-track-vip':
        return 'VIP Fast Track Trọn Gói (Đón cửa + Hành lý + Xe)';
      case 'fast-track-departure':
        return 'Fast Track Xuất Cảnh (Departure Fast Track)';
      default:
        return 'Fast Track Sân Bay Tiêu Chuẩn';
    }
  };

  return (
    <section className="px-4 py-8 flex flex-col gap-4 max-w-4xl mx-auto w-full" id="consultation-form">
      <div className="bg-white p-5 sm:p-7 rounded-3xl shadow-md border border-gray-100 flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1.5 self-start text-[#0048af]">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                flight_takeoff
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Đặt dịch vụ ưu tiên
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
              ĐẶT DỊCH VỤ FAST TRACK SÂN BAY
            </h2>
            <p className="text-xs sm:text-sm text-[#424654]">
              Để lại thông tin chuyến bay để chuyên viên kiểm tra lịch trình, điều phối nhân sự đón tại sân bay và gửi báo giá ưu đãi.
            </p>
          </div>

          {!isSubmitted && (
            <button
              type="button"
              onClick={handleFillDemo}
              className="self-start text-xs font-semibold text-[#0048af] bg-[#ceddff]/40 hover:bg-[#ceddff] px-3 py-1.5 rounded-lg border border-[#ceddff] transition-all cursor-pointer whitespace-nowrap"
            >
              Điền mẫu nhanh (Demo)
            </button>
          )}
        </div>

        {!isSubmitted ? (
          <form className="flex flex-col gap-3.5" id="visa-contact-form" onSubmit={handleSubmit}>
            {/* Field 1: Full name */}
            <div className="flex flex-col gap-1">
              <label className="text-xs sm:text-sm text-[#191c1e] font-semibold" htmlFor="form-fullname">
                Họ và tên hành khách / Người đại diện *
              </label>
              <input
                className="w-full h-11 px-3.5 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all"
                id="form-fullname"
                placeholder="Ví dụ: Nguyễn Văn A hoặc John Doe"
                required
                type="text"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Field 2: Phone Number */}
            <div className="flex flex-col gap-1">
              <label className="text-xs sm:text-sm text-[#191c1e] font-semibold" htmlFor="form-phone">
                Số điện thoại liên hệ (Zalo / WhatsApp) *
              </label>
              <input
                className="w-full h-11 px-3.5 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all"
                id="form-phone"
                placeholder="0911 909 686 hoặc +84..."
                required
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Field 3: Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs sm:text-sm text-[#191c1e] font-semibold" htmlFor="form-email">
                Địa chỉ Email nhận xác nhận
              </label>
              <input
                className="w-full h-11 px-3.5 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all"
                id="form-email"
                placeholder="example@company.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Field 4: Nationality */}
            <div className="flex flex-col gap-1">
              <label className="text-xs sm:text-sm text-[#191c1e] font-semibold" htmlFor="form-nationality">
                Quốc tịch của hành khách *
              </label>
              <input
                className="w-full h-11 px-3.5 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all"
                id="form-nationality"
                placeholder="Ví dụ: Hàn Quốc, Nhật Bản, Mỹ, Đài Loan, v.v..."
                required
                type="text"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>

            {/* Field 5: Fast Track Package Selection */}
            <div className="flex flex-col gap-1">
              <label className="text-xs sm:text-sm text-[#191c1e] font-semibold" htmlFor="form-service">
                Gói dịch vụ Fast Track *
              </label>
              <div className="relative">
                <select
                  className="w-full h-11 px-3.5 pr-10 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none appearance-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all cursor-pointer font-medium"
                  id="form-service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="fast-track-arrival">Fast Track Nhập Cảnh (Đón tại cửa máy bay / ống lồng)</option>
                  <option value="fast-track-vip">VIP Fast Track Trọn Gói (Đón cửa + Lấy hành lý + Đưa ra xe)</option>
                  <option value="fast-track-departure">Fast Track Xuất Cảnh (Departure Fast Track)</option>
                  <option value="fast-track">Fast Track Tiêu Chuẩn</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 text-[#424654] pointer-events-none text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Field 6: Note / Flight Details */}
            <div className="flex flex-col gap-1">
              <label className="text-xs sm:text-sm text-[#191c1e] font-semibold" htmlFor="form-notes">
                Thông tin chuyến bay & Yêu cầu đón
              </label>
              <textarea
                className="w-full p-3.5 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none resize-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all"
                id="form-notes"
                placeholder="Nhập số hiệu chuyến bay (ví dụ: VN602, KE683...), ngày giờ hạ cánh, tên in trên bảng đón, số lượng khách, có hành lý ký gửi không..."
                rows={3}
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <p className="text-xs text-[#424654] leading-relaxed flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">lock</span>
              Thông tin của quý khách được bảo mật tuyệt đối theo chính sách bảo vệ dữ liệu khách hàng.
            </p>

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              className="w-full h-12 mt-1 bg-[#0048af] hover:bg-[#1e60d5] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,72,175,0.35)] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-70"
              type="submit"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>GỬI YÊU CẦU ĐẶT DỊCH VỤ</span>
                </>
              )}
            </button>
          </form>
        ) : (
          /* Feedback Banner on Success */
          <div
            className="p-6 bg-[#005952] text-white rounded-2xl flex flex-col gap-4 items-center text-center shadow-lg animate-in fade-in zoom-in-95 duration-200"
            id="form-success-banner"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px] text-[#89f5e7]">
                task_alt
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold">Gửi yêu cầu đặt dịch vụ thành công!</span>
              <p className="text-xs text-[#dae2ff] font-mono tracking-wider">
                Mã tiếp nhận đặt chỗ: <strong className="text-white text-sm font-bold">{ticketId}</strong>
              </p>
            </div>

            <div className="bg-white/10 p-3.5 rounded-xl text-xs text-left w-full flex flex-col gap-1.5">
              <p><strong>Khách hàng:</strong> {formData.fullName}</p>
              <p><strong>Số điện thoại:</strong> {formData.phone}</p>
              <p><strong>Quốc tịch:</strong> {formData.nationality}</p>
              <p><strong>Gói dịch vụ:</strong> {getServiceLabel(formData.service)}</p>
            </div>

            <p className="text-xs text-emerald-100 leading-relaxed">
              Bộ phận điều phối Fast Track của Visa5S sẽ liên hệ phản hồi quý khách trong thời gian sớm nhất (trong vòng 15 phút) qua số điện thoại/Zalo để chốt thông tin đón tại sân bay.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 w-full pt-1">
              <a
                href={`https://zalo.me/${HOTLINE_PRIMARY}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackZaloClick({ location: 'Form Success Banner - Chat Zalo' })}
                className="flex-1 h-10 bg-[#89f5e7] hover:bg-white text-[#00201d] rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Chat Zalo ngay</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 h-10 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
              >
                Đặt thêm chuyến bay khác
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
