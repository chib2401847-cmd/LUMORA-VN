import { BlogPost, FAQItem, ProductTier, PromotionItem } from '../types';

export const IMAGES = {
  logo: '/assets/aistudio/nhu_nho_nha_aa19af89.png',
  heroBox: '/assets/aistudio/LUMORA_Ortho-K__Gia__c_ngu___thi__lu__c_mai_sau_5e484ace.png',
  appMockup: '/src/assets/images/lumora_app_mockup_1795617617861.jpg',
  studentStudy: '/src/assets/images/lumora_student_study_1795617619670.jpg',
  eyeExam: '/src/assets/images/lumora_eye_exam_1795617619754.jpg',
  careKit: '/src/assets/images/lumora_lens_care_kit_1795617619463.jpg',
  orthoKStandard: '/src/assets/images/lumora_ortho_k_standard_1795618459222.jpg',
  orthoKPro: '/src/assets/images/lumora_ortho_k_pro_branded_1795618458823.jpg',
  morningClarity: '/src/assets/images/lumora_morning_clarity_1795618458069.jpg',
  campusOutdoor: '/src/assets/images/lumora_campus_outdoor_1795618457889.jpg',
  nightRoutine: '/src/assets/images/lumora_lens_night_routine_1795618457722.jpg',
  collabDay: '/assets/aistudio/LUMORA_x_HIEUTHUHAI__Gia__c_ngu__sa_ng_ro__6b9678c6.png',
  collabNight: '/assets/aistudio/Lumora_x_Hieuthuhai__Ngu__ngon__tha__y_ro__6b806854.png',
};

export const COLLAB_CAMPAIGN = {
  title: 'LUMORA x HIEUTHUHAI',
  subtitle: 'Chiến dịch hợp tác thương hiệu · Giấc ngủ hôm nay, thị lực ngày mai',
  taglineEn: 'Sleep well. See clearly.',
  summary:
    'Sự kết hợp giữa LUMORA Eyecare và nghệ sĩ HIEUTHUHAI mang thông điệp chăm sóc thị lực chủ động đến gần hơn với học sinh, sinh viên và giới trẻ Việt Nam: tận dụng giấc ngủ ban đêm để đồng hành cùng đôi mắt sáng khỏe mỗi ngày.',
  highlights: [
    'Kiểm soát cận thị đúng hướng dẫn chuyên môn',
    'Đeo ban đêm thoải mái khi nghỉ ngơi',
    'Theo dõi thị lực cá nhân hóa qua ứng dụng',
  ],
  articleSlug: 'lumora-x-hieuthuhai-hop-tac-thuong-hieu-giac-ngu-hom-nay-thi-luc-ngay-mai',
};

export const BRAND = {
  name: 'LUMORA Eyecare',
  legalName: 'Công ty Cổ phần LUMORA Eyecare',
  since: '2026',
  mainSlogan: 'Ánh sáng cho đôi mắt – Tầm nhìn cho tương lai',
  productSloganVi: 'Giấc ngủ hôm nay, thị lực ngày mai',
  productSloganEn: 'Sleep well. See clearly.',
  location: 'Khu 2, Đại học Cần Thơ',
  logoSrc: IMAGES.logo,
  productImgSrc: IMAGES.heroBox,
  orderFormUrl: 'https://forms.gle/2bbGyjStG3fHntbA9',
  priceRangeShort: '10.499.000đ – 19.499.000đ',
  priceTiersSummary: '10.499.000đ · 14.499.000đ · 19.499.000đ',
  priceNote:
    'Giá cuối cùng theo từng dòng sản phẩm (10.499.000đ / 14.499.000đ / 19.499.000đ) được LUMORA tư vấn cụ thể khi liên hệ dựa trên tình trạng thị lực thực tế',
  workingHoursPlaceholder: '9h00 – 21h30',
  socialPlaceholder: '[Nhóm bổ sung kênh mạng xã hội chính thức]',
  packageConfirmNote:
    '[Nhóm xác nhận lại chi tiết thành phần bao gồm theo từng gói: tròng kính Ortho-K, tài khoản ứng dụng theo dõi thị lực, bộ dụng cụ vệ sinh/bảo quản và số buổi tái khám]',
};

export const CONTACT = {
  advisorName: 'Huỳnh Duy Anh',
  advisorTitle: 'Trưởng phòng Chăm sóc khách hàng',
  phoneDisplay: '0907 600 377',
  phoneHref: 'tel:0907600377',
  email: 'anhb2401844@student.ctu.edu.vn',
  emailHref: 'mailto:anhb2401844@student.ctu.edu.vn',
};

