import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { BRAND, CONTACT } from '../data/lumoraData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const go = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-[#C9CDD6]/80 dark:border-[#2B354A] bg-[#F5F4F1] dark:bg-[#0B0F17] text-[#1D2433] dark:text-[#F5F4F1] pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#/"
              onClick={(e) => go(e, '/')}
              className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#5B8FB9] rounded-lg"
            >
              <img
                src={BRAND.logoSrc}
                alt="Logo LUMORA Eyecare"
                referrerPolicy="no-referrer"
                className="w-16 h-16 object-contain rounded-xl dark:bg-[#F5F4F1] dark:p-1"
              />
              <div>
                <p className="font-display text-base font-semibold tracking-[0.14em]">
                  LUMORA EYECARE
                </p>
                <p className="text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
                  Hoạt động từ {BRAND.since} · Chăm sóc thị lực &amp; công nghệ y tế
                </p>
              </div>
            </a>

            <p className="text-sm font-medium text-[#1D2433] dark:text-[#F5F4F1]">
              “{BRAND.mainSlogan}”
            </p>
            <p className="text-xs text-[#1D2433]/70 dark:text-[#9BA5B8] leading-relaxed max-w-sm">
              Giải pháp chăm sóc và kiểm soát cận thị kết hợp kính áp tròng ban đêm LUMORA Ortho-K
              cùng ứng dụng theo dõi thị lực cá nhân hóa dành cho học sinh, sinh viên và người trẻ.
            </p>

            <div className="space-y-1.5 pt-1 text-xs text-[#1D2433]/75 dark:text-[#C9CDD6]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5B8FB9] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BRAND.location}</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#5B8FB9] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Giờ làm việc: {BRAND.workingHoursPlaceholder}</span>
              </p>
              <p className="text-[#1D2433]/65 dark:text-[#9BA5B8] pl-6">
                Mạng xã hội: {BRAND.socialPlaceholder}
              </p>
            </div>
          </div>

          {/* Column 2: Khám phá */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-semibold tracking-wide">Khám phá</h3>
            <ul className="space-y-2.5 text-sm text-[#1D2433]/75 dark:text-[#C9CDD6]">
              <li>
                <a href="#/" onClick={(e) => go(e, '/')} className="hover:text-[#5B8FB9]">
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="#/gioi-thieu"
                  onClick={(e) => go(e, '/gioi-thieu')}
                  className="hover:text-[#5B8FB9]"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#/san-pham"
                  onClick={(e) => go(e, '/san-pham')}
                  className="hover:text-[#5B8FB9]"
                >
                  LUMORA Ortho-K
                </a>
              </li>
              <li>
                <a
                  href="#/ung-dung"
                  onClick={(e) => go(e, '/ung-dung')}
                  className="hover:text-[#5B8FB9]"
                >
                  Ứng dụng theo dõi
                </a>
              </li>
              <li>
                <a
                  href="#/huong-dan"
                  onClick={(e) => go(e, '/huong-dan')}
                  className="hover:text-[#5B8FB9]"
                >
                  Hướng dẫn sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Thông tin & Chính sách */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-semibold tracking-wide">
              Hỗ trợ &amp; Chính sách
            </h3>
            <ul className="space-y-2.5 text-sm text-[#1D2433]/75 dark:text-[#C9CDD6]">
              <li>
                <a
                  href="#/khuyen-mai"
                  onClick={(e) => go(e, '/khuyen-mai')}
                  className="hover:text-[#5B8FB9]"
                >
                  Chương trình khuyến mãi
                </a>
              </li>
              <li>
                <a
                  href="#/faq"
                  onClick={(e) => go(e, '/faq')}
                  className="hover:text-[#5B8FB9]"
                >
                  Câu hỏi thường gặp (FAQ)
                </a>
              </li>
              <li>
                <a
                  href="#/tin-tuc"
                  onClick={(e) => go(e, '/tin-tuc')}
                  className="hover:text-[#5B8FB9]"
                >
                  Tin tức &amp; Kiến thức mắt
                </a>
              </li>
              <li>
                <a
                  href="#/dat-hang"
                  onClick={(e) => go(e, '/dat-hang')}
                  className="hover:text-[#5B8FB9]"
                >
                  Đăng ký đặt hàng
                </a>
              </li>
              <li>
                <a
                  href="#/chinh-sach-bao-mat"
                  onClick={(e) => go(e, '/chinh-sach-bao-mat')}
                  className="hover:text-[#5B8FB9]"
                >
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  href="#/chinh-sach-doi-tra"
                  onClick={(e) => go(e, '/chinh-sach-doi-tra')}
                  className="hover:text-[#5B8FB9]"
                >
                  Chính sách đổi trả &amp; bảo hành
                </a>
              </li>
              <li>
                <a
                  href="#/dieu-khoan-su-dung"
                  onClick={(e) => go(e, '/dieu-khoan-su-dung')}
                  className="hover:text-[#5B8FB9]"
                >
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Tư vấn trực tiếp */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-[#C9CDD6] dark:border-[#2B354A] bg-white dark:bg-[#171E2C] p-5 space-y-3.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5B8FB9] dark:text-[#7EB2DB]">
                Tư vấn trực tiếp
              </p>
              <div>
                <p className="font-semibold text-sm text-[#1D2433] dark:text-[#F5F4F1]">
                  {CONTACT.advisorName}
                </p>
                <p className="text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
                  {CONTACT.advisorTitle}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-xs font-semibold hover:opacity-90 transition-opacity tabular-nums"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Gọi ngay · {CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#C9CDD6] dark:border-[#2B354A] text-xs font-medium hover:bg-[#F5F4F1] dark:hover:bg-[#1D2433] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Gửi email</span>
                </a>
                <a
                  href="#/lien-he"
                  onClick={(e) => go(e, '/lien-he')}
                  className="inline-flex items-center justify-center gap-1 pt-1 text-xs text-[#5B8FB9] dark:text-[#7EB2DB] hover:underline"
                >
                  <span>Xem trang Liên hệ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-10 pt-6 border-t border-[#C9CDD6]/70 dark:border-[#2B354A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
          <p>© {BRAND.since} {BRAND.legalName}. Bảo lưu mọi quyền.</p>
          <p className="max-w-2xl">
            Sản phẩm kính áp tròng ban đêm LUMORA Ortho-K sử dụng theo hướng dẫn của chuyên viên
            khúc xạ hoặc bác sĩ chuyên khoa mắt. Kết quả có thể khác nhau tùy cơ địa từng người.
          </p>
        </div>
      </div>
    </footer>
  );
};
