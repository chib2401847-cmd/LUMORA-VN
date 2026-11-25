import React from 'react';
import { Phone, Mail, Clock, UserCheck } from 'lucide-react';
import { BRAND, CONTACT } from '../data/lumoraData';

interface ConsultationCardProps {
  heading?: string;
  subheading?: string;
  compact?: boolean;
}

export const ConsultationCard: React.FC<ConsultationCardProps> = ({
  heading = 'Tư vấn trực tiếp',
  subheading = 'Liên hệ trực tiếp với bộ phận Chăm sóc khách hàng để được giải đáp về tình trạng thị lực, quy trình sử dụng và chi phí cụ thể.',
  compact = false,
}) => {
  return (
    <section
      aria-label="Thông tin tư vấn trực tiếp"
      className={`relative overflow-hidden rounded-2xl border border-[#C9CDD6]/80 dark:border-[#2B354A] bg-white dark:bg-[#171E2C] ${
        compact ? 'p-6' : 'p-6 sm:p-8 lg:p-10'
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#5B8FB9] dark:text-[#7EB2DB]">
            <UserCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Hỗ trợ khách hàng LUMORA Eyecare</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D2433] dark:text-[#F5F4F1]">
            {heading}
          </h2>

          <p className="text-sm sm:text-base text-[#1D2433]/75 dark:text-[#C9CDD6] leading-relaxed">
            {subheading}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#1D2433] dark:text-[#F5F4F1]">
            <div>
              <span className="font-semibold">{CONTACT.advisorName}</span>
              <span className="mx-2 text-[#C9CDD6] dark:text-[#4A5568]" aria-hidden="true">
                ·
              </span>
              <span className="text-[#1D2433]/70 dark:text-[#C9CDD6]">{CONTACT.advisorTitle}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#1D2433]/65 dark:text-[#9BA5B8]">
              <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Giờ làm việc: {BRAND.workingHoursPlaceholder}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1D2433] text-[#F5F4F1] dark:bg-[#F5F4F1] dark:text-[#1D2433] font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B8FB9]"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="tabular-nums">Gọi ngay · {CONTACT.phoneDisplay}</span>
          </a>

          <a
            href={CONTACT.emailHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#5B8FB9]/50 bg-[#5B8FB9]/10 text-[#1D2433] dark:text-[#F5F4F1] dark:border-[#7EB2DB]/40 dark:bg-[#7EB2DB]/15 font-medium text-sm hover:bg-[#5B8FB9]/20 dark:hover:bg-[#7EB2DB]/25 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B8FB9]"
          >
            <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Gửi email</span>
          </a>
        </div>
      </div>

      <p className="mt-4 pt-4 border-t border-[#C9CDD6]/50 dark:border-[#2B354A] text-xs text-[#1D2433]/65 dark:text-[#9BA5B8] break-all sm:break-normal">
        Email chính thức:{' '}
        <a
          href={CONTACT.emailHref}
          className="underline decoration-[#5B8FB9]/50 underline-offset-2 hover:text-[#1D2433] dark:hover:text-white"
        >
          {CONTACT.email}
        </a>
      </p>
    </section>
  );
};