export const PRODUCT_TIERS: ProductTier[] = [
  {
    id: 'standard',
    name: 'LUMORA Ortho-K Standard',
    subtitle: 'Phiên bản tiêu chuẩn · Khởi đầu gọn nhẹ',
    priceDisplay: '10.499.000đ',
    priceNumeric: 10499000,
    image: IMAGES.orthoKStandard,
    imageAlt: 'Hộp sản phẩm LUMORA Eyecare Ortho-K Standard kèm hộp đựng và dung dịch vệ sinh',
    imagePosition: 'object-center',
    suitableFor: 'Phù hợp người mới bắt đầu có độ cận nhẹ đến trung bình và thông số giác mạc cơ bản.',
    description:
      'Giải pháp kính áp tròng ban đêm thiết yếu giúp tạm thời chỉnh hình giác mạc khi ngủ, kết hợp ứng dụng theo dõi lịch sử thị lực và bộ dụng cụ vệ sinh tiêu chuẩn.',
    included: [
      '01 cặp kính áp tròng ban đêm LUMORA Ortho-K Standard',
      'Hộp đựng bảo quản và dụng cụ hỗ trợ đeo/tháo',
      'Bộ dụng cụ vệ sinh lens khởi đầu',
      'Quyền sử dụng ứng dụng theo dõi thị lực & nhắc lịch',
    ],
  },
  {
    id: 'plus',
    name: 'LUMORA Ortho-K Plus',
    subtitle: 'Phiên bản cân bằng · Được học sinh, sinh viên chọn nhiều',
    priceDisplay: '14.499.000đ',
    priceNumeric: 14499000,
    image: IMAGES.heroBox,
    imageAlt: 'Bộ sản phẩm LUMORA Ortho-K Plus với hộp sản phẩm chính thức, lens và hộp bảo quản',
    imagePosition: 'object-left sm:object-[20%_center]',
    suitableFor:
      'Phù hợp học sinh, sinh viên cần kiểm soát tiến triển cận thị hoặc có kèm loạn thị nhẹ.',
    description:
      'Tối ưu độ thoáng khí và sự êm ái suốt giấc ngủ, đi kèm đầy đủ bộ chăm sóc vệ sinh cùng lịch nhắc tái khám và tư vấn đồng hành sát sao hơn.',
    included: [
      '01 cặp kính LUMORA Ortho-K Plus thiết kế tối ưu độ êm',
      'Hộp đựng chính hãng & bộ dụng cụ vệ sinh – bảo quản đầy đủ',
      'Ứng dụng theo dõi chu kỳ, nhắc lịch đeo/tháo & tái khám',
      'Hỗ trợ tư vấn và nhắc lịch kiểm tra định kỳ cùng CSKH',
    ],
  },
  {
    id: 'pro',
    name: 'LUMORA Ortho-K Pro',
    subtitle: 'Phiên bản cá nhân hóa nâng cao',
    priceDisplay: '19.499.000đ',
    priceNumeric: 19499000,
    image: IMAGES.orthoKPro,
    imageAlt: 'LUMORA Ortho-K Pro với hộp bảo quản cao cấp và tròng kính thiết kế cá nhân hóa',
    imagePosition: 'object-center',
    suitableFor:
      'Phù hợp trường hợp độ cận cao hơn hoặc bề mặt giác mạc đặc thù cần tinh chỉnh chuyên sâu.',
    description:
      'Thiết kế cá nhân hóa theo bản đồ giác mạc từng bên mắt với chất liệu thấm khí cao cấp, hộp bảo quản chuyên biệt và gói theo dõi tiến trình chuyên sâu.',
    included: [
      '01 cặp kính LUMORA Ortho-K Pro cá nhân hóa theo từng mắt',
      'Hộp bảo quản chuyên biệt cao cấp & bộ dụng cụ vệ sinh đầy đủ',
      'Ứng dụng theo dõi thị lực cá nhân hóa toàn diện',
      'Ưu tiên tư vấn trực tiếp và theo dõi lộ trình tái khám sát sao',
    ],
  },
];

export const FOUR_BENEFITS = [
  {
    id: 'night',
    title: 'Tạm thời chỉnh hình giác mạc khi ngủ',
    description:
      'Thiết kế chuyên biệt đeo vào ban đêm khi bạn nghỉ ngơi, nhẹ nhàng tác động lên bề mặt giác mạc mà không cần phẫu thuật.',
  },
  {
    id: 'day',
    title: 'Nhìn rõ ràng ban ngày',
    description:
      'Khi tháo lens vào buổi sáng, bạn có thể sinh hoạt, học tập và vận động thoải mái mà không bị vướng víu bởi kính gọng.',
  },
  {
    id: 'safe',
    title: 'An toàn và thoải mái',
    description:
      'Chất liệu thấm khí giúp mắt dễ chịu suốt giấc ngủ, được chỉ định và theo dõi sát sao theo hướng dẫn chuyên môn.',
  },
  {
    id: 'ages',
    title: 'Phù hợp cho cả trẻ em và người lớn',
    description:
      'Đáp ứng nhu cầu kiểm soát tiến triển cận thị ở học sinh, sinh viên và người trẻ mong muốn sự linh hoạt trong sinh hoạt.',
  },
];

export const CORE_VALUES = [
  {
    key: 'Care',
    viTitle: 'Tận tâm',
    description:
      'Lắng nghe từng băn khoăn của học sinh, sinh viên và phụ huynh; đồng hành từ buổi tư vấn đầu tiên đến suốt quá trình tái khám định kỳ.',
  },
  {
    key: 'Personalized',
    viTitle: 'Cá nhân hóa',
    description:
      'Mỗi đôi mắt có thông số giác mạc và tiến triển cận thị khác nhau. Giải pháp và lịch theo dõi được thiết kế riêng cho từng người dùng.',
  },
  {
    key: 'Technology',
    viTitle: 'Công nghệ',
    description:
      'Kết hợp kính áp tròng ban đêm với ứng dụng theo dõi thị lực thông minh, giúp việc ghi nhận lịch sử và nhắc lịch trở nên trực quan, dễ duy trì.',
  },
  {
    key: 'Trust',
    viTitle: 'An toàn & đáng tin cậy',
    description:
      'Luôn minh bạch về phạm vi hiệu quả, tuân thủ hướng dẫn của chuyên viên khúc xạ và bác sĩ chuyên khoa mắt, đặt an toàn thị lực lên hàng đầu.',
  },
];

