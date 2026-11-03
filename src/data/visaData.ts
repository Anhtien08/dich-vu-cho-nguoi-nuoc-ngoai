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
    tagline: 'Hồ sơ thủ tục thẻ tạm trú diện Lao động & Thăm thân chuẩn quy định xuất nhập cảnh',
    badge: 'Lưu trú 1 - 5 Năm',
    badgeColor: 'bg-[#0048af] text-white',
    heroImage: TRC_IMAGE,
    summary: 'Thẻ tạm trú (Temporary Residence Card - TRC) do Cục Quản lý xuất nhập cảnh cấp cho người nước ngoài cư trú dài hạn tại Việt Nam thay thị thực. Visa5S hỗ trợ trọn gói chuẩn bị hồ sơ cho cả diện Lao động và diện Thăm thân, hướng dẫn nộp hồ sơ qua hệ thống định danh VNeID mức 2.',
    keyBenefits: [
      'Lưu trú dài hạn từ 1 đến 5 năm tại Việt Nam hoàn toàn miễn thị thực xuất nhập cảnh.',
      'Được bảo lãnh người thân (vợ/chồng, con cái) cùng sang Việt Nam sinh sống.',
      'Thuận tiện mở tài khoản ngân hàng, mua căn hộ, chuyển đổi bằng lái xe.',
      'Hồ sơ công ty hoặc hồ sơ thăm thân được chuyên viên Visa5S soạn thảo chuẩn chỉnh.',
      'Đồng hành hỗ trợ nộp hồ sơ cùng nhân sự/người bảo lãnh và nhận kết quả tận tay.'
    ],
    eligibility: [
      'Người lao động nước ngoài có Giấy phép lao động hoặc Giấy miễn GPLĐ (diện Lao động LĐ1, LĐ2).',
      'Người nước ngoài kết hôn với công dân Việt Nam hoặc là con của công dân Việt Nam (diện Thăm thân TT).',
      'Nhà đầu tư nước ngoài góp vốn vào doanh nghiệp tại Việt Nam (ký hiệu ĐT1, ĐT2, ĐT3).'
    ],
    requiredDocs: [
      'Hộ chiếu gốc còn hạn dài hơn thời hạn thẻ dự kiến ít nhất 30 ngày.',
      '2 Ảnh thẻ 2x3 mới nhất + file ảnh (nền trắng).',
      'Visa / Thẻ tạm trú (TRC) bản gốc đang sử dụng.',
      'Giấy phép kinh doanh và Giấy phép lao động (sao y công chứng 2 bản - đối với diện lao động).',
      'Giấy kết hôn sao y công chứng và hợp pháp hóa lãnh sự (đối với diện thăm thân).',
      'Tờ khai tạm trú / Xác nhận cư trú CT07 của người bảo lãnh.',
      'CCCD của nhân sự hoặc người bảo lãnh Việt Nam.',
      'Bộ hồ sơ công ty ký đóng dấu (do chuyên viên Visa5S soạn).'
    ],
    docGroups: [
      {
        categoryTitle: 'Thủ tục xin cấp thẻ tạm trú diện Lao động',
        badge: 'Diện Lao Động',
        docs: [
          'Hộ chiếu gốc',
          '2 Ảnh thẻ 2x3 mới nhất + file ảnh',
          'Visa / TRC gốc',
          'Giấy phép kinh doanh công ty Việt Nam (sao y công chứng 2 bản)',
          'Giấy phép lao động (sao y công chứng 2 bản)',
          'Giấy xác nhận tạm trú online nếu cùng tỉnh',
          'SĐT, Email của nhân sự (có đóng BHXH để nộp hồ sơ cùng bên em và nhận kết quả)',
          'CCCD 2 mặt + sao y công chứng 2 mặt trên 1 mặt tờ A4',
          'Hồ sơ công ty ký đóng dấu (Bên em soạn)'
        ],
        specialRequirements: [
          'Cần định danh mức 2 VNeID của công ty và Token (chữ ký số điện tử).'
        ],
        processingTimeNote: 'Thời gian xử lý từ ngày nộp hồ sơ gốc dự kiến 8 - 12 ngày làm việc (không tính thứ 7, chủ nhật), có thể có sớm hơn hoặc trễ hơn tuỳ hồ sơ.'
      },
      {
        categoryTitle: 'Thủ tục xin cấp thẻ tạm trú diện Thăm thân (Family visit)',
        badge: 'Diện Thăm Thân',
        docs: [
          'Hộ chiếu gốc',
          'Ảnh thẻ 2x3 nền trắng + file ảnh gửi qua Zalo',
          'Visa / Thẻ tạm trú - Bản gốc',
          'Giấy kết hôn (sao y công chứng và hợp pháp hóa lãnh sự nếu được cấp ngoài Việt Nam)',
          'CT07 xác nhận cư trú của người bảo lãnh - Bản gốc',
          'Tờ khai tạm trú - Bản gốc có xác nhận dấu đỏ nếu ở khác tỉnh (nếu cùng tỉnh với vợ thì tờ khai tạm trú online là được)'
        ],
        photoInfo: [
          'Mặt hộ chiếu của người nước ngoài (NNN), visa/thẻ tạm trú đang dùng, dấu nhập cảnh gần nhất',
          '2 mặt CCCD của người Việt Nam',
          'Địa chỉ thường trú (theo hộ khẩu) của người Việt Nam (sau sáp nhập)'
        ],
        specialRequirements: [
          'Cần định danh mức 2 VNeID của người bảo lãnh.',
          'Tùy từng trường hợp thực tế sẽ có các thủ tục hồ sơ điều chỉnh tương ứng.'
        ],
        processingTimeNote: 'Thời gian xử lý từ ngày nộp hồ sơ gốc dự kiến 8 - 12 ngày làm việc (không tính thứ 7, chủ nhật), có thể có sớm hơn hoặc trễ hơn tuỳ hồ sơ.'
      }
    ],
    processingTime: '8 - 12 ngày làm việc (không tính thứ 7, chủ nhật)',
    validity: 'Từ 01 năm đến tối đa 05 năm (theo quy định pháp luật)'
  },
  'work-permit': {
    id: 'work-permit',
    title: 'GIẤY PHÉP LAO ĐỘNG (WORK PERMIT)',
    tagline: 'Thông tin hồ sơ cần chuẩn bị cấp Giấy phép lao động theo tiêu chuẩn từng chức danh',
    badge: 'Hợp chuẩn lao động',
    badgeColor: 'bg-[#005952] text-white',
    heroImage: WORK_PERMIT_IMAGE,
    summary: 'Giấy phép lao động là văn bản pháp lý bắt buộc cho người lao động nước ngoài làm việc hợp pháp tại Việt Nam. Visa5S hỗ trợ trọn gói từ soạn thảo hồ sơ, hướng dẫn khám sức khỏe, làm lý lịch tư pháp số 1 đến hợp pháp hóa lãnh sự 2 đầu văn bằng và chứng nhận kinh nghiệm.',
    keyBenefits: [
      'Doanh nghiệp và người lao động tuân thủ 100% quy định pháp luật lao động hiện hành.',
      'Là căn cứ pháp lý quan trọng nhất để làm thủ tục xin cấp Thẻ tạm trú 2 năm.',
      'Visa5S trực tiếp soạn thảo toàn bộ hồ sơ công ty ký đóng dấu.',
      'Hỗ trợ hợp pháp hóa lãnh sự 2 đầu bằng đại học và xác nhận kinh nghiệm làm việc.',
      'Đại diện doanh nghiệp nộp và theo dõi lộ trình xét duyệt tại cơ quan chức năng.'
    ],
    eligibility: [
      'Chức danh Chuyên gia: Bằng Đại Học + trên 4 năm kinh nghiệm (> 4 năm) ở cùng lĩnh vực và chức danh cần xin.',
      'Chức danh Phó Giám Đốc: Không cần bằng cấp, kinh nghiệm nhưng vị trí đó phải trống trên Giấy phép kinh doanh.',
      'Chức danh Lao động kỹ thuật: Được đào tạo chuyên ngành ít nhất 1 năm và có tối thiểu 3 năm kinh nghiệm phù hợp.'
    ],
    requiredDocs: [
      'Hộ Chiếu (Passport).',
      'Visa / Thẻ tạm trú (Visa / Temporary Residence Card).',
      'Giấy phép kinh doanh sao y công chứng (Notarized copy business license).',
      'Giấy phép lao động cũ nếu có (Old work permit if applicable).',
      '2 Ảnh thẻ 4*6 + file (2 4*6 card photos + file).',
      'Giấy khám sức khỏe (Health certificate).',
      'Lý lịch tư pháp số 1 (hợp pháp hóa lãnh sự) (Judicial record No. 1 - consular legalization).',
      'Bằng Đại học và xác nhận kinh nghiệm làm việc liên quan đến công việc cho chuyên gia (hợp pháp hóa lãnh sự 2 đầu).',
      'Hồ sơ công ty kí đóng dấu (Bên em soạn - Prepared by Visa5S).'
    ],
    docGroups: [
      {
        categoryTitle: 'Hồ sơ Giấy Phép lao động cần chuẩn bị (Work Permit Application)',
        badge: 'Danh mục hồ sơ',
        docs: [
          'Hộ Chiếu (Passport)',
          'Visa / Thẻ tạm trú (Visa / Temporary Residence Card)',
          'Giấy phép kinh doanh sao y công chứng (Notarized copy business license)',
          'Giấy phép lao động cũ nếu có (Old work permit if applicable)',
          '2 Ảnh thẻ 4*6 + file (2 4*6 card photos + file)',
          'Giấy khám sức khỏe (Health certificate)',
          'Lý lịch tư pháp số 1 (hợp pháp hóa lãnh sự) (Judicial record No. 1 - consular legalization)',
          'Bằng Đại học và xác nhận kinh nghiệm làm việc liên quan đến công việc cho chuyên gia (hợp pháp hóa lãnh sự 2 đầu) (University degree and confirmation of work experience relevant to the specialist\'s job - consular legalization at both ends)',
          'Hồ sơ công ty kí đóng dấu - Bên em soạn (Company profile signed and stamped - Prepared by Visa5S)'
        ],
        specialRequirements: [
          'Chức danh Chuyên gia: Bằng Đại Học + > 4 năm kinh nghiệm ở cùng lĩnh vực và chức danh cần xin (Expert title: University degree + > 4 years of experience in the same field and position as applied for).',
          'Chức danh Phó Giám Đốc: Không cần bằng cấp kinh nghiệm nhưng vị trí đó phải trống trên Giấy phép kinh doanh (Position: Deputy Director – no qualifications or experience required but the position must be vacant on the Business License).'
        ],
        processingTimeNote: 'Thời gian xử lý: Khoảng 15 - 20 ngày làm việc (bao gồm bước giải trình nhu cầu sử dụng lao động nước ngoài và nộp hồ sơ xin cấp phép).'
      }
    ],
    processingTime: '15 - 20 ngày làm việc (bao gồm giải trình nhu cầu)',
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
    question: 'Thẻ tạm trú có thời hạn bao lâu và thời gian làm mất bao lâu?',
    answer: 'Thời hạn thẻ tạm trú thông thường từ 1 đến 5 năm (ngắn hơn hạn hộ chiếu ít nhất 30 ngày). Thời gian xử lý từ ngày nộp hồ sơ gốc dự kiến khoảng 8 - 12 ngày làm việc (không tính thứ 7, chủ nhật), có thể có sớm hơn hoặc trễ hơn tùy hồ sơ thực tế.',
    category: 'Thẻ tạm trú'
  },
  {
    id: 'faq-3',
    question: 'Làm thẻ tạm trú cần tài khoản VNeID mức mấy?',
    answer: 'Theo quy định hiện hành, xin cấp thẻ tạm trú diện lao động cần tài khoản định danh mức 2 VNeID của công ty cùng Token chữ ký số. Đối với diện thăm thân kết hôn, cần định danh mức 2 VNeID của người bảo lãnh Việt Nam.',
    category: 'Thẻ tạm trú'
  },
  {
    id: 'faq-4',
    question: 'Điều kiện xin Giấy phép lao động vị trí Chuyên gia và Phó Giám Đốc khác nhau thế nào?',
    answer: 'Với chức danh Chuyên gia, người lao động cần có Bằng Đại Học và trên 4 năm kinh nghiệm (> 4 năm) ở cùng lĩnh vực và chức danh cần xin (đã hợp pháp hóa lãnh sự 2 đầu). Đối với chức danh Phó Giám Đốc, không cần bằng cấp hay kinh nghiệm nhưng vị trí đó bắt buộc phải còn trống trên Giấy phép kinh doanh.',
    category: 'Giấy phép lao động'
  },
  {
    id: 'faq-5',
    question: 'Visa5S có hỗ trợ doanh nghiệp trọn gói hồ sơ số lượng lớn không?',
    answer: 'Có, Visa5S cung cấp các gói dịch vụ quản trị hồ sơ lưu trú toàn diện theo hợp đồng khung dành riêng cho các tập đoàn đa quốc gia và doanh nghiệp FDI tuyển dụng nhiều nhân sự, chuyên gia quốc tế cùng lúc.',
    category: 'Doanh nghiệp FDI'
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
