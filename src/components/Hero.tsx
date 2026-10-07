import React from 'react';
import { Edit3, Calendar } from 'lucide-react';
import { heroImg } from '../data/mockData';

interface HeroProps {
  onOpenRegisterModal: () => void;
  onScrollToSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegisterModal,
  onScrollToSchedule,
}) => {
  return (
    <section className="bg-[#eef5fd] border-b border-[#d9e4f2]" id="gioi-thieu">
      <div className="max-w-[1240px] mx-auto px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.2] text-[#124a9e] tracking-tight">
              Học tập suốt đời,
              <span className="block text-[#2a8a35] mt-1">ngay tại cộng đồng của bạn</span>
            </h1>

            <p className="text-base sm:text-lg text-[#1b2740]/85 max-w-xl leading-relaxed">
              Chương trình học tập, lịch hoạt động, thư viện số và đăng ký lớp học của
              Trung tâm, cập nhật thường xuyên cho người dân xã Cửa Tùng.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenRegisterModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0a58c8] hover:bg-[#0848a6] text-white font-medium text-sm sm:text-base shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
              >
                <Edit3 className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Đăng ký nhu cầu học tập</span>
              </button>

              <button
                type="button"
                onClick={onScrollToSchedule}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#0a58c8] border-2 border-[#0a58c8]/30 hover:border-[#0a58c8] font-medium text-sm sm:text-base shadow-sm transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#0a58c8]" />
                <span>Xem lịch hoạt động</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#d9e4f2] shadow-md bg-white aspect-[4/3] sm:aspect-[16/10] group">
              <img
                src={heroImg}
                alt="Hoạt động học tập cộng đồng xã Cửa Tùng"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />

              {/* Slogan Banner Badge on the photo matching screenshot */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-[#124a9e]/20 px-3.5 py-2.5 rounded-xl shadow-lg max-w-[210px] text-right">
                <span className="block text-[11px] sm:text-xs font-bold text-[#124a9e] uppercase tracking-wider leading-snug">
                  HỌC ĐỂ PHÁT TRIỂN BẢN THÂN VÀ XÂY DỰNG QUÊ HƯƠNG
                </span>
              </div>

              {/* Bottom Subtle Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 flex items-center justify-between text-white text-xs sm:text-sm">
                <span className="font-medium drop-shadow">Trung tâm HTCĐ xã Cửa Tùng - Đồng hành cùng nhân dân</span>
                <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-[11px]">Học tập 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
