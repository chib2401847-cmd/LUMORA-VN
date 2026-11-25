import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';
import { CONTACT } from '../data/lumoraData';

interface MobileStickyBarProps {
  onOrderClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOrderClick }) => {
  return (
    <div
      aria-label="Thanh thao tác nhanh trên di động"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[#C9CDD6]/80 dark:border-[#2B354A] bg-[#F5F4F1]/95 dark:bg-[#0F141F]/95 backdrop-blur-md px-3 py-2"
    >
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={CONTACT.phoneHref}
          className="h-10 inline-flex items-center justify-center gap-2 rounded-xl border border-[#5B8FB9]/60 bg-[#5B8FB9]/12 text-[#1D2433] dark:text-[#F5F4F1] dark:bg-[#7EB2DB]/15 text-xs font-semibold whitespace-nowrap"
        >
          <Phone className="w-4 h-4 shrink-0 text-[#5B8FB9] dark:text-[#7EB2DB]" aria-hidden="true" />
          <span>Gọi tư vấn</span>
        </a>

        <a
          href="#/dat-hang"
          onClick={(e) => {
            e.preventDefault();
            onOrderClick();
          }}
          className="h-10 inline-flex items-center justify-center gap-2 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] text-xs font-semibold whitespace-nowrap"
        >
          <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Đặt hàng</span>
        </a>
      </div>
    </div>
  );
};
