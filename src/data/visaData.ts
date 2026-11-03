import { FaqItem, ServiceDetail, OfficeLocation } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmCFjn9VZASBw1NxVo66cjI23tS0DPH6n6Bsda4J4jlNGNirh4JK-gh-IJ0elYdPO1AcyOC7AYuMcG1RewrtdA-IA7baj9cTpuLmJu6iMR9rCBij1SLafoQnifjzvSZNi-bwRPcdIhHJp4C2dsOX2u0pvRFtRl3ZuW3jz9n39vrAVUohsZaVWCNzFY-ePkn-Y0TLIDFArTX48VKlcn9NvAIunFGo35vEUoI1c3zXYIWGI98lI3FOI2yw';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe0agpUsmYM3KcbI2qxzEoYYAPcNqDGNwpbhzGZAPa2Ng_AJwEGY6becTBIqcDiTNvs3APZFn4EEojTO6VnYdbJ63bWKryKhbDwEnGlX0gB_othpFiMsVjd3dmkJd0D4ee6-OKD-7HRxMA90xnZ0orbp_HX48rtRSfjjLypCnilUI1Kc-6QBqDHtyjjVuyOe-0uvP44slPI5cEOmL1ljPThZjpFac7BG_3MNn6l-xX';

export const FAST_TRACK_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKpx_FXwpR5k02O-HgVkd_iZQ3z2Fio7D6NnoKFXuCEJLPRKodoHidWVobONs3A7awaqQ3D7SHMvpBUzkjVKstPvFhccrbbjXucc95ngIH_9WQ_ezJat5DcKw0jWOMwQgYZsZC4fg6yhAhnIAKBcXgQGXT401d5438KSTsF39Ig9R8oTh6hT3ZsRT0DbZ_yI6x9HlGtt35SJZDQ1DPyNevhv4sfiJOBkQ5DIRychYa';

export const TRC_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD9ZHqpRXr-Lfar0YpojkpjEU5suRRmC9xBEnSSERSPTw4Afapl2cobsGTMNLryeEqXXIPYlEiTjonoqLUXyNLmCt1i-vyfBkS5e52wxZV4t3NebsYMzrIZloKbbgYCQ_VSFiIR5IHpDB5HNWGwbw6EdHLrGy14i79_rI2qWdH2TzbT5KT_i3a195ijMBFeG7MaP-G5h6gmyHqrNUYJFGq7SXkk5bWoPgp-bA3NlSp';

export const WORK_PERMIT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJUvqLCylyr13TGQ57EOFj0IfC2QV8wuzs2Y_c0ouNhU-cP_9UdRq7L052SAQ1q8rIC7aq6Icb2o2x3R5MU8F5tcgGK9g_sMmgVAjRqKyISRPhS5XIVAqVBqbIU7tqUvEl08HOVsVnxkroVGvW83HbPxkbakPuuOBFuA6crCZzHN05erlKzreuzstpqkJhxuzRZ474ZDQvTfQL5XG1TxpxFnZZUaxXzmzvYkHj8ayn';

export const COMPANY_NAME = 'VISA5S - CÔNG TY TƯ VẤN ĐẦU TƯ ASIA BLUE SKY';
export const COMPANY_SLOGAN = 'Hãy Đến Nơi Nào Bạn Muốn';
export const COMPANY_EMAIL = 'info@visa5s.com.vn';

export const HOTLINE_PRIMARY = '0911 909 686';
export const HOTLINE_SECONDARY = '0967 686 101';
export const HOTLINE_DISPLAY = '0911.909.686 - 0967.686.101';

export const HOTLINE_HN = '0911 909 686';
export const HOTLINE_HCM = '0967 686 101';

