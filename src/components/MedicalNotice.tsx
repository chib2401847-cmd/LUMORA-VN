import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const MedicalNotice: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <aside
      aria-label="Lưu ý chuyên môn y tế"
      className={`rounded-2xl border border-[#C9CDD6] dark:border-[#2B354A] bg-[#F5F4F1] dark:bg-[#141B29] p-5 sm:p-6 ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <ShieldAlert
          className="w-5 h-5 text-[#5B8FB9] dark:text-[#7EB2DB] shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <div className="space-y-1.5 text-xs sm:text-sm text-[#1D2433]/80 dark:text-[#C9CDD6] leading-relaxed">
          <p className="font-semibold text-[#1D2433] dark:text-[#F5F4F1]">
            Lưu ý chuyên môn &amp; An toàn sử dụng
          </p>
          <p>
            Kính áp tròng ban đêm LUMORA Ortho-K chỉ được sử dụng theo thăm khám và hướng dẫn của
            chuyên viên khúc xạ hoặc bác sĩ chuyên khoa mắt. Người sử dụng cần tuân thủ quy trình
            vệ sinh, bảo quản và lịch khám – tái khám định kỳ. Hiệu quả chỉnh hình giác mạc ban
            ngày mang tính tạm thời và kết quả có thể khác nhau ở mỗi người tùy theo tình trạng mắt.
          </p>
        </div>
      </div>
    </aside>
  );
};
