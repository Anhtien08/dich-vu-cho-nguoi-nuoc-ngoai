import { FaqItem, ServiceDetail, OfficeLocation } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmCFjn9VZASBw1NxVo66cjI23tS0DPH6n6Bsda4J4jlNGNirh4JK-gh-IJ0elYdPO1AcyOC7AYuMcG1RewrtdA-IA7baj9cTpuLmJu6iMR9rCBij1SLafoQnifjzvSZNi-bwRPcdIhHJp4C2dsOX2u0pvRFtRl3ZuW3jz9n39vrAVUohsZaVWCNzFY-ePkn-Y0TLIDFArTX48VKlcn9NvAIunFGo35vEUoI1c3zXYIWGI98lI3FOI2yw';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe0agpUsmYM3KcbI2qxzEoYYAPcNqDGNwpbhzGZAPa2Ng_AJwEGY6becTBIqcDiTNvs3APZFn4EEojTO6VnYdbJ63bWKryKhbDwEnGlX0gB_othpFiMsVjd3dmkJd0D4ee6-OKD-7HRxMA90xnZ0orbp_HX48rtRSfjjLypCnilUI1Kc-6QBqDHtyjjVuyOe-0uvP44slPI5cEOmL1ljPThZjpFac7BG_3MNn6l-xX';

export const FAST_TRACK_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKpx_FXwpR5k02O-HgVkd_iZQ3z2Fio7D6NnoKFXuCEJLPRKodoHidWVobONs3A7awaqQ3D7SHMvpBUzkjVKstPvFhccrbbjXucc95ngIH_9WQ_ezJat5DcKw0jWOMwQgYZsZC4fg6yhAhnIAKBcXgQGXT401d5438KSTsF39Ig9R8oTh6hT3ZsRT0DbZ_yI6x9HlGtt35SJZDQ1DPyNevhv4sfiJOBkQ5DIRychYa';

export const COMPANY_NAME = 'VISA5S - CÔNG TY TƯ VẤN ĐẦU TƯ ASIA BLUE SKY';
export const COMPANY_SLOGAN = 'Hãy Đến Nơi Nào Bạn Muốn';
export const COMPANY_EMAIL = 'info@visa5s.com.vn';

export const HOTLINE_PRIMARY = '0911 909 686';
export const HOTLINE_SECONDARY = '0967 686 101';
export const HOTLINE_DISPLAY = '0911.909.686 - 0967.686.101';

