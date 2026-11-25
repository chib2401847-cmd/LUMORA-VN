export type RoutePath =
  | '/'
  | '/gioi-thieu'
  | '/san-pham'
  | '/ung-dung'
  | '/huong-dan'
  | '/faq'
  | '/khuyen-mai'
  | '/tin-tuc'
  | '/dat-hang'
  | '/lien-he'
  | '/chinh-sach-bao-mat'
  | '/chinh-sach-doi-tra'
  | '/dieu-khoan-su-dung';

export interface ProductTier {
  id: 'standard' | 'plus' | 'pro';
  name: string;
  subtitle: string;
  priceDisplay: string;
  priceNumeric: number;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  suitableFor: string;
  description: string;
  included: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category:
    | 'Hợp tác thương hiệu'
    | 'Cận thị học đường'
    | 'Kiến thức Ortho-K'
    | 'Chăm sóc mắt'
    | 'Theo dõi thị lực';
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  placeholderNote: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  id: string;
  category: 'Sản phẩm' | 'An toàn & Hiệu quả' | 'Sử dụng & Bảo quản' | 'Giá & Đặt hàng';
  question: string;
  answer: string;
}

export interface PromotionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  discountPlaceholder: string;
  conditionPlaceholder: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
}
