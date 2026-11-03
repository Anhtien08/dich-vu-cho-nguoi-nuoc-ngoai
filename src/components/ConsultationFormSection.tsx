import React, { useState, useEffect } from 'react';
import { ServiceType, ConsultationFormData } from '../types';
import { HOTLINE_PRIMARY } from '../data/visaData';

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
    service: preselectedService || '',
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
      service: 'all',
      notes: 'Cần hỗ trợ Fast Track đón tại Tân Sơn Nhất chuyến bay VN602 hạ cánh ngày mai và tư vấn làm Thẻ tạm trú 2 năm diện Chuyên gia.',
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
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      nationality: '',
      service: '',
      notes: '',
    });
  };

  return (
    <section className="px-4 py-8 flex flex-col gap-4 max-w-4xl mx-auto w-full" id="consultation-form">
      <div className="bg-white p-5 sm:p-7 rounded-3xl shadow-md border border-gray-100 flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1.5 self-start text-[#0048af]">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                quickreply
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Tư vấn tận tâm
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
              NHẬN TƯ VẤN DỊCH VỤ TỪ VISA5S
            </h2>
            <p className="text-xs sm:text-sm text-[#424654]">
              Để lại thông tin để được chuyên viên kiểm tra hồ sơ chi tiết và gửi báo giá minh bạch.
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
                Họ và tên *
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
                Số điện thoại (Zalo/WhatsApp) *
              </label>
              <input
                className="w-full h-11 px-3.5 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all"
                id="form-phone"
                placeholder="0911 909 686 hoặc 0967 686 101"
                required
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Field 3: Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs sm:text-sm text-[#191c1e] font-semibold" htmlFor="form-email">
                Địa chỉ Email
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
                Quốc tịch của khách *
              </label>
              <input
                className="w-full h-11 px-3.5 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all"
                id="form-nationality"
                placeholder="Ví dụ: Hàn Quốc, Nhật Bản, Mỹ, v.v..."
                required
                type="text"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>

            {/* Field 5: Service Selection */}
            <div className="flex flex-col gap-1">
              <label className="text-xs sm:text-sm text-[#191c1e] font-semibold" htmlFor="form-service">
                Dịch vụ quan tâm *
              </label>
              <div className="relative">
                <select
                  className="w-full h-11 px-3.5 pr-10 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none appearance-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all cursor-pointer"
                  id="form-service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Chọn dịch vụ cần tư vấn
                  </option>
                  <option value="fast-track">Fast Track Sân bay (Đón tiễn ưu tiên)</option>
                  <option value="trc">Thẻ tạm trú (TRC - 1 đến 5 năm)</option>
                  <option value="work-permit">Giấy phép lao động (Work Permit)</option>
                  <option value="all">Tư vấn trọn gói cả 3 dịch vụ</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-3 text-[#424654] pointer-events-none text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Field 6: Note / Details */}
            <div className="flex flex-col gap-1">
              <label className="text-xs sm:text-sm text-[#191c1e] font-semibold" htmlFor="form-notes">
                Nội dung cần tư vấn cụ thể
              </label>
              <textarea
                className="w-full p-3.5 bg-[#f2f4f6] text-[#191c1e] text-sm rounded-xl outline-none resize-none border border-transparent focus:bg-white focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all"
                id="form-notes"
                placeholder="Nhập tóm tắt tình trạng hồ sơ hiện tại hoặc mã chuyến bay..."
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
                  <span>GỬI YÊU CẦU TƯ VẤN</span>
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
              <span className="text-xl font-bold">Gửi yêu cầu thành công!</span>
              <p className="text-xs text-[#dae2ff] font-mono tracking-wider">
                Mã tiếp nhận: <strong className="text-white text-sm font-bold">{ticketId}</strong>
              </p>
            </div>

            <div className="bg-white/10 p-3.5 rounded-xl text-xs text-left w-full flex flex-col gap-1.5">
              <p><strong>Khách hàng:</strong> {formData.fullName}</p>
              <p><strong>Số điện thoại:</strong> {formData.phone}</p>
              <p><strong>Quốc tịch:</strong> {formData.nationality}</p>
              <p>
                <strong>Dịch vụ:</strong>{' '}
                {formData.service === 'fast-track'
                  ? 'Fast Track Sân bay'
                  : formData.service === 'trc'
                  ? 'Thẻ tạm trú (TRC)'
                  : formData.service === 'work-permit'
                  ? 'Giấy phép lao động'
                  : 'Trọn gói 3 dịch vụ'}
              </p>
            </div>

            <p className="text-xs text-emerald-100 leading-relaxed">
              Chuyên viên Visa5S sẽ liên hệ phản hồi quý khách trong thời gian sớm nhất (thường trong vòng 15 phút) qua số điện thoại/Zalo.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 w-full pt-1">
              <a
                href={`https://zalo.me/${HOTLINE_PRIMARY}`}
                target="_blank"
                rel="noopener noreferrer"
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
                Gửi yêu cầu khác
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