export const HOTLINE_HN = '0911 909 686';
export const HOTLINE_HCM = '0967 686 101';

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'fast-track': {
    id: 'fast-track',
    title: 'FAST TRACK SÂN BAY (TIÊU CHUẨN)',
    tagline: 'Hỗ trợ thủ tục nhập cảnh nhanh chóng, đón tiễn chuyên nghiệp tại cửa máy bay',
    badge: 'Ưu tiên sân bay',
    badgeColor: 'bg-[#0b1b34] text-white',
    heroImage: FAST_TRACK_IMAGE,
    summary: 'Dịch vụ đón tiếp chuyên biệt tại 4 sân bay quốc tế lớn của Việt Nam (Tân Sơn Nhất, Nội Bài, Đà Nẵng, Cam Ranh). Chuyên viên đón khách ngay từ cửa máy bay/ống lồng, hướng dẫn làn ưu tiên qua quầy kiểm soát công an xuất nhập cảnh, rút ngắn tối đa thời gian chờ đợi.',
    keyBenefits: [
      'Đón ngay tại cửa ra máy bay (cửa ống lồng) với bảng đón tên trang trọng.',
      'Dẫn lối làn ưu tiên riêng biệt (Priority Lane) để làm thủ tục nhập cảnh nhanh gọn.',
      'Hỗ trợ toàn bộ khâu dán tem thị thực (Visa On Arrival) và đóng dấu xuất nhập cảnh.',
      'Tiết kiệm từ 45 - 90 phút xếp hàng tại khu vực hải quan cửa khẩu.',
      'Điều phối linh hoạt theo thời gian thực tế hạ cánh của chuyến bay.'
    ],
    eligibility: [
      'Doanh nhân, nhà đầu tư, chuyên gia quốc tế có lịch trình công tác khẩn cấp.',
      'Gia đình có trẻ nhỏ, người cao tuổi hoặc phụ nữ mang thai sau chuyến bay dài.',
      'Đoàn phái đoàn ngoại giao, khách du lịch cao cấp hoặc nghệ sĩ quốc tế.'
    ],
    requiredDocs: [
      'Hình ảnh mặt hộ chiếu còn hạn ít nhất 6 tháng.',
      'Thông tin vé máy bay (Số hiệu chuyến bay, ngày & giờ hạ cánh dự kiến).',
      'Công văn nhập cảnh (Approval Letter) hoặc E-visa đã được cấp (nếu có).'
    ],
    docGroups: [
      {
        categoryTitle: 'Thông tin chuyến bay & Hành khách cần cung cấp',
        badge: 'Thông tin đặt dịch vụ',
        docs: [
          'Hình ảnh trang thông tin hộ chiếu của từng hành khách (rõ nét)',
          'Mã số hiệu chuyến bay (Flight Number, ví dụ: VN602, KE683, SQ178...)',
          'Ngày & giờ hạ cánh dự kiến tại sân bay Việt Nam',
          'Tên hiển thị trên bảng đón tại cửa máy bay (Ví dụ: MR. JOHN DOE)',
          'Hình ảnh E-visa hoặc Công văn nhập cảnh (đối với khách cần dán tem visa)'
        ],
        photoInfo: [
          'Ảnh chụp mặt hộ chiếu còn hạn ít nhất 6 tháng gửi qua Zalo',
          'Ảnh vé máy bay điện tử hoặc thẻ lên máy bay (Boarding Pass)'
        ],
        specialRequirements: [
          'Khuyến nghị đặt dịch vụ trước 12 - 24 giờ trước giờ máy bay hạ cánh.',
          'Chuyên viên Visa5S theo dõi radar chuyến bay trực tiếp, tự động cập nhật giờ đón nếu chuyến bay bị delay mà không tính thêm phụ phí.'
        ],
        processingTimeNote: 'Xác nhận dịch vụ trong 15 - 30 phút sau khi nhận đầy đủ thông tin chuyến bay.'
      }
    ],
    processingTime: 'Đặt trước tối thiểu 12 - 24 giờ trước giờ hạ cánh',
    validity: 'Áp dụng cho từng chuyến bay hạ cánh hoặc cất cánh'
  },
  'fast-track-arrival': {
    id: 'fast-track-arrival',
    title: 'FAST TRACK NHẬP CẢNH (ARRIVAL FAST TRACK)',
    tagline: 'Đón tại cửa ống lồng máy bay, ưu tiên qua quầy xuất nhập cảnh và dán tem visa',
    badge: 'Đón tại cửa máy bay',
    badgeColor: 'bg-[#0048af] text-white',
    heroImage: FAST_TRACK_IMAGE,
    summary: 'Dành riêng cho khách quốc tế hạ cánh tại Việt Nam. Chuyên viên đón ngay tại cửa ra máy bay (cửa ống lồng), cầm bảng tên nhận diện, hỗ trợ khách dán tem thị thực (nếu cần) và dẫn lối qua cổng xuất nhập cảnh ưu tiên không phải xếp hàng.',
    keyBenefits: [
      'Đón trực tiếp ngay cửa ra máy bay (Gate/Ống lồng).',
      'Hỗ trợ toàn bộ thủ tục dán tem visa (Visa On Arrival) nhanh chóng.',
      'Đi qua làn ưu tiên riêng biệt của công an cửa khẩu.',
      'Hướng dẫn khách tới khu vực lấy hành lý và sảnh đón xe ngoài nhà ga.'
    ],
    eligibility: [
      'Khách quốc tế, chuyên gia, nhà đầu tư nhập cảnh vào Việt Nam.',
      'Gia đình có trẻ em, người lớn tuổi cần di chuyển nhanh chóng, thoải mái.'
    ],
    requiredDocs: [
      'Mặt hộ chiếu, Mã chuyến bay, Giờ hạ cánh, Bảng tên đón.'
    ],
    processingTime: 'Xác nhận dịch vụ trong 15 phút',
    validity: 'Áp dụng cho chuyến bay đến (Arrival)'
  },
  'fast-track-departure': {
    id: 'fast-track-departure',
    title: 'FAST TRACK XUẤT CẢNH (DEPARTURE FAST TRACK)',
    tagline: 'Hỗ trợ check-in nhanh, dẫn lối qua an ninh soi chiếu và quầy xuất cảnh ưu tiên',
    badge: 'Xuất cảnh ưu tiên',
    badgeColor: 'bg-[#005952] text-white',
    heroImage: HERO_IMAGE,
    summary: 'Dịch vụ hỗ trợ hành khách xuất cảnh rời Việt Nam. Chuyên viên đón tại sảnh ga đi quốc tế, hỗ trợ làm thủ tục check-in vé máy bay, cân hành lý, dẫn lối ưu tiên qua khu vực an ninh soi chiếu và kiểm soát xuất cảnh nhanh gọn.',
    keyBenefits: [
      'Đón tại cột mốc quy định ở sảnh nhà ga đi quốc tế.',
      'Hỗ trợ làm thủ tục check-in vé máy bay tại quầy hãng bay.',
      'Dẫn lối ưu tiên qua khu vực soi chiếu an ninh hàng không.',
      'Đi qua làn xuất cảnh ưu tiên để vào khu vực phòng chờ cách ly.'
    ],
    eligibility: [
      'Hành khách xuất cảnh cần tiết kiệm thời gian, doanh nhân bận rộn.',
      'Đoàn công tác, đoàn khách du lịch cần thủ tục xuất cảnh nhanh gọn.'
    ],
    requiredDocs: [
      'Mặt hộ chiếu, Thông tin vé máy bay xuất cảnh, Giờ bay dự kiến.'
    ],
    processingTime: 'Xác nhận dịch vụ trong 15 phút',
    validity: 'Áp dụng cho chuyến bay đi (Departure)'
  },
  'fast-track-vip': {
    id: 'fast-track-vip',
    title: 'VIP FAST TRACK TRỌN GÓI',
    tagline: 'Đón tại cửa máy bay + Lấy hành lý ký gửi + Xe riêng đưa đón ra sảnh nhà ga',
    badge: 'Dịch vụ VIP cao cấp',
    badgeColor: 'bg-[#0b1b34] text-white',
    heroImage: FAST_TRACK_IMAGE,
    summary: 'Gói dịch vụ cao cấp nhất của Visa5S: Chuyên viên đón tại cửa máy bay, làm thủ tục xuất nhập cảnh ưu tiên, có nhân sự hỗ trợ lấy toàn bộ hành lý ký gửi tại băng chuyền và đưa quý khách ra tận xe riêng đưa đón tại sảnh VIP.',
    keyBenefits: [
      'Đón tiễn VIP tại cửa máy bay với bảng tên trang trọng.',
      'Làn ưu tiên xuất nhập cảnh VIP nhanh nhất.',
      'Nhân viên hỗ trợ chờ và nhận toàn bộ hành lý ký gửi tại băng chuyền.',
      'Hộ tống và đưa hành lý ra tận xe riêng hoặc kết nối tài xế đón sẵn.'
    ],
    eligibility: [
      'Chuyên gia cấp cao, Tổng giám đốc, Nhà đầu tư nước ngoài, Phái đoàn VIP.',
      'Hành khách mang nhiều hành lý ký gửi cần người hỗ trợ bốc xếp.'
    ],
    requiredDocs: [
      'Hộ chiếu, Mã chuyến bay, Số lượng kiện hành lý ký gửi, Thông tin xe đưa đón (nếu có).'
    ],
    processingTime: 'Đặt trước tối thiểu 12 - 24 giờ',
    validity: 'Áp dụng cho chuyến bay đến hoặc đi'
  }
};

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Dịch vụ Fast Track hỗ trợ tại những sân bay quốc tế nào?',
    answer: 'Visa5S hiện cung cấp dịch vụ Fast Track đón tiễn ưu tiên tại 4 sân bay quốc tế lớn nhất Việt Nam: Sân bay quốc tế Tân Sơn Nhất (TP.HCM - SGN), Sân bay quốc tế Nội Bài (Hà Nội - HAN), Sân bay quốc tế Đà Nẵng (Đà Nẵng - DAD), và Sân bay quốc tế Cam Ranh (Khánh Hòa - CXR).',
    category: 'Sân bay phục vụ'
  },
  {
    id: 'faq-2',
    question: 'Cần đặt dịch vụ Fast Track trước bao lâu trước giờ hạ cánh?',
    answer: 'Khuyến nghị quý khách đặt dịch vụ trước tối thiểu 12 đến 24 giờ trước giờ bay để Visa5S kịp thời xin cấp phép ra vào khu vực cách ly sân bay và điều phối chuyên viên túc trực tại cửa máy bay. Trong trường hợp khẩn cấp (dưới 6 tiếng), vui lòng gọi hotline 0911 909 686 để được xử lý ưu tiên.',
    category: 'Thời gian đặt dịch vụ'
  },
  {
    id: 'faq-3',
    question: 'Khách hàng cần dán tem visa (Visa On Arrival) có được hỗ trợ không?',
    answer: 'Có. Chuyên viên Visa5S sẽ đón khách tại cửa máy bay, nhận hộ chiếu cùng công văn nhập cảnh / E-visa, trực tiếp nộp vào quầy công an cửa khẩu để lấy tem visa nhanh chóng, sau đó dẫn khách qua làn ưu tiên nhập cảnh mà không phải xếp hàng chờ đợi.',
    category: 'Thủ tục visa'
  },
  {
    id: 'faq-4',
    question: 'Làm thế nào để nhận diện chuyên viên đón tại sân bay?',
    answer: 'Chuyên viên Visa5S sẽ đứng ngay tại cửa ra máy bay (cửa ống lồng nối vào nhà ga), cầm bảng đón tên nhận diện in rõ Họ tên hành khách hoặc tên Công ty/Tổ chức theo yêu cầu của quý khách.',
    category: 'Điểm đón sân bay'
  },
  {
    id: 'faq-5',
    question: 'Dịch vụ Fast Track có hỗ trợ lấy hành lý và đưa ra xe không?',
    answer: 'Có. Quý khách có thể lựa chọn gói Fast Track VIP. Sau khi làm xong thủ tục nhập cảnh, chuyên viên sẽ cùng quý khách đến khu vực băng chuyền, hỗ trợ nhận hành lý ký gửi và đưa hành lý ra tận sảnh xe chờ đón phía ngoài nhà ga.',
    category: 'Hỗ trợ hành lý'
  },
  {
    id: 'faq-6',
    question: 'Nếu chuyến bay bị trễ giờ (delay) thì dịch vụ có bị hủy không?',
    answer: 'Không. Visa5S có bộ phận điều phối liên tục theo dõi tình trạng chuyến bay trên hệ thống radar hàng không quốc tế theo mã chuyến bay của quý khách. Chuyên viên sẽ linh hoạt điều chỉnh giờ đón chính xác theo thời gian máy bay thực tế hạ cánh mà không tính thêm bất kỳ khoản phụ phí nào.',
    category: 'Thay đổi chuyến bay'
  },
  {
    id: 'faq-7',
    question: 'Dịch vụ Fast Track có phù hợp cho người lớn tuổi và trẻ nhỏ không?',
    answer: 'Rất phù hợp. Chặng bay dài thường khiến người cao tuổi và trẻ nhỏ mệt mỏi. Với dịch vụ Fast Track, gia đình sẽ được ưu tiên đi qua làn thông thoáng riêng, không phải đứng xếp hàng chờ đợi hàng giờ tại quầy công an cửa khẩu.',
    category: 'Đối tượng khách hàng'
  }
];

export const DEFAULT_OFFICES: OfficeLocation[] = [
  {
    id: 'hcm-main',
    city: 'Trụ sở chính',
    address: '370 Đường 3/2, P. Hòa Hưng, TP.HCM',
    hotline: '0967.686.101',
    isHeadquarter: true,
  },
  {
    id: 'vp-hcm',
    city: 'VP',
    address: '16 Trần Đại Nghĩa, P. Đông Hòa, TPHCM',
    hotline: '0911.909.686',
    isHeadquarter: false,
  },
  {
    id: 'vp-hn',
    city: 'VP Hà Nội',
    address: '59 Vương Thừa Vũ, Q. Thanh Xuân, Hà Nội',
    hotline: '0911.909.686',
    isHeadquarter: false,
  },
];

export const OFFICE_LOCATIONS = DEFAULT_OFFICES;
