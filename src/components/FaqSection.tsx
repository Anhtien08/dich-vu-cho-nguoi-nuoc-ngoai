import React, { useState } from 'react';
import { FAQ_LIST } from '../data/visaData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Open the first by default for quick clarity
  });
  const [filterQuery, setFilterQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = FAQ_LIST.filter(
    (faq) =>
      faq.question.toLowerCase().includes(filterQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(filterQuery.toLowerCase()) ||
      (faq.category && faq.category.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <section className="px-4 py-8 bg-[#f2f4f6] flex flex-col gap-5 w-full" id="faq-accordion-group">
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-[#0048af] uppercase tracking-wider">
            Hỏi đáp trực tiếp
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191c1e]">
            CÂU HỎI THƯỜNG GẶP (FAQ)
          </h2>
          <p className="text-sm text-[#424654]">
            Giải đáp những thắc mắc phổ biến nhất về thủ tục và dịch vụ của Visa5S.
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative">
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Tìm kiếm câu hỏi (thời hạn, hồ sơ, giấy phép lao động...)"
            className="w-full h-11 pl-10 pr-4 bg-white rounded-xl text-sm border border-gray-200 focus:outline-none focus:border-[#1e60d5] focus:ring-1 focus:ring-[#1e60d5] transition-all"
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[20px]">
            search
          </span>
          {filterQuery && (
            <button
              onClick={() => setFilterQuery('')}
              className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 font-semibold"
            >
              Xóa
            </button>
          )}
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-2.5">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 hover:bg-gray-50/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    {faq.category && (
                      <span className="hidden sm:inline-block text-[11px] font-semibold text-[#0048af] bg-[#ceddff]/40 px-2 py-0.5 rounded-md shrink-0">
                        {faq.category}
                      </span>
                    )}
                    <span className="text-sm sm:text-base font-bold text-[#191c1e]">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`material-symbols-outlined text-[#0048af] text-[22px] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-[#424654] leading-relaxed border-t border-gray-50">
                    <p className="mt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="bg-white p-6 rounded-2xl text-center text-sm text-gray-500">
              Không tìm thấy câu hỏi phù hợp với từ khóa &ldquo;{filterQuery}&rdquo;. Quý khách vui lòng liên hệ hotline để được giải đáp trực tiếp!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
