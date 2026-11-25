import { useState, useEffect, useCallback } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { AppPage } from './pages/AppPage';
import { GuidePage } from './pages/GuidePage';
import { FaqPage } from './pages/FaqPage';
import { PromotionsPage } from './pages/PromotionsPage';
import { BlogPage } from './pages/BlogPage';
import { OrderPage } from './pages/OrderPage';
import { ContactPage } from './pages/ContactPage';
import { PolicyPage } from './pages/PolicyPage';
import { BLOG_POSTS } from './data/lumoraData';
import { ProductTier } from './types';

function parseHashState(): { path: string; tierParam?: ProductTier['id'] } {
  const raw = window.location.hash.replace(/^#/, '');
  if (!raw || raw === '') return { path: '/' };
  const [pathPart, queryPart] = raw.split('?');
  const path = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
  let tierParam: ProductTier['id'] | undefined;
  if (queryPart) {
    const params = new URLSearchParams(queryPart);
    const goi = params.get('goi');
    if (goi === 'standard' || goi === 'plus' || goi === 'pro') {
      tierParam = goi;
    }
  }
  return { path, tierParam };
}

function getPageSeo(path: string): { title: string; description: string } {
  if (path.startsWith('/tin-tuc/')) {
    const slug = path.replace('/tin-tuc/', '');
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (post) {
      return {
        title: `${post.title} | LUMORA Eyecare`,
        description: post.excerpt,
      };
    }
  }

  switch (path) {
    case '/gioi-thieu':
      return {
        title: 'Giới thiệu LUMORA Eyecare – Ánh sáng cho đôi mắt, Tầm nhìn cho tương lai',
        description:
          'Câu chuyện thương hiệu, tầm nhìn, sứ mạng, 4 giá trị cốt lõi và đội ngũ chăm sóc khách hàng của LUMORA Eyecare tại Đại học Cần Thơ.',
      };
    case '/san-pham':
      return {
        title: '3 dòng LUMORA Ortho-K (10.499.000đ – 19.499.000đ) | LUMORA Eyecare',
        description:
          'Khám phá 3 phiên bản LUMORA Ortho-K Standard, Plus và Pro với mức giá từ 10.499.000đ đến 19.499.000đ kèm ứng dụng theo dõi thị lực.',
      };
    case '/ung-dung':
      return {
        title: 'Ứng dụng theo dõi thị lực | LUMORA Eyecare',
        description:
          'Theo dõi chu kỳ đeo lens, nhắc lịch tái khám và lưu lịch sử thị lực cá nhân hóa cùng ứng dụng LUMORA.',
      };
    case '/huong-dan':
      return {
        title: 'Hướng dẫn sử dụng & bảo quản lens Ortho-K | LUMORA Eyecare',
        description:
          'Quy trình đeo, tháo, vệ sinh, bảo quản kính áp tròng ban đêm LUMORA Ortho-K và lịch tái khám định kỳ.',
      };
    case '/faq':
      return {
        title: 'Câu hỏi thường gặp (FAQ) | LUMORA Eyecare',
        description:
          'Giải đáp thắc mắc về 3 dòng lens ngủ LUMORA Ortho-K, tính an toàn, cách vệ sinh, giá bán và quy trình đặt hàng.',
      };
    case '/khuyen-mai':
      return {
        title: 'Khuyến mãi & Ưu đãi khách hàng | LUMORA Eyecare',
        description:
          'Ưu đãi lần đầu mua hàng, voucher, tích điểm khách hàng thân thiết và quà tặng bộ dụng cụ vệ sinh từ LUMORA.',
      };
    case '/tin-tuc':
      return {
        title: 'Tin tức & Kiến thức chăm sóc thị lực | LUMORA Eyecare',
        description:
          'Bài viết về cận thị học đường, cơ chế hoạt động của lens ngủ Ortho-K và thói quen bảo vệ mắt cho học sinh, sinh viên.',
      };
    case '/dat-hang':
      return {
        title: 'Đặt hàng LUMORA Ortho-K – Chọn phiên bản & Tư vấn cụ thể',
        description:
          'Đăng ký đặt hàng LUMORA Ortho-K Standard (10.499.000đ), Plus (14.499.000đ) hoặc Pro (19.499.000đ) và nhận tư vấn trực tiếp.',
      };
    case '/lien-he':
      return {
        title: 'Liên hệ & Tư vấn trực tiếp | LUMORA Eyecare',
        description:
          'Liên hệ Huỳnh Duy Anh (0907 600 377) tại Khu 2, Đại học Cần Thơ để được tư vấn trực tiếp về LUMORA Ortho-K.',
      };
    case '/chinh-sach-bao-mat':
      return {
        title: 'Chính sách bảo mật | LUMORA Eyecare',
        description: 'Cam kết bảo vệ thông tin cá nhân và dữ liệu theo dõi thị lực tại LUMORA Eyecare.',
      };
    case '/chinh-sach-doi-tra':
      return {
        title: 'Chính sách đổi trả & bảo hành | LUMORA Eyecare',
        description: 'Thông tin chính sách đổi trả và bảo hành sản phẩm LUMORA Ortho-K.',
      };
    case '/dieu-khoan-su-dung':
      return {
        title: 'Điều khoản sử dụng | LUMORA Eyecare',
        description: 'Quy định sử dụng thông tin và dịch vụ trên website LUMORA Eyecare.',
      };
    default:
      return {
        title: 'LUMORA Eyecare – Ánh sáng cho đôi mắt, Tầm nhìn cho tương lai',
        description:
          'LUMORA Eyecare mang đến 3 dòng kính áp tròng ban đêm LUMORA Ortho-K (10.499.000đ – 14.499.000đ – 19.499.000đ) kết hợp ứng dụng theo dõi thị lực.',
      };
  }
}

export default function App() {
  const [hashState, setHashState] = useState<{ path: string; tierParam?: ProductTier['id'] }>(() =>
    parseHashState()
  );
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('lumora-theme') === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('lumora-theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage error
    }
  }, [isDark]);

  useEffect(() => {
    const handleHashChange = () => {
      setHashState(parseHashState());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const seo = getPageSeo(hashState.path);
    document.title = seo.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', seo.description);
    }
  }, [hashState.path]);

  const navigate = useCallback((path: string) => {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    if (window.location.hash !== `#${normalized}`) {
      window.location.hash = `#${normalized}`;
    } else {
      setHashState(parseHashState());
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  const renderPage = () => {
    if (hashState.path.startsWith('/tin-tuc/')) {
      const slug = hashState.path.replace('/tin-tuc/', '');
      return <BlogPage slug={slug} onNavigate={navigate} />;
    }

    switch (hashState.path) {
      case '/gioi-thieu':
        return <AboutPage />;
      case '/san-pham':
        return <ProductPage onNavigate={navigate} />;
      case '/ung-dung':
        return <AppPage onNavigate={navigate} />;
      case '/huong-dan':
        return <GuidePage onNavigate={navigate} />;
      case '/faq':
        return <FaqPage />;
      case '/khuyen-mai':
        return <PromotionsPage onNavigate={navigate} />;
      case '/tin-tuc':
        return <BlogPage onNavigate={navigate} />;
      case '/dat-hang':
        return <OrderPage initialTierId={hashState.tierParam} />;
      case '/lien-he':
        return <ContactPage />;
      case '/chinh-sach-bao-mat':
        return <PolicyPage type="privacy" />;
      case '/chinh-sach-doi-tra':
        return <PolicyPage type="warranty" />;
      case '/dieu-khoan-su-dung':
        return <PolicyPage type="terms" />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F5F4F1] dark:bg-[#0F141F] text-[#1D2433] dark:text-[#F5F4F1] transition-colors">
        <Navbar
          currentPath={hashState.path}
          onNavigate={navigate}
          isDark={isDark}
          onToggleTheme={() => setIsDark((prev) => !prev)}
        />

        <main className="flex-1">{renderPage()}</main>

        <Footer onNavigate={navigate} />
        <MobileStickyBar onOrderClick={() => navigate('/dat-hang')} />
      </div>
    </MotionConfig>
  );
}
