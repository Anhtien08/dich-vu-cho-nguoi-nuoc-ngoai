/**
 * Google Ads & Analytics Conversion Tracking Module for Visa5S
 * Configured with Google Ads ID: AW-16749372104
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * CẤU HÌNH GOOGLE ADS CONVERSION
 * Bạn có thể dễ dàng bổ sung hoặc thay đổi các Conversion Label tại đây.
 */
export const GOOGLE_ADS_CONFIG = {
  CONVERSION_ID: 'AW-16749372104',
  
  // 1. Chuyển đổi cuộc gọi điện thoại (Call Conversion)
  CALL_CONVERSION_LABEL: 'AW-16749372104/gpaSCP0vvo4bEMjF3LI-',
  
  // 2. Chuyển đổi tương tác Zalo (Zalo Click Conversion)
  // Điền Conversion Label từ Google Ads khi tạo xong mục tiêu chuyển đổi Zalo
  // Ví dụ: 'AW-16749372104/ABCxyz123'
  ZALO_CONVERSION_LABEL: '',
  
  // 3. Chuyển đổi gửi form đăng ký thành công (Lead Form Submission)
  // Điền Conversion Label từ Google Ads khi tạo xong mục tiêu chuyển đổi Form
  // Ví dụ: 'AW-16749372104/DEFuvw456'
  FORM_CONVERSION_LABEL: '',
};

// Chống ghi nhận chuyển đổi trùng lặp (Deduplication cache)
const recordedTicketIds = new Set<string>();
let lastCallTimestamp = 0;
let lastZaloTimestamp = 0;
const CLICK_DEBOUNCE_MS = 2000; // Ngăn chặn bắn nhiều lần do double-click

/**
 * 1. BẮN CHUYỂN ĐỔI GỌI ĐIỆN (Call Conversion)
 * Kích hoạt khi khách hàng click vào bất kỳ nút gọi điện nào (tel:).
 */
export function trackPhoneCall(options?: { phoneNumber?: string; location?: string }): void {
  const now = Date.now();
  if (now - lastCallTimestamp < CLICK_DEBOUNCE_MS) {
    return; // Chặn double click liên tục
  }
  lastCallTimestamp = now;

  const phone = options?.phoneNumber || 'Hotline';
  const location = options?.location || 'Unknown';

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // Gửi chuyển đổi Google Ads chính thức theo mã được cấp
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONFIG.CALL_CONVERSION_LABEL,
      event_category: 'Contact',
      event_label: phone,
      phone_number: phone,
      click_location: location,
    });

    // Đồng thời gửi sự kiện chuẩn gtag contact
    window.gtag('event', 'click_to_call', {
      event_category: 'Engagement',
      event_label: phone,
      click_location: location,
    });
  }
}

/**
 * 2. BẮN CHUYỂN ĐỔI ZALO (Zalo Click Conversion)
 * Kích hoạt khi khách hàng click vào bất kỳ nút liên hệ Zalo nào.
 */
export function trackZaloClick(options?: { location?: string }): void {
  const now = Date.now();
  if (now - lastZaloTimestamp < CLICK_DEBOUNCE_MS) {
    return; // Chặn double click liên tục
  }
  lastZaloTimestamp = now;

  const location = options?.location || 'Unknown';

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // Nếu đã cấu hình ZALO_CONVERSION_LABEL thì bắn conversion Google Ads
    if (GOOGLE_ADS_CONFIG.ZALO_CONVERSION_LABEL) {
      window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_CONFIG.ZALO_CONVERSION_LABEL,
        event_category: 'Contact',
        event_label: 'Zalo Chat',
        click_location: location,
      });
    }

    // Bắn sự kiện Google Tag tiêu chuẩn để thu thập dữ liệu
    window.gtag('event', 'contact_zalo', {
      event_category: 'Engagement',
      event_label: 'Zalo Chat Click',
      click_location: location,
    });
  }
}

/**
 * 3. BẮN CHUYỂN ĐỔI GỬI FORM THÀNH CÔNG (Lead Form Submission Conversion)
 * Chỉ kích hoạt khi form đã được validate đầy đủ và hệ thống xác nhận thành công.
 * Sử dụng transaction_id = ticketId để Google Ads tự động khử trùng lặp (deduplication).
 */
export function trackFormSubmission(
  ticketId: string,
  summary?: { service?: string; nationality?: string }
): void {
  if (!ticketId) return;

  // Chặn trùng lặp tuyệt đối: Mỗi ticketId chỉ được ghi nhận 1 lần duy nhất
  if (recordedTicketIds.has(ticketId)) {
    return;
  }
  recordedTicketIds.add(ticketId);

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // Nếu đã cấu hình FORM_CONVERSION_LABEL thì bắn conversion Google Ads kèm transaction_id
    if (GOOGLE_ADS_CONFIG.FORM_CONVERSION_LABEL) {
      window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_CONFIG.FORM_CONVERSION_LABEL,
        transaction_id: ticketId,
        event_category: 'Lead',
        event_label: summary?.service || 'General Service',
        service_type: summary?.service,
        nationality: summary?.nationality,
      });
    }

    // Gửi sự kiện generate_lead tiêu chuẩn của Google Ads / GA4
    window.gtag('event', 'generate_lead', {
      transaction_id: ticketId,
      event_category: 'Form',
      event_label: 'Consultation Form Submitted',
      service_type: summary?.service,
      nationality: summary?.nationality,
    });
  }
}
