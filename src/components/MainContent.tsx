import React from 'react';
import {
  Bell,
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  Monitor,
  Wrench,
  Heart,
  Scale,
  GraduationCap,
  FileText,
  Video,
  Headphones,
  Image as ImageIcon,
  ArrowRight,
  Star,
  Edit,
  Newspaper,
  BookCheck,
} from 'lucide-react';
import {
  ANNOUNCEMENTS,
  SCHEDULES,
  LEARNING_PROGRAMS,
  NEWS_ARTICLES,
  libraryImg,
} from '../data/mockData';
import { Announcement, ActivitySchedule, LearningProgram, NewsArticle } from '../types';

interface MainContentProps {
  onSelectAnnouncement: (item: Announcement) => void;
  onSelectSchedule: (item: ActivitySchedule) => void;
  onSelectProgram: (program: LearningProgram) => void;
  onSelectNews: (news: NewsArticle) => void;
  onSelectLibraryCategory: (cat: string) => void;
  onOpenExemplaryModal: () => void;
  onOpenRegisterModal: () => void;
  onViewAllAnnouncements: () => void;
  onViewAllNews: () => void;
}

export const MainContent: React.FC<MainContentProps> = ({
  onSelectAnnouncement,
  onSelectSchedule,
  onSelectProgram,
  onSelectNews,
  onSelectLibraryCategory,
  onOpenExemplaryModal,
  onOpenRegisterModal,
  onViewAllAnnouncements,
  onViewAllNews,
}) => {
  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'book':
        return <BookOpen className="w-5 h-5 text-white" />;
      case 'laptop':
        return <Monitor className="w-5 h-5 text-white" />;
      case 'gear':
        return <Wrench className="w-5 h-5 text-white" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-white" />;
      case 'scale':
        return <Scale className="w-5 h-5 text-white" />;
      case 'cap':
      default:
        return <GraduationCap className="w-5 h-5 text-white" />;
    }
  };

  return (
    <main className="py-8 bg-[#f3f7fc]">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          
          {/* ================= COLUMN 1 ================= */}
          <div className="space-y-6">
            {/* Card: Thông báo mới nhất */}
            <section
              id="thong-bao"
              className="bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs"
            >
              <div className="flex items-center justify-between pb-3 mb-1 border-b border-[#d9e4f2]/70">
                <h2 className="text-[19px] font-bold text-[#124a9e] flex items-center gap-2.5">
                  <Bell className="w-5 h-5 text-[#0a58c8]" />
                  Thông báo mới nhất
                </h2>
                <button
                  type="button"
                  onClick={onViewAllAnnouncements}
                  className="text-xs font-semibold text-[#0a58c8] hover:underline cursor-pointer"
                >
                  Xem tất cả
                </button>
              </div>

              <div className="divide-y divide-[#d9e4f2]">
                {ANNOUNCEMENTS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectAnnouncement(item)}
                    className="py-3.5 first:pt-2 last:pb-1 flex gap-3.5 cursor-pointer group hover:bg-[#f8fafc] -mx-2 px-2 rounded-lg transition-colors"
                  >
                    {/* Date badge */}
                    <div className="shrink-0 w-14 h-14 rounded-lg bg-[#eef5fd] border border-[#d9e4f2] flex flex-col items-center justify-center text-[#124a9e]">
                      <span className="text-xl font-bold leading-none">{item.day}</span>
                      <span className="text-[11px] font-medium text-[#566681] mt-0.5">
                        {item.monthYear}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[14.5px] font-semibold text-[#1b2740] group-hover:text-[#0a58c8] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#566681] mt-1 line-clamp-1">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Card: Lịch hoạt động */}
            <section
              id="lich"
              className="bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs"
            >
              <div className="pb-3 border-b border-[#d9e4f2]/70 mb-3">
                <h2 className="text-[19px] font-bold text-[#124a9e] flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-[#0a58c8]" />
                  Lịch hoạt động
                </h2>
                <p className="text-xs text-[#566681] mt-0.5">
                  Thời gian, nội dung, địa điểm, đối tượng tham gia.
                </p>
              </div>

              <div className="divide-y divide-[#d9e4f2]">
                {SCHEDULES.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectSchedule(item)}
                    className="py-3.5 first:pt-1 last:pb-1 flex gap-3.5 cursor-pointer group hover:bg-[#f8fafc] -mx-2 px-2 rounded-lg transition-colors"
                  >
                    {/* Date badge */}
                    <div className="shrink-0 w-14 h-14 rounded-lg bg-[#eef5fd] border border-[#d9e4f2] flex flex-col items-center justify-center text-[#124a9e]">
                      <span className="text-xl font-bold leading-none">{item.day}</span>
                      <span className="text-[11px] font-medium text-[#566681] mt-0.5">
                        {item.monthYear}
                      </span>
                    </div>

                    <div className="min-w-0 space-y-1">
                      <h3 className="text-[14.5px] font-semibold text-[#1b2740] group-hover:text-[#0a58c8] transition-colors line-clamp-1 leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#566681]">
                        <span className="inline-flex items-center gap-1 text-[#0a58c8]">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#2a8a35]">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="space-y-6">
            {/* Card: Chương trình học tập */}
            <section
              id="hoc-tap"
              className="bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs"
            >
              <div className="pb-3 border-b border-[#d9e4f2]/70 mb-3.5">
                <h2 className="text-[19px] font-bold text-[#124a9e] flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-[#0a58c8]" />
                  Chương trình học tập
                </h2>
                <p className="text-xs text-[#566681] mt-0.5">
                  Sáu nhóm chương trình Trung tâm đang triển khai.
                </p>
              </div>

              {/* 6 Tiles Grid (2 cols x 3 rows) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {LEARNING_PROGRAMS.map((program) => (
                  <button
                    key={program.id}
                    type="button"
                    onClick={() => onSelectProgram(program)}
                    className={`${program.colorClass} hover:opacity-95 text-white p-3 rounded-xl flex items-center gap-3 text-left transition-transform hover:-translate-y-0.5 cursor-pointer shadow-xs min-h-[66px]`}
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                      {getProgramIcon(program.iconName)}
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium leading-snug">
                      {program.title}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Card: Thư viện số */}
            <section
              id="thu-vien"
              className="bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs"
            >
              <div className="pb-3 border-b border-[#d9e4f2]/70 mb-3.5">
                <h2 className="text-[19px] font-bold text-[#124a9e] flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#0a58c8]" />
                  Thư viện số
                </h2>
                <p className="text-xs text-[#566681] mt-0.5">
                  Tài liệu học tập mở cho mọi người dân.
                </p>
              </div>

              {/* 5 Quick Category Buttons */}
              <div className="grid grid-cols-5 gap-2 text-center">
                <button
                  type="button"
                  onClick={() => onSelectLibraryCategory('ebook')}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#e11d48] group-hover:scale-105 transition-transform flex items-center justify-center text-white shadow-xs mb-1.5">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#1b2740] leading-tight">
                    Sách điện tử
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectLibraryCategory('video')}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0a58c8] group-hover:scale-105 transition-transform flex items-center justify-center text-white shadow-xs mb-1.5">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#1b2740] leading-tight">
                    Video bài giảng
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectLibraryCategory('audio')}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#7c3aed] group-hover:scale-105 transition-transform flex items-center justify-center text-white shadow-xs mb-1.5">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#1b2740] leading-tight">
                    Audio / podcast
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectLibraryCategory('guide')}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#2a8a35] group-hover:scale-105 transition-transform flex items-center justify-center text-white shadow-xs mb-1.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#1b2740] leading-tight">
                    Tài liệu hướng dẫn
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectLibraryCategory('infographic')}
                  className="group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#d97706] group-hover:scale-105 transition-transform flex items-center justify-center text-white shadow-xs mb-1.5">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#1b2740] leading-tight">
                    Infographic
                  </span>
                </button>
              </div>

              {/* Feature Library Image Banner */}
              <div
                onClick={() => onSelectLibraryCategory('all')}
                className="mt-4 relative rounded-xl overflow-hidden h-[105px] border border-[#d9e4f2] cursor-pointer group shadow-xs"
              >
                <img
                  src={libraryImg}
                  alt="Thư viện số cộng đồng"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a58c8]/85 via-[#0a58c8]/50 to-transparent flex items-center px-4">
                  <div>
                    <span className="text-white font-bold text-sm sm:text-base drop-shadow-sm block">
                      Tri thức là hành trang của mỗi người
                    </span>
                    <span className="text-white/90 text-xs inline-flex items-center gap-1 mt-1 font-medium group-hover:underline">
                      Khám phá kho tư liệu mở <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="space-y-6">
            {/* Card: Tin tức – hoạt động */}
            <section
              id="tin-tuc"
              className="bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs"
            >
              <div className="flex items-center justify-between pb-3 mb-1 border-b border-[#d9e4f2]/70">
                <h2 className="text-[19px] font-bold text-[#124a9e] flex items-center gap-2.5">
                  <Newspaper className="w-5 h-5 text-[#0a58c8]" />
                  Tin tức – hoạt động
                </h2>
                <button
                  type="button"
                  onClick={onViewAllNews}
                  className="text-xs font-semibold text-[#0a58c8] hover:underline cursor-pointer"
                >
                  Xem tất cả
                </button>
              </div>

              <div className="divide-y divide-[#d9e4f2]">
                {NEWS_ARTICLES.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => onSelectNews(article)}
                    className="py-3 first:pt-2 last:pb-1 flex gap-3 cursor-pointer group hover:bg-[#f8fafc] -mx-2 px-2 rounded-lg transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="shrink-0 w-24 h-16 rounded-lg overflow-hidden border border-[#d9e4f2] bg-slate-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="min-w-0">
                      <span className="text-[11px] text-[#566681] block">
                        {article.date}
                      </span>
                      <h3 className="text-[13.5px] font-semibold text-[#1b2740] group-hover:text-[#0a58c8] transition-colors line-clamp-2 leading-snug mt-0.5">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Card: Gương học tập – người tốt, việc tốt */}
            <section className="bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs">
              <h2 className="text-[17px] font-bold text-[#124a9e] flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-400" />
                Gương học tập – người tốt, việc tốt
              </h2>
              <div className="flex gap-3 items-center mb-3">
                <p className="text-xs sm:text-[13px] text-[#566681] leading-relaxed flex-1">
                  Gia đình học tập, dòng họ học tập, cộng đồng học tập và những mô hình tự
                  học hiệu quả tại địa phương.
                </p>
                {/* Visual badge/quote illustration */}
                <div className="shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-[#eef5fd] to-amber-50 border border-amber-200 p-1.5 flex flex-col items-center justify-center text-center">
                  <BookCheck className="w-6 h-6 text-amber-600 mb-1" />
                  <span className="text-[9px] font-bold text-[#124a9e] leading-tight">
                    Học tốt hôm nay, Kiến tạo tương lai
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenExemplaryModal}
                className="w-full py-2.5 px-4 rounded-full bg-[#0a58c8] hover:bg-[#0848a6] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer text-center"
              >
                Xem các gương tiêu biểu
              </button>
            </section>

            {/* Card: Đăng ký nhu cầu học tập */}
            <section
              id="dang-ky"
              className="bg-white rounded-xl border border-[#d9e4f2] p-5 shadow-xs"
            >
              <h2 className="text-[17px] font-bold text-[#124a9e] flex items-center gap-2 mb-2">
                <Edit className="w-5 h-5 text-[#0a58c8]" />
                Đăng ký nhu cầu học tập
              </h2>
              <p className="text-xs sm:text-[13px] text-[#566681] leading-relaxed mb-3.5">
                Cho Trung tâm biết nội dung bạn muốn học để sắp xếp lớp phù hợp. Thông tin
                cá nhân chỉ dùng cho việc tổ chức lớp học.
              </p>
              <button
                type="button"
                onClick={onOpenRegisterModal}
                className="w-full py-2.5 px-4 rounded-full bg-[#0a58c8] hover:bg-[#0848a6] text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Đăng ký ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
};
