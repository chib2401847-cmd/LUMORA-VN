import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { BRAND } from '../data/lumoraData';
import { RoutePath } from '../types';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: RoutePath | string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  isDark,
  onToggleTheme,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<'product' | 'support' | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [currentPath]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isProductActive =
    currentPath === '/san-pham' || currentPath === '/ung-dung' || currentPath === '/huong-dan';
  const isSupportActive = currentPath === '/faq' || currentPath === '/lien-he';

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 border-b border-[#C9CDD6]/70 dark:border-[#2B354A] bg-[#F5F4F1]/95 dark:bg-[#0F141F]/95 backdrop-blur-md transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand wordmark + logo */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B8FB9] rounded-lg"
        >
          <img
            src={BRAND.logoSrc}
            alt="Logo LUMORA Eyecare"
            referrerPolicy="no-referrer"
            className="w-9 h-9 md:w-10 md:h-10 object-contain rounded-lg dark:bg-[#F5F4F1] dark:p-0.5 shrink-0"
          />
          <span className="font-display text-sm sm:text-base font-semibold tracking-[0.14em] text-[#1D2433] dark:text-[#F5F4F1] whitespace-nowrap shrink-0">
            LUMORA EYECARE
          </span>
        </a>

        {/* Zone 2: Desktop Navigation (5 concise single-line items) */}
        <nav
          aria-label="Điều hướng chính"
          className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-[#1D2433]/80 dark:text-[#C9CDD6]"
        >
          <a
            href="#/gioi-thieu"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/gioi-thieu');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentPath === '/gioi-thieu'
                ? 'border-[#1D2433] dark:border-[#F5F4F1] text-[#1D2433] dark:text-[#F5F4F1]'
                : 'border-transparent hover:text-[#1D2433] dark:hover:text-[#F5F4F1] hover:border-[#C9CDD6]'
            }`}
          >
            Giới thiệu
          </a>

          {/* Dropdown: Sản phẩm */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('product')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              aria-expanded={openMenu === 'product'}
              onClick={() => setOpenMenu(openMenu === 'product' ? null : 'product')}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                isProductActive
                  ? 'border-[#1D2433] dark:border-[#F5F4F1] text-[#1D2433] dark:text-[#F5F4F1]'
                  : 'border-transparent hover:text-[#1D2433] dark:hover:text-[#F5F4F1] hover:border-[#C9CDD6]'
              }`}
            >
              <span>Sản phẩm</span>
              <ChevronDown className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </button>

            {openMenu === 'product' && (
              <div className="absolute left-0 top-full pt-2 w-60 z-50">
                <div className="rounded-xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] shadow-lg p-1.5 flex flex-col">
                  <a
                    href="#/san-pham"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/san-pham');
                    }}
                    className={`px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPath === '/san-pham'
                        ? 'bg-[#F5F4F1] dark:bg-[#1D2433] text-[#1D2433] dark:text-[#F5F4F1] font-semibold'
                        : 'text-[#1D2433]/80 dark:text-[#C9CDD6] hover:bg-[#F5F4F1] dark:hover:bg-[#1D2433]'
                    }`}
                  >
                    LUMORA Ortho-K
                  </a>
                  <a
                    href="#/ung-dung"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/ung-dung');
                    }}
                    className={`px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPath === '/ung-dung'
                        ? 'bg-[#F5F4F1] dark:bg-[#1D2433] text-[#1D2433] dark:text-[#F5F4F1] font-semibold'
                        : 'text-[#1D2433]/80 dark:text-[#C9CDD6] hover:bg-[#F5F4F1] dark:hover:bg-[#1D2433]'
                    }`}
                  >
                    Ứng dụng theo dõi thị lực
                  </a>
                  <a
                    href="#/huong-dan"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/huong-dan');
                    }}
                    className={`px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPath === '/huong-dan'
                        ? 'bg-[#F5F4F1] dark:bg-[#1D2433] text-[#1D2433] dark:text-[#F5F4F1] font-semibold'
                        : 'text-[#1D2433]/80 dark:text-[#C9CDD6] hover:bg-[#F5F4F1] dark:hover:bg-[#1D2433]'
                    }`}
                  >
                    Hướng dẫn sử dụng &amp; bảo quản
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="#/khuyen-mai"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/khuyen-mai');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentPath === '/khuyen-mai'
                ? 'border-[#1D2433] dark:border-[#F5F4F1] text-[#1D2433] dark:text-[#F5F4F1]'
                : 'border-transparent hover:text-[#1D2433] dark:hover:text-[#F5F4F1] hover:border-[#C9CDD6]'
            }`}
          >
            Khuyến mãi
          </a>

          <a
            href="#/tin-tuc"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/tin-tuc');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentPath.startsWith('/tin-tuc')
                ? 'border-[#1D2433] dark:border-[#F5F4F1] text-[#1D2433] dark:text-[#F5F4F1]'
                : 'border-transparent hover:text-[#1D2433] dark:hover:text-[#F5F4F1] hover:border-[#C9CDD6]'
            }`}
          >
            Tin tức
          </a>

          {/* Dropdown: Hỗ trợ */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('support')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              aria-expanded={openMenu === 'support'}
              onClick={() => setOpenMenu(openMenu === 'support' ? null : 'support')}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                isSupportActive
                  ? 'border-[#1D2433] dark:border-[#F5F4F1] text-[#1D2433] dark:text-[#F5F4F1]'
                  : 'border-transparent hover:text-[#1D2433] dark:hover:text-[#F5F4F1] hover:border-[#C9CDD6]'
              }`}
            >
              <span>Hỗ trợ</span>
              <ChevronDown className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </button>

            {openMenu === 'support' && (
              <div className="absolute right-0 top-full pt-2 w-56 z-50">
                <div className="rounded-xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] shadow-lg p-1.5 flex flex-col">
                  <a
                    href="#/faq"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/faq');
                    }}
                    className={`px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPath === '/faq'
                        ? 'bg-[#F5F4F1] dark:bg-[#1D2433] text-[#1D2433] dark:text-[#F5F4F1] font-semibold'
                        : 'text-[#1D2433]/80 dark:text-[#C9CDD6] hover:bg-[#F5F4F1] dark:hover:bg-[#1D2433]'
                    }`}
                  >
                    Câu hỏi thường gặp
                  </a>
                  <a
                    href="#/lien-he"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/lien-he');
                    }}
                    className={`px-3.5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap ${
                      currentPath === '/lien-he'
                        ? 'bg-[#F5F4F1] dark:bg-[#1D2433] text-[#1D2433] dark:text-[#F5F4F1] font-semibold'
                        : 'text-[#1D2433]/80 dark:text-[#C9CDD6] hover:bg-[#F5F4F1] dark:hover:bg-[#1D2433]'
                    }`}
                  >
                    Liên hệ &amp; Tư vấn
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Theme Toggle + 1 Primary CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
            className="w-10 h-10 rounded-xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white/80 dark:bg-[#171E2C] text-[#1D2433] dark:text-[#F5F4F1] flex items-center justify-center hover:border-[#5B8FB9] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B8FB9]"
          >
            {isDark ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          <a
            href="#/dat-hang"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/dat-hang');
            }}
            className="hidden md:inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B8FB9]"
          >
            Đặt hàng ngay
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
            aria-expanded={mobileOpen}
            className="md:hidden w-10 h-10 rounded-xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white/80 dark:bg-[#171E2C] text-[#1D2433] dark:text-[#F5F4F1] flex items-center justify-center shrink-0"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#C9CDD6]/60 dark:border-[#2B354A] bg-[#F5F4F1] dark:bg-[#0F141F] px-4 py-4 max-h-[80vh] overflow-y-auto">
          <nav aria-label="Menu di động" className="flex flex-col space-y-1">
            {[
              { label: 'Trang chủ', path: '/' },
              { label: 'Giới thiệu thương hiệu', path: '/gioi-thieu' },
              { label: 'LUMORA Ortho-K (Sản phẩm)', path: '/san-pham' },
              { label: 'Ứng dụng theo dõi thị lực', path: '/ung-dung' },
              { label: 'Hướng dẫn sử dụng & bảo quản', path: '/huong-dan' },
              { label: 'Khuyến mãi', path: '/khuyen-mai' },
              { label: 'Câu hỏi thường gặp (FAQ)', path: '/faq' },
              { label: 'Tin tức / Blog', path: '/tin-tuc' },
              { label: 'Đặt hàng', path: '/dat-hang' },
              { label: 'Liên hệ & Tư vấn trực tiếp', path: '/lien-he' },
            ].map((item) => (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.path);
                }}
                className={`px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                  currentPath === item.path
                    ? 'bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433]'
                    : 'text-[#1D2433] dark:text-[#F5F4F1] hover:bg-white/70 dark:hover:bg-[#171E2C]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