export const SERVICES_DATA: Record<'fast-track' | 'trc' | 'work-permit', ServiceDetail> = {
  'fast-track': {
    id: 'fast-track',
    title: 'FAST TRACK SÂN BAY',
    tagline: 'Hỗ trợ thủ tục nhập cảnh nhanh chóng, đón tiễn VIP tại cửa máy bay',
    badge: 'Ưu tiên sân bay',
    badgeColor: 'bg-[#0b1b34] text-white',
    heroImage: FAST_TRACK_IMAGE,
    summary: 'Dịch vụ đón tiếp chuyên biệt tại 4 sân bay quốc tế lớn của Việt Nam (Tân Sơn Nhất, Nội Bài, Đà Nẵng, Cam Ranh). Chuyên viên đón khách ngay từ cửa máy bay/ống lồng, hướng dẫn làn ưu tiên qua quầy kiểm soát công an xuất nhập cảnh, rút ngắn tối đa thời gian chờ đợi.',
    keyBenefits: [
      'Đón ngay tại cửa ra máy bay (cửa ống lồng) với bảng đón tên trang trọng.',
      'Dẫn lối làn ưu tiên riêng biệt (Priority Lane) để làm thủ tục nhập cảnh.',
      'Hỗ trợ toàn bộ khâu dán tem thị thực (Visa On Arrival) và đóng dấu xuất nhập cảnh.',
      'Hỗ trợ nhận hành lý ký gửi tại băng chuyền và đưa ra tận sảnh xe chờ đón.',
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
    processingTime: 'Đặt trước tối thiểu 12 - 24 giờ trước giờ hạ cánh',
    validity: 'Áp dụng cho từng chuyến bay hạ cánh hoặc cất cánh'
  },
  'trc': {
    id: 'trc',
    title: 'THẺ TẠM TRÚ (TRC)',
    tagline: 'Giấy chứng nhận lưu trú hợp pháp từ 1 đến 5 năm tại Việt Nam miễn thị thực',
    badge: 'Lưu trú 1 - 5 Năm',
    badgeColor: 'bg-[#0048af] text-white',
    heroImage: TRC_IMAGE,
    summary: 'Thẻ tạm trú (Temporary Residence Card - TRC) do Cục Quản lý xuất nhập cảnh hoặc Phòng Quản lý xuất nhập cảnh công an tỉnh, thành phố cấp cho người nước ngoài được phép cư trú có thời hạn tại Việt Nam và có giá trị thay thị thực (visa).',
    keyBenefits: [
      'Lưu trú dài hạn hợp pháp tại Việt Nam từ 1 đến 5 năm mà không cần gia hạn visa nhiều lần.',
      'Tự do xuất cảnh, nhập cảnh nhiều lần trong thời hạn của thẻ mà không mất phí dán tem visa.',
      'Được bảo lãnh vợ/chồng, con dưới 18 tuổi cùng sang Việt Nam sinh sống (thẻ TT).',
      'Thuận tiện mở tài khoản ngân hàng, mua căn hộ, đăng ký giấy phép lái xe tại Việt Nam.',
      'Hỗ trợ xử lý trọn gói từ khâu soạn thảo biểu mẫu NA6, NA8 đến bàn giao thẻ.'
    ],
    eligibility: [
      'Người lao động nước ngoài có Giấy phép lao động hoặc Giấy miễn GPLĐ còn hạn từ 1 năm trở lên (ký hiệu LĐ1, LĐ2).',
      'Nhà đầu tư nước ngoài góp vốn vào doanh nghiệp tại Việt Nam (ký hiệu ĐT1, ĐT2, ĐT3).',
      'Luật sư nước ngoài được Bộ Tư pháp cấp giấy phép hành nghề (ký hiệu LS).',
      'Vợ, chồng, con dưới 18 tuổi của người nước ngoài được cấp thẻ tạm trú (ký hiệu TT).'
    ],
    requiredDocs: [
      'Hộ chiếu gốc còn thời hạn dài hơn thời hạn thẻ tạm trú dự kiến ít nhất 30 ngày.',
      'Giấy phép lao động bản gốc hoặc Giấy xác nhận không thuộc diện cấp GPLĐ.',
      'Giấy chứng nhận đăng ký kinh doanh/Đầu tư của doanh nghiệp bảo lãnh (công chứng).',
      'Giấy xác nhận đăng ký tạm trú tại công an phường/xã hoặc khai báo online.',
      '02 ảnh 2x3cm nền trắng, chụp không quá 6 tháng.'
    ],
    processingTime: '5 - 7 ngày làm việc kể từ ngày nộp đủ hồ sơ hợp lệ',
    validity: 'Từ 01 năm đến tối đa 05 năm (tùy theo diện đầu tư hoặc lao động)'
  },
  'work-permit': {
    id: 'work-permit',
    title: 'GIẤY PHÉP LAO ĐỘNG (WORK PERMIT)',
    tagline: 'Chứng nhận pháp lý bắt buộc để người nước ngoài làm việc hợp pháp tại Việt Nam',
    badge: 'Hợp chuẩn lao động',
    badgeColor: 'bg-[#005952] text-white',
    heroImage: WORK_PERMIT_IMAGE,
    summary: 'Giấy phép lao động là văn bản pháp lý do Sở Lao động - Thương binh và Xã hội (hoặc Ban Quản lý các KCN/KKT) cấp, cho phép người lao động nước ngoài làm việc hợp pháp tại các tổ chức, doanh nghiệp hoạt động trên lãnh thổ Việt Nam.',
    keyBenefits: [
      'Đảm bảo doanh nghiệp và người lao động tuân thủ 100% quy định Bộ luật Lao động.',
      'Là điều kiện tiên quyết để xin cấp Thẻ tạm trú (TRC) thời hạn 2 năm.',
      'Tránh rủi ro bị xử phạt vi phạm hành chính nặng hoặc bị trục xuất khỏi Việt Nam.',
      'Hỗ trợ trọn gói: Báo cáo giải trình nhu cầu sử dụng lao động nước ngoài và nộp hồ sơ xin cấp phép.',
      'Dịch thuật công chứng và hỗ trợ làm lý lịch tư pháp, giấy khám sức khỏe nhanh.'
    ],
    eligibility: [
      'Vị trí Chuyên gia: Có bằng đại học trở lên và có ít nhất 3 năm kinh nghiệm làm việc phù hợp.',
      'Vị trí Lao động kỹ thuật: Được đào tạo chuyên ngành ít nhất 1 năm và có 3 năm kinh nghiệm.',
      'Vị trí Nhà quản lý / Giám đốc điều hành: Bổ nhiệm theo điều lệ công ty hoặc giấy phép thành lập.',
      'Trường hợp đặc biệt: Miễn giấy phép lao động cho chủ sở hữu/thành viên góp vốn công ty TNHH.'
    ],
    requiredDocs: [
      'Văn bản chấp thuận nhu cầu sử dụng lao động nước ngoài của UBND tỉnh/thành phố.',
      'Bằng đại học và văn bản xác nhận kinh nghiệm làm việc nước ngoài (hợp pháp hóa lãnh sự).',
      'Phiếu lý lịch tư pháp Việt Nam hoặc nước ngoài (cấp không quá 6 tháng).',
      'Giấy chứng nhận sức khỏe khám tại bệnh viện đủ điều kiện theo quy định của Bộ Y tế.',
      'Hộ chiếu bản sao chứng thực và 02 ảnh màu 4x6cm.'
    ],
    processingTime: '15 - 20 ngày làm việc (bao gồm bước giải trình nhu cầu lao động)',
    validity: 'Tối đa 02 năm (được gia hạn 01 lần tối đa 02 năm)'
  }
};

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Giấy phép lao động có thời hạn bao lâu?',
    answer: 'Thời hạn tối đa của Giấy phép lao động là 02 năm theo quy định của Bộ luật Lao động Việt Nam. Sau khi hết hạn, doanh nghiệp có thể thực hiện thủ tục gia hạn 01 lần với thời hạn tối đa tiếp theo là 02 năm nếu đáp ứng đầy đủ điều kiện pháp lý.',
    category: 'Giấy phép lao động'
  },
  {
    id: 'faq-2',
    question: 'Thẻ tạm trú có thời hạn bao lâu?',
    answer: 'Thời hạn thẻ tạm trú phụ thuộc vào loại ký hiệu (Lao động LĐ, Đầu tư ĐT, Thăm thân TT,...), thông thường từ 1 đến 5 năm. Lưu ý thời hạn thẻ tạm trú cấp ra sẽ ngắn hơn thời hạn còn lại của hộ chiếu ít nhất 30 ngày.',
    category: 'Thẻ tạm trú'
  },
  {
    id: 'faq-3',
    question: 'Người nước ngoài cần chuẩn bị những giấy tờ gì?',
    answer: 'Tùy loại thủ tục cụ thể, thông thường hồ sơ căn bản gồm: Hộ chiếu còn hạn, ảnh thẻ chuẩn quốc tế, bằng đại học/chứng nhận chuyên gia đã hợp pháp hóa lãnh sự, phiếu lý lịch tư pháp, giấy khám sức khỏe và bộ hồ sơ pháp nhân của công ty bảo lãnh tại Việt Nam.',
    category: 'Hồ sơ pháp lý'
  },
  {
    id: 'faq-4',
    question: 'Visa5S có hỗ trợ doanh nghiệp hồ sơ số lượng lớn không?',
    answer: 'Có, Visa5S cung cấp các gói dịch vụ quản trị hồ sơ lưu trú toàn diện theo hợp đồng khung dành riêng cho các tập đoàn đa quốc gia và doanh nghiệp FDI tuyển dụng nhiều nhân sự, chuyên gia quốc tế cùng lúc.',
    category: 'Doanh nghiệp FDI'
  },
  {
    id: 'faq-5',
    question: 'Thời gian xử lý hồ sơ mất bao lâu?',
    answer: 'Thời gian phụ thuộc vào từng loại hình dịch vụ và thời gian thẩm duyệt của cơ quan nhà nước có thẩm quyền (Sở LĐ-TB&XH, Cục Quản lý Xuất nhập cảnh). Chuyên viên Visa5S sẽ lên phương án chi tiết và cập nhật tiến độ theo từng mốc thời gian thực tế.',
    category: 'Quy trình'
  },
  {
    id: 'faq-6',
    question: 'Dịch vụ Fast Track đón tại những sân bay nào?',
    answer: 'Visa5S hiện cung cấp dịch vụ Fast Track đón tiễn ưu tiên tại 4 sân bay quốc tế lớn nhất Việt Nam: Sân bay quốc tế Tân Sơn Nhất (TP.HCM - SGN), Sân bay quốc tế Nội Bài (Hà Nội - HAN), Sân bay quốc tế Đà Nẵng (Đà Nẵng - DAD), và Sân bay quốc tế Cam Ranh (Khánh Hòa - CXR).',
    category: 'Fast Track Sân Bay'
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
