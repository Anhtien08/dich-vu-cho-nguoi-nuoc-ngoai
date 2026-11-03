import React, { useState } from 'react';
import { OfficeLocation } from '../types';
import { DEFAULT_OFFICES } from '../data/visaData';

interface EditAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  offices: OfficeLocation[];
  onSaveOffices: (newOffices: OfficeLocation[]) => void;
}

export const EditAddressModal: React.FC<EditAddressModalProps> = ({
  isOpen,
  onClose,
  offices,
  onSaveOffices,
}) => {
  const [draftOffices, setDraftOffices] = useState<OfficeLocation[]>(offices);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync draft when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setDraftOffices(offices);
      setSavedSuccess(false);
    }
  }, [isOpen, offices]);

  if (!isOpen) return null;

  const handleFieldChange = (id: string, field: keyof OfficeLocation, value: string | boolean) => {
    setDraftOffices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddOffice = () => {
    const newId = `office-${Date.now()}`;
    const newBranch: OfficeLocation = {
      id: newId,
      city: 'Văn Phòng Mới',
      address: '',
      hotline: '0911 909 686',
      isHeadquarter: false,
    };
    setDraftOffices((prev) => [...prev, newBranch]);
  };

  const handleDeleteOffice = (id: string) => {
    if (draftOffices.length <= 1) {
      alert('Hệ thống cần duy trì ít nhất một địa chỉ văn phòng.');
      return;
    }
    setDraftOffices((prev) => prev.filter((item) => item.id !== id));
  };

  const handleResetDefaults = () => {
    setDraftOffices(DEFAULT_OFFICES);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveOffices(draftOffices);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col z-10 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0048af] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px] text-[#dae2ff]">
                edit_location_alt
              </span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">Thay Đổi Địa Chỉ Văn Phòng</h3>
              <p className="text-xs text-blue-100">Cập nhật trụ sở, các chi nhánh và hotline của Visa5S</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4">
          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
              <span>Đã lưu và cập nhật địa chỉ văn phòng thành công!</span>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {draftOffices.map((office, idx) => (
              <div
                key={office.id}
                className="bg-[#f7f9fb] p-4 rounded-2xl border border-gray-200 flex flex-col gap-3 relative hover:border-[#1e60d5]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#ceddff] text-[#0048af] text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                      {office.isHeadquarter ? 'Trụ Sở Chính' : `Chi Nhánh ${idx}`}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-[11px] font-semibold text-gray-600 flex items-center gap-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={office.isHeadquarter}
                        onChange={(e) => handleFieldChange(office.id, 'isHeadquarter', e.target.checked)}
                        className="rounded text-[#0048af] focus:ring-0"
                      />
                      <span>Trụ sở chính</span>
                    </label>

                    {draftOffices.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleDeleteOffice(office.id)}
                        className="text-red-500 hover:text-red-700 text-xs p-1 cursor-pointer"
                        title="Xóa chi nhánh này"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Office Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#191c1e]">Tên chi nhánh / Văn phòng *</label>
                  <input
                    type="text"
                    required
                    value={office.city}
                    onChange={(e) => handleFieldChange(office.id, 'city', e.target.value)}
                    placeholder="Ví dụ: Trụ Sở TP. Hồ Chí Minh"
                    className="w-full h-10 px-3 bg-white text-sm rounded-xl border border-gray-200 outline-none focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5]"
                  />
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#191c1e]">Địa chỉ chi tiết *</label>
                  <input
                    type="text"
                    required
                    value={office.address}
                    onChange={(e) => handleFieldChange(office.id, 'address', e.target.value)}
                    placeholder="Ví dụ: 370 Đường 3 Tháng 2, Phường 12, Quận 10, TP. Hồ Chí Minh"
                    className="w-full h-10 px-3 bg-white text-sm rounded-xl border border-gray-200 outline-none focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5]"
                  />
                </div>

                {/* Hotline */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#191c1e]">Hotline liên hệ</label>
                  <input
                    type="text"
                    value={office.hotline}
                    onChange={(e) => handleFieldChange(office.id, 'hotline', e.target.value)}
                    placeholder="Ví dụ: 0967 686 101"
                    className="w-full h-10 px-3 bg-white text-sm rounded-xl border border-gray-200 outline-none focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleAddOffice}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0048af] hover:text-[#1e60d5] bg-[#ceddff]/40 hover:bg-[#ceddff] px-3 py-2 rounded-xl border border-[#ceddff] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>Thêm văn phòng / Chi nhánh mới</span>
            </button>

            <button
              type="button"
              onClick={handleResetDefaults}
              className="text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
            >
              Khôi phục 3 địa chỉ mặc định
            </button>
          </div>

          {/* Footer buttons */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-end gap-3 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#0048af] hover:bg-[#1e60d5] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md active:scale-98 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">save</span>
              <span>Lưu Thay Đổi</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