export const CORPORATE_CULTURE = [
  {
    title: 'Khách hàng làm trung tâm',
    detail:
      'Mọi quy trình tư vấn, hướng dẫn sử dụng và chăm sóc sau bán đều xoay quanh sự an tâm và trải nghiệm thực tế của người đeo lens.',
  },
  {
    title: 'An toàn và trách nhiệm',
    detail:
      'Không đưa ra cam kết vượt quá giới hạn y khoa. Luôn nhắc người dùng tuân thủ quy trình vệ sinh và lịch tái khám.',
  },
  {
    title: 'Đổi mới và công nghệ',
    detail:
      'Ứng dụng công nghệ số để thu hẹp khoảng cách giữa phòng khám và thói quen chăm sóc mắt hằng ngày của người trẻ.',
  },
  {
    title: 'Trung thực và minh bạch',
    detail:
      'Cung cấp thông tin rõ ràng về 3 mức giá (10.499.000đ, 14.499.000đ, 19.499.000đ), thành phần gói dịch vụ và điều kiện sử dụng Ortho-K.',
  },
  {
    title: 'Đồng hành cùng người trẻ',
    detail:
      'Xuất phát từ môi trường đại học tại Cần Thơ, LUMORA hiểu áp lực học tập và thói quen dùng màn hình của học sinh, sinh viên Việt Nam.',
  },
];

export const WHAT_IS_IN_BOX = [
  {
    item: 'Cặp kính áp tròng ban đêm LUMORA Ortho-K',
    note: 'Tương ứng phiên bản Standard / Plus / Pro theo thông số mắt sau khi thăm khám chuyên môn.',
  },
  {
    item: 'Hộp đựng và bảo quản lens chuyên dụng LUMORA',
    note: 'Nhỏ gọn, sạch sẽ, dễ mang theo khi đi học hoặc di chuyển.',
  },
  {
    item: 'Bộ dụng cụ hỗ trợ đeo & tháo lens',
    note: 'Giúp thao tác nhẹ nhàng, hạn chế tiếp xúc trực tiếp tay lên bề mặt kính.',
  },
  {
    item: 'Bộ dụng cụ vệ sinh & bảo quản lens (quà tặng kèm)',
    note: 'Hỗ trợ duy trì thói quen làm sạch kính đúng chuẩn mỗi ngày.',
  },
  {
    item: 'Thẻ hướng dẫn sử dụng & mã QR kết nối ứng dụng',
    note: 'Quét mã ngay trên hộp để tải và đồng bộ hồ sơ theo dõi thị lực cá nhân.',
  },
];

export const PROMOTIONS: PromotionItem[] = [
  {
    id: 'first-order',
    title: 'Ưu đãi khách hàng lần đầu trải nghiệm',
    subtitle: 'Áp dụng cho cả 3 phiên bản Standard, Plus và Pro',
    description:
      'Hỗ trợ chi phí khởi đầu cho học sinh, sinh viên và người trẻ bắt đầu lộ trình kiểm soát cận thị cùng LUMORA.',
    discountPlaceholder: '[Nhóm bổ sung mức giảm cụ thể – ví dụ: giảm X% hoặc X đồng]',
    conditionPlaceholder: '[Nhóm bổ sung điều kiện áp dụng và thời hạn chương trình]',
    ctaLabel: 'Đặt hàng để nhận ưu đãi',
    image: IMAGES.heroBox,
    imageAlt: 'Ưu đãi dành cho khách hàng đăng ký LUMORA Ortho-K lần đầu',
  },
  {
    id: 'voucher',
    title: 'Voucher ưu đãi & mã giới thiệu học đường',
    subtitle: 'Áp dụng khi đặt hàng trực tuyến hoặc qua tư vấn viên',
    description:
      'Khách hàng có mã voucher từ các chương trình học đường hoặc sự kiện tại Cần Thơ được áp dụng khấu trừ khi xác nhận đơn.',
    discountPlaceholder: '[Nhóm bổ sung giá trị voucher và cách nhận mã]',
    conditionPlaceholder: '[Nhóm bổ sung điều kiện: có áp dụng cộng dồn hay không]',
    ctaLabel: 'Đặt hàng để nhận ưu đãi',
    image: IMAGES.campusOutdoor,
    imageAlt: 'Sinh viên năng động ngoài trời cùng ưu đãi học đường LUMORA',
  },
  {
    id: 'loyalty-points',
    title: 'Tích điểm & Khách hàng thân thiết',
    subtitle: 'Đồng hành dài lâu trong suốt quá trình theo dõi thị lực',
    description:
      'Mỗi lần tái khám đúng hẹn, cập nhật nhật ký trên ứng dụng hoặc mua dung dịch/phụ kiện định kỳ đều có thể tích lũy điểm quyền lợi.',
    discountPlaceholder: '[Nhóm bổ sung tỷ lệ tích điểm và quy đổi quà/ưu đãi]',
    conditionPlaceholder: '[Nhóm bổ sung hạng thành viên và điều kiện duy trì]',
    ctaLabel: 'Đặt hàng để nhận ưu đãi',
    image: IMAGES.appMockup,
    imageAlt: 'Tích điểm và theo dõi lịch sử thị lực trên ứng dụng LUMORA',
  },
  {
    id: 'cleaning-kit-gift',
    title: 'Quà tặng bộ dụng cụ vệ sinh & bảo quản lens',
    subtitle: 'Tặng kèm ngay khi sở hữu bộ sản phẩm LUMORA Ortho-K',
    description:
      'Giúp bạn có sẵn đầy đủ dụng cụ cần thiết ngay từ đêm đầu tiên sử dụng theo hướng dẫn của chuyên viên.',
    discountPlaceholder: 'Tặng kèm 01 bộ dụng cụ vệ sinh & bảo quản lens chính hãng',
    conditionPlaceholder: '[Nhóm xác nhận danh mục chi tiết các món trong bộ quà tặng]',
    ctaLabel: 'Đặt hàng để nhận ưu đãi',
    image: IMAGES.careKit,
    imageAlt: 'Bộ dụng cụ vệ sinh và bảo quản kính áp tròng tặng kèm của LUMORA',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'lumora-x-hieuthuhai-hop-tac-thuong-hieu-giac-ngu-hom-nay-thi-luc-ngay-mai',
    title: 'LUMORA x HIEUTHUHAI: Hợp tác lan tỏa thông điệp "Giấc ngủ hôm nay, thị lực ngày mai"',
    category: 'Hợp tác thương hiệu',
    date: '25/11/2026',
    readTime: '4 phút đọc',
    excerpt:
      'Màn hợp tác chính thức giữa LUMORA Eyecare và HIEUTHUHAI hướng đến thế hệ trẻ, khuyến khích thói quen bảo vệ mắt chủ động, ngủ đủ giấc và theo dõi thị lực định kỳ.',
    image: IMAGES.collabDay,
    imageAlt: 'Chiến dịch hợp tác thương hiệu LUMORA Eyecare x HIEUTHUHAI – Giấc ngủ hôm nay, thị lực ngày mai',
    placeholderNote: 'Hình ảnh chiến dịch hợp tác LUMORA x HIEUTHUHAI',
    keyTakeaways: [
      'Chiến dịch LUMORA x HIEUTHUHAI kết nối câu chuyện chăm sóc thị lực với nhịp sống năng động của học sinh, sinh viên và người trẻ.',
      'Hai ấn phẩm Ngày & Đêm truyền tải trọn vẹn tinh thần "Sleep well. See clearly." của dòng lens ban đêm LUMORA Ortho-K.',
      'Thông điệp cốt lõi vẫn đặt sự an toàn y khoa, thăm khám chuyên môn và theo dõi thị lực cá nhân hóa làm nền tảng.',
    ],
    content: [
      'Với mong muốn đưa chủ đề chăm sóc mắt thoát khỏi cảm giác khô khan và trở nên gần gũi hơn với sinh viên, người trẻ, LUMORA Eyecare chính thức giới thiệu chiến dịch hợp tác thương hiệu cùng nghệ sĩ HIEUTHUHAI mang tên "Giấc ngủ hôm nay, thị lực ngày mai" (Sleep well. See clearly.).',
      'Là người trẻ thường xuyên làm việc với cường độ cao, di chuyển giữa trường quay, phòng thu và sân khấu, HIEUTHUHAI đại diện cho hình ảnh thế hệ năng động luôn cần tầm nhìn linh hoạt ban ngày nhưng vẫn trân trọng khoảng thời gian nghỉ ngơi chất lượng vào ban đêm. Đây cũng chính là điểm gặp gỡ tự nhiên với triết lý sản phẩm LUMORA Ortho-K.',
      'Trong bộ ảnh chiến dịch gồm hai phiên bản Sáng (tinh khôi, rạng rỡ bên hộp sản phẩm LUMORA Ortho-K) và Đêm (thư giãn trước giờ đi ngủ), sự hợp tác nhấn mạnh 3 giá trị thực tế mà LUMORA theo đuổi: hỗ trợ kiểm soát cận thị theo hướng dẫn chuyên môn, đeo ban đêm thoải mái và theo dõi tiến trình thị lực cá nhân hóa qua ứng dụng.',
      'Thông qua màn collab này, LUMORA kỳ vọng không chỉ giới thiệu một giải pháp kính áp tròng ban đêm hiện đại mà còn khơi gợi thói quen quan tâm đôi mắt đúng cách ở giới trẻ: biết nghỉ ngơi hợp lý, giữ vệ sinh khi dùng lens và chủ động tái khám định kỳ với chuyên viên khúc xạ hoặc bác sĩ chuyên khoa mắt.',
    ],
  },
  {
    slug: 'can-thi-hoc-duong-vi-sao-ngay-cang-pho-bien',
    title: 'Cận thị học đường: vì sao ngày càng phổ biến?',
    category: 'Cận thị học đường',
    date: '18/11/2026',
    readTime: '5 phút đọc',
    excerpt:
      'Áp lực học tập, thời gian nhìn gần kéo dài và thiếu hoạt động ngoài trời đang khiến tỷ lệ cận thị ở học sinh, sinh viên gia tăng nhanh chóng.',
    image: IMAGES.studentStudy,
    imageAlt: 'Sinh viên học tập tại bàn học có ánh sáng ban ngày',
    placeholderNote: 'Ảnh minh họa học sinh/sinh viên học tập trong môi trường ánh sáng hợp lý',
    keyTakeaways: [
      'Thời gian tiếp xúc màn hình và đọc sách ở cự ly gần kéo dài làm mắt điều tiết liên tục.',
      'Thiếu ánh sáng tự nhiên ngoài trời là yếu tố được nhiều nghiên cứu nhãn khoa ghi nhận liên quan đến tiến triển cận thị.',
      'Việc đo kiểm thị lực định kỳ giúp phát hiện sớm thay đổi độ cận thay vì chờ đến khi nhìn mờ rõ rệt.',
    ],
    content: [
      'Trong những năm gần đây, hình ảnh học sinh cấp hai, cấp ba và sinh viên đại học đeo kính gọng đã trở nên quen thuộc trong mỗi lớp học. Cận thị không chỉ là một tật khúc xạ đơn thuần gây bất tiện trong sinh hoạt hằng ngày, mà còn đáng lưu tâm khi độ cận có xu hướng tăng nhanh qua từng năm học.',
      'Nguyên nhân phổ biến nhất đến từ thói quen nhìn gần liên tục: học bài, làm bài tập trên máy tính, sử dụng điện thoại vào buổi tối với ánh sáng chưa phù hợp. Khi mắt phải duy trì trạng thái điều tiết ở khoảng cách gần trong nhiều giờ liền mà không có quãng nghỉ, hệ thống thị giác dễ rơi vào tình trạng mỏi và thích nghi theo hướng bất lợi.',
      'Bên cạnh đó, lịch học dày đặc khiến nhiều bạn trẻ ít có thời gian tham gia các hoạt động ngoài trời vào ban ngày. Nhiều khuyến nghị nhãn khoa hiện đại chỉ ra rằng việc tiếp xúc ánh sáng tự nhiên hợp lý kết hợp quy tắc nghỉ mắt (như quy tắc 20-20-20) đóng vai trò hỗ trợ tích cực cho sức khỏe đôi mắt đang phát triển.',
      'Điều quan trọng không kém là sự chủ động theo dõi. Nhiều bạn chỉ đi kiểm tra lại mắt khi kính cũ không còn nhìn rõ bảng hoặc slide bài giảng. Việc lưu lại lịch sử thị lực định kỳ và trao đổi kịp thời với chuyên viên khúc xạ sẽ giúp phụ huynh và người trẻ có hướng kiểm soát phù hợp hơn.',
    ],
  },
  {
    slug: 'lens-ngu-ortho-k-hoat-dong-the-nao',
    title: 'Lens ngủ Ortho-K hoạt động thế nào?',
    category: 'Kiến thức Ortho-K',
    date: '14/11/2026',
    readTime: '6 phút đọc',
    excerpt:
      'Tìm hiểu cơ chế chỉnh hình giác mạc tạm thời vào ban đêm của kính áp tròng Ortho-K và lý do bạn cần được thăm khám trước khi sử dụng.',
    image: IMAGES.orthoKPro,
    imageAlt: 'Cận cảnh kính áp tròng Ortho-K và hộp bảo quản chuyên dụng',
    placeholderNote: 'Ảnh cận cảnh kính áp tròng ban đêm Ortho-K và hộp đựng',
    keyTakeaways: [
      'Ortho-K hoạt động bằng cách tạm thời định hình lại lớp biểu mô bề mặt giác mạc trong lúc ngủ.',
      'Tác dụng mang tính tạm thời và có thể phục hồi nếu ngưng đeo lens.',
      'Luôn cần đo bản đồ giác mạc và tuân thủ chỉ định của chuyên viên khúc xạ hoặc bác sĩ.',
    ],
    content: [
      'Ortho-K (Orthokeratology) là loại kính áp tròng cứng thấm khí được thiết kế đặc biệt để đeo vào ban đêm trong khi ngủ. Thay vì đeo kính gọng suốt cả ngày để bẻ gãy tia sáng, Ortho-K tác động nhẹ nhàng lên lớp nước mắt và bề mặt ngoài của giác mạc qua đêm.',
      'Khi bạn nhắm mắt ngủ đủ thời gian khuyến nghị (thường khoảng 6–8 tiếng mỗi đêm), độ cong trung tâm giác mạc được điều chỉnh tạm thời. Nhờ đó, sau khi thức dậy và tháo lens vào buổi sáng, ánh sáng đi vào mắt có thể hội tụ gần đúng trên võng mạc hơn, giúp bạn nhìn rõ ràng trong sinh hoạt ban ngày.',
      'Cần hiểu đúng và trung thực rằng đây là hiệu ứng tạm thời, không phải phẫu thuật làm thay đổi vĩnh viễn cấu trúc mắt. Nếu bạn ngưng đeo lens trong một khoảng thời gian, giác mạc sẽ dần trở về hình dáng ban đầu. Vì vậy, việc duy trì lịch đeo đều đặn theo hướng dẫn chuyên môn là yếu tố quyết định.',
      'Ngoài sự tiện lợi không phải vướng kính khi đi học, chơi thể thao hay hoạt động ngoài trời, Ortho-K còn thường được cân nhắc trong các chương trình hỗ trợ kiểm soát tiến triển cận thị ở trẻ em và thanh thiếu niên. Tuy nhiên, mỗi người có cấu trúc giác mạc và độ khúc xạ riêng, nên bước thăm khám, đo giác mạc và thử kính dưới sự hướng dẫn của bác sĩ/chuyên viên khúc xạ luôn là bắt buộc.',
    ],
  },
  {
    slug: '5-thoi-quen-bao-ve-mat-cho-hoc-sinh-sinh-vien',
    title: '5 thói quen bảo vệ mắt cho học sinh – sinh viên',
    category: 'Chăm sóc mắt',
    date: '10/11/2026',
    readTime: '4 phút đọc',
    excerpt:
      'Những thay đổi nhỏ trong cách bố trí bàn học, ánh sáng và lịch nghỉ ngơi hằng ngày giúp giảm mỏi mắt rõ rệt trong mùa thi cử.',
    image: IMAGES.campusOutdoor,
    imageAlt: 'Sinh viên đi bộ ngoài trời dưới ánh sáng tự nhiên giúp mắt thư giãn',
    placeholderNote: 'Ảnh bộ dụng cụ chăm sóc và bảo quản kính sạch sẽ',
    keyTakeaways: [
      'Áp dụng quy tắc 20-20-20 khi học với laptop hoặc điện thoại.',
      'Đảm bảo khoảng cách đọc 30–40 cm và ánh sáng không bị lóa.',
      'Ngủ đủ giấc để mắt có thời gian phục hồi, đặc biệt quan trọng khi sử dụng lens ban đêm.',
    ],
    content: [
      '1. Thực hành quy tắc 20-20-20: Sau mỗi 20 phút nhìn tập trung vào màn hình hoặc sách vở, hãy nhìn ra xa khoảng 6 mét (20 feet) trong ít nhất 20 giây. Thói quen nhỏ này giúp cơ thể mi được thư giãn, giảm cảm giác căng nhức vùng hốc mắt.',
      '2. Giữ khoảng cách và tư thế ngồi đúng: Khi đọc sách hoặc dùng máy tính, nên giữ khoảng cách từ mắt đến tài liệu khoảng 30–40 cm, màn hình máy tính cách mắt khoảng 50–65 cm và đặt hơi thấp hơn tầm mắt một chút.',
      '3. Bố trí ánh sáng hài hòa: Tránh học bài hoặc lướt điện thoại trong phòng tối hoàn toàn. Ánh sáng phòng nên kết hợp cùng đèn bàn chiếu từ phía không thuận tay để không tạo bóng đổ lên trang vở.',
      '4. Tăng thời gian hoạt động ngoài trời: Dành ít nhất 45–60 phút mỗi ngày cho việc đi bộ, thể thao hoặc sinh hoạt dưới ánh sáng tự nhiên giúp mắt được nhìn ở khoảng cách xa linh hoạt hơn.',
      '5. Ngủ đủ giấc và giữ vệ sinh tay mắt: Giấc ngủ ban đêm là lúc bề mặt nhãn cầu được nghỉ ngơi và phục hồi. Đặc biệt với người sử dụng kính áp tròng ban đêm LUMORA Ortho-K, ngủ đủ giờ và rửa tay sạch bằng xà phòng trước khi chạm vào kính là nguyên tắc không thể bỏ qua.',
    ],
  },
  {
    slug: 'vi-sao-can-tai-kham-thi-luc-dinh-ky',
    title: 'Vì sao cần tái khám thị lực định kỳ?',
    category: 'Theo dõi thị lực',
    date: '05/11/2026',
    readTime: '5 phút đọc',
    excerpt:
      'Tái khám định kỳ không chỉ để đo lại độ cận, mà còn giúp đánh giá sức khỏe giác mạc, độ vừa vặn của lens và kịp thời điều chỉnh thói quen chăm sóc mắt.',
    image: IMAGES.eyeExam,
    imageAlt: 'Chuyên viên khúc xạ kiểm tra giác mạc bằng thiết bị chuyên dụng',
    placeholderNote: 'Ảnh thăm khám và kiểm tra giác mạc định kỳ cùng chuyên viên',
    keyTakeaways: [
      'Thị lực có thể thay đổi âm thầm theo giai đoạn học tập và phát triển.',
      'Tái khám giúp kiểm tra bề mặt giác mạc và tình trạng vệ sinh của cặp lens.',
      'Ứng dụng LUMORA hỗ trợ nhắc lịch tái khám và lưu lại dữ liệu qua từng lần đo.',
    ],
    content: [
      'Nhiều bạn trẻ thường có tâm lý "mắt vẫn nhìn rõ thì không cần đi kiểm tra". Thực tế, những thay đổi nhỏ về độ khúc xạ hoặc tình trạng khô mắt, lắng đọng protein trên bề mặt kính áp tròng thường diễn ra âm thầm trước khi gây ra cảm giác khó chịu rõ rệt.',
      'Với người đang sử dụng kính áp tròng ban đêm Ortho-K, tái khám định kỳ theo lịch hẹn của chuyên viên khúc xạ/bác sĩ là một phần không thể tách rời của quy trình chăm sóc an toàn. Tại các buổi kiểm tra, chuyên viên sẽ đánh giá độ đáp ứng của giác mạc, kiểm tra bề mặt kính xem có trầy xước hay bám cặn không, đồng thời hướng dẫn lại thao tác vệ sinh nếu cần.',
      'Đối với học sinh và sinh viên, lưu giữ biểu đồ thị lực qua từng mốc thời gian (1 tuần, 1 tháng, 3 tháng, 6 tháng) mang lại cái nhìn khách quan về tiến trình mắt của chính mình. Nhờ đó, bạn không phải đoán mò hay quên mất lần gần nhất mình đo mắt là khi nào.',
      'Đó cũng là lý do LUMORA phát triển ứng dụng theo dõi thị lực đi kèm sản phẩm: nhắc lịch tái khám đúng hẹn, lưu trữ kết quả từng lần kiểm tra và tạo cầu nối trao đổi thuận tiện với bộ phận chăm sóc khách hàng khi có dấu hiệu bất thường.',
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Sản phẩm',
    question: 'Lens ngủ LUMORA Ortho-K là gì?',
    answer:
      'LUMORA Ortho-K là kính áp tròng cứng thấm khí chuyên dụng đeo vào ban đêm khi đi ngủ. Kính tạm thời chỉnh hình nhẹ nhàng bề mặt giác mạc để bạn có thể nhìn rõ ràng vào ban ngày mà không cần đeo kính gọng, đồng thời hỗ trợ kiểm soát sự tiến triển của cận thị kết hợp theo dõi qua ứng dụng LUMORA.',
  },
  {
    id: 'faq-2',
    category: 'Sản phẩm',
    question: 'Sự khác nhau giữa 3 phiên bản 10.499.000đ, 14.499.000đ và 19.499.000đ là gì?',
    answer:
      'Ba dòng sản phẩm gồm LUMORA Ortho-K Standard (10.499.000đ), Plus (14.499.000đ) và Pro (19.499.000đ) khác nhau dựa trên mức độ độ cận/loạn thị, độ phức tạp của bề mặt giác mạc, thiết kế cá nhân hóa của tròng kính cũng như bộ phụ kiện và mức độ đồng hành theo dõi đi kèm. Bạn sẽ được chuyên viên tư vấn rõ dòng nào phù hợp nhất sau khi thăm khám.',
  },
  {
    id: 'faq-3',
    category: 'Sản phẩm',
    question: 'Những ai phù hợp sử dụng LUMORA Ortho-K?',
    answer:
      'Sản phẩm phù hợp cho cả trẻ em (học sinh đang trong giai đoạn tăng độ cận), sinh viên và người lớn bị cận thị muốn sinh hoạt ban ngày không cần kính gọng hoặc chưa muốn phẫu thuật. Tuy nhiên, mỗi người cần được chuyên viên khúc xạ hoặc bác sĩ thăm khám trực tiếp để xác định mức độ phù hợp.',
  },
  {
    id: 'faq-4',
    category: 'An toàn & Hiệu quả',
    question: 'Đeo lens ban đêm có an toàn không?',
    answer:
      'Ortho-K là phương pháp được ứng dụng rộng rãi trong nhãn khoa khi sử dụng đúng chỉ định. Độ an toàn phụ thuộc rất lớn vào việc thăm khám ban đầu, tuân thủ quy trình rửa tay – vệ sinh – bảo quản lens mỗi ngày và tái khám định kỳ theo hướng dẫn của chuyên viên khúc xạ/bác sĩ.',
  },
  {
    id: 'faq-5',
    category: 'An toàn & Hiệu quả',
    question: 'Sau bao lâu thì thấy sự thay đổi thị lực vào ban ngày?',
    answer:
      'Nhiều người dùng nhận thấy thị lực ban ngày cải thiện dần sau vài đêm đến 1–2 tuần đầu sử dụng đều đặn. Tuy nhiên, tốc độ đáp ứng và kết quả thực tế có thể khác nhau ở mỗi người tùy thuộc vào độ cận, cấu trúc giác mạc và thời gian ngủ mỗi đêm.',
  },
  {
    id: 'faq-6',
    category: 'An toàn & Hiệu quả',
    question: 'LUMORA Ortho-K có chữa khỏi hoàn toàn cận thị không?',
    answer:
      'Không. Chúng tôi luôn chia sẻ trung thực rằng Ortho-K giúp tạm thời chỉnh hình giác mạc khi ngủ để nhìn rõ ban ngày và hỗ trợ kiểm soát tiến triển cận thị, không phải phương pháp chữa khỏi vĩnh viễn. Nếu ngừng đeo kính, giác mạc sẽ dần trở về trạng thái ban đầu.',
  },
  {
    id: 'faq-7',
    category: 'Sử dụng & Bảo quản',
    question: 'Việc vệ sinh và bảo quản lens có phức tạp không?',
    answer:
      'Quy trình gồm các bước cố định hằng ngày: rửa sạch tay, dùng dung dịch chuyên dụng để làm sạch và ngâm lens trong hộp bảo quản sạch. Khi mua sản phẩm, bạn được tặng kèm bộ dụng cụ vệ sinh/bảo quản và hướng dẫn chi tiết từng bước, đồng thời ứng dụng sẽ nhắc lịch thực hiện hằng ngày.',
  },
  {
    id: 'faq-8',
    category: 'Sử dụng & Bảo quản',
    question: 'Khi nào tôi cần đi tái khám thị lực?',
    answer:
      'Thông thường người dùng sẽ có các mốc kiểm tra sau đêm đầu tiên, sau 1 tuần, 1 tháng và định kỳ mỗi 3–6 tháng theo lịch của chuyên viên khúc xạ/bác sĩ. Nếu có cảm giác cộm, đỏ mắt hoặc nhìn mờ bất thường, bạn cần tháo lens và liên hệ tư vấn hoặc cơ sở y tế ngay.',
  },
  {
    id: 'faq-9',
    category: 'Giá & Đặt hàng',
    question: 'Giá lens LUMORA Ortho-K gồm những gì?',
    answer:
      'LUMORA hiện có 3 mức giá: Standard (10.499.000đ), Plus (14.499.000đ) và Pro (19.499.000đ). Mỗi gói bao gồm cặp lens Ortho-K tương ứng, hộp bảo quản, bộ dụng cụ vệ sinh và quyền sử dụng ứng dụng theo dõi thị lực. Danh mục chi tiết theo từng gói sẽ được bộ phận CSKH xác nhận cụ thể khi tư vấn trước khi chốt đơn.',
  },
  {
    id: 'faq-10',
    category: 'Giá & Đặt hàng',
    question: 'Quy trình đặt hàng LUMORA Ortho-K diễn ra như thế nào?',
    answer:
      'Bạn chỉ cần chọn phiên bản quan tâm và điền form đăng ký đặt hàng trên website. Sau đó, bộ phận Chăm sóc khách hàng của LUMORA (phụ trách bởi Huỳnh Duy Anh) sẽ liên hệ trực tiếp để tư vấn tình trạng thị lực, xác nhận dòng kính và mức giá cụ thể trước khi tiến hành bước giao hàng.',
  },
  {
    id: 'faq-11',
    category: 'Giá & Đặt hàng',
    question: 'Có thể trả góp hoặc sử dụng voucher khuyến mãi không?',
    answer:
      'LUMORA có các chương trình giảm giá lần đầu mua hàng, voucher, tích điểm và ưu đãi khách hàng thân thiết. Về chính sách trả góp hoặc điều kiện áp dụng voucher cho từng trường hợp cụ thể, vui lòng liên hệ trực tiếp với chúng tôi qua số 0907 600 377 để được tư vấn chính xác nhất.',
  },
  {
    id: 'faq-12',
    category: 'Sản phẩm',
    question: 'Ứng dụng theo dõi thị lực LUMORA kết nối như thế nào?',
    answer:
      'Trên bao bì hộp sản phẩm LUMORA Ortho-K có in sẵn mã QR. Bạn chỉ cần quét mã để tải ứng dụng, tạo hồ sơ cá nhân hóa nhằm lưu lịch sử thị lực, nhận nhắc lịch giờ đeo/tháo lens và lịch tái khám định kỳ.',
  },
];

export const GUIDE_STEPS = {
  wear: [
    'Rửa tay thật sạch bằng xà phòng dịu nhẹ và lau khô bằng khăn không xơ.',
    'Kiểm tra lens dưới ánh sáng để đảm bảo kính sạch, không nứt vỡ hoặc dính bụi.',
    'Nhỏ 1–2 giọt nước mắt nhân tạo hoặc dung dịch phù hợp vào lòng lens theo hướng dẫn chuyên môn.',
    'Nhìn thẳng vào gương, dùng ngón tay giữ nhẹ mi trên và mi dưới rồi đặt lens vào chính giữa tròng đen.',
    'Chớp mắt nhẹ nhàng vài lần, kiểm tra cảm giác thoải mái trước khi đi ngủ.',
  ],
  remove: [
    'Vào buổi sáng, rửa sạch tay và nhỏ nước mắt nhân tạo trước khi tháo để lens di chuyển dễ dàng trên bề mặt mắt.',
    'Đảm bảo lens không bị dính chặt trước khi thao tác; nếu thấy khô hãy nhỏ thêm dung dịch và đợi vài phút.',
    'Dùng dụng cụ tháo lens chuyên dụng (hoặc thao tác theo đúng hướng dẫn của chuyên viên) nhẹ nhàng lấy kính ra.',
    'Vệ sinh lens ngay sau khi tháo và đặt vào đúng ngăn Trái (L) / Phải (R) trong hộp bảo quản.',
  ],
  care: [
    'Luôn sử dụng dung dịch ngâm rửa chuyên dụng dành cho kính áp tròng cứng thấm khí theo chỉ dẫn.',
    'Tuyệt đối không dùng nước máy, nước lọc đóng chai hay nước bọt để rửa lens hoặc hộp đựng.',
    'Thay dung dịch mới mỗi ngày trong hộp bảo quản; không tái sử dụng dung dịch cũ.',
    'Vệ sinh hộp đựng lens định kỳ và thay hộp mới theo khuyến nghị của chuyên viên.',
  ],
  avoid: [
    'Không đeo lens khi mắt đang đỏ, đau, cộm rát, chảy ghèn hoặc có dấu hiệu viêm nhiễm.',
    'Không ngủ ít hơn thời gian tối thiểu được chuyên viên khuyến nghị nếu muốn duy trì độ ổn định thị lực ban ngày.',
    'Không tự ý dùng chung lens hoặc dung dịch với người khác.',
    'Không bỏ qua các buổi tái khám định kỳ ngay cả khi bạn cảm thấy mắt vẫn đang nhìn rõ.',
  ],
};
